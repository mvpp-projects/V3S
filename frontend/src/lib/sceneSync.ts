import { getSocket, safeConnect } from "./socket";
import { ensureLoggedIn, getAccessToken, getCurrentUserId } from "./auth";
import { useSceneStore, type Object3D } from "../state/sceneStore";

type AckPayload = {
  ok?: boolean;
  code?: string;
};

let initialized = false;
let applyingRemote = false;
let sceneId = "";
let unsubscribeStore: (() => void) | null = null;
let activeSocket: ReturnType<typeof getSocket> | null = null;

function makeOpId(prefix: string): string {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function withRemoteApply(fn: () => void): void {
  applyingRemote = true;
  try {
    fn();
  } finally {
    applyingRemote = false;
  }
}

function emitAcked(
  event: "object:add" | "object:update" | "object:remove",
  payload: Record<string, unknown>
): void {
  const socket = getSocket();
  if (!socket || !socket.connected) {
    return;
  }

  socket.emit(event, payload, (ack?: AckPayload) => {
    if (!ack?.ok) {
      console.warn(`Socket event ${event} failed`, ack?.code || "UNKNOWN");
    }
  });
}

function emitObjectDiff(prev: Record<string, Object3D>, next: Record<string, Object3D>): void {
  if (applyingRemote) {
    return;
  }

  for (const [id, object] of Object.entries(next)) {
    const previous = prev[id];
    if (!previous) {
      emitAcked("object:add", {
        sceneId,
        opId: makeOpId("add"),
        object
      });
      continue;
    }

    const changed = JSON.stringify(previous) !== JSON.stringify(object);
    if (changed) {
      emitAcked("object:update", {
        sceneId,
        opId: makeOpId("upd"),
        object
      });
    }
  }

  for (const id of Object.keys(prev)) {
    if (!next[id]) {
      emitAcked("object:remove", {
        sceneId,
        opId: makeOpId("del"),
        objectId: id,
        expectedVersion: prev[id].version
      });
    }
  }
}

export async function initSceneSync(): Promise<void> {
  throw new Error("Use initSceneSyncForScene(sceneId)");
}

export async function initSceneSyncForScene(nextSceneId: string): Promise<void> {
  const targetSceneId = nextSceneId.trim();
  if (!targetSceneId) {
    throw new Error("Missing scene id");
  }

  if (initialized && sceneId === targetSceneId) {
    return;
  }

  teardownSceneSync();
  await ensureLoggedIn();
  sceneId = targetSceneId;
  initialized = true;
  useSceneStore.getState().setCurrentSceneId(sceneId);

  const socket = await safeConnect();
  if (!socket) {
    initialized = false;
    return;
  }
  activeSocket = socket;

  const token = getAccessToken();

  socket.emit("scene:join", { sceneId: targetSceneId, token }, (ack?: AckPayload) => {
    if (!ack?.ok) {
      console.warn("Failed to join scene", ack?.code || "UNKNOWN");
    }
  });

  socket.on("scene:snapshot", (payload: { sceneId: string; objects: Record<string, Object3D> }) => {
    withRemoteApply(() => {
      useSceneStore.getState().setCurrentSceneId(payload.sceneId);
      useSceneStore.getState().setSnapshot(payload.objects || {});
    });
  });

  socket.on("object:added", (payload: { object?: Object3D }) => {
    if (!payload?.object) {
      return;
    }
    withRemoteApply(() => {
      useSceneStore.getState().upsertObject(payload.object as Object3D);
    });
  });

  socket.on("object:updated", (payload: { object?: Object3D }) => {
    if (!payload?.object) {
      return;
    }
    withRemoteApply(() => {
      useSceneStore.getState().upsertObject(payload.object as Object3D);
    });
  });

  socket.on("object:removed", (payload: { objectId?: string }) => {
    if (!payload?.objectId) {
      return;
    }
    withRemoteApply(() => {
      useSceneStore.getState().removeObject(payload.objectId as string);
    });
  });

  socket.on("presence:cursor", (payload: { userId?: string; cursor?: { x: number; y: number }; color?: string }) => {
    if (!payload?.userId || !payload.cursor) {
      return;
    }
    if (payload.userId === getCurrentUserId()) {
      return;
    }

    useSceneStore.getState().setPresence({
      userId: payload.userId,
      cursor: payload.cursor,
      color: payload.color
    });
  });

  socket.on("presence:select", (payload: { userId?: string; selection?: string[]; color?: string }) => {
    if (!payload?.userId || !payload.selection) {
      return;
    }
    if (payload.userId === getCurrentUserId()) {
      return;
    }

    useSceneStore.getState().setPresence({
      userId: payload.userId,
      selection: payload.selection,
      color: payload.color
    });
  });

  socket.on("presence:left", (payload: { userId?: string }) => {
    if (!payload?.userId) {
      return;
    }
    useSceneStore.getState().removePresence(payload.userId);
  });

  socket.on("error", (payload: { code?: string }) => {
    if (payload?.code === "UNAUTHORIZED") {
      console.warn("Socket unauthorized, refresh auth and reconnect required.");
    }
  });

  let previousObjects = useSceneStore.getState().objects;
  let previousSelectedId = useSceneStore.getState().selectedId;

  unsubscribeStore = useSceneStore.subscribe((state) => {
    if (state.objects !== previousObjects) {
      emitObjectDiff(previousObjects, state.objects);
      previousObjects = state.objects;
    }
    if (state.selectedId !== previousSelectedId) {
      previousSelectedId = state.selectedId;
      const selected = state.selectedId ? [state.selectedId] : [];
      socket.emit("presence:select", {
        sceneId,
        selection: selected
      });
    }
  });
}

export function teardownSceneSync(): void {
  if (unsubscribeStore) {
    unsubscribeStore();
    unsubscribeStore = null;
  }

  if (activeSocket) {
    activeSocket.off("scene:snapshot");
    activeSocket.off("object:added");
    activeSocket.off("object:updated");
    activeSocket.off("object:removed");
    activeSocket.off("presence:cursor");
    activeSocket.off("presence:select");
    activeSocket.off("presence:left");
    activeSocket.off("error");
  }

  initialized = false;
  sceneId = "";
}

export function sendCursorPresence(x: number, y: number): void {
  const socket = getSocket();
  if (!socket || !socket.connected) {
    return;
  }

  socket.emit("presence:cursor", {
    sceneId,
    x,
    y
  });
}
