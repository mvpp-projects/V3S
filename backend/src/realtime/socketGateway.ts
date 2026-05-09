import type { Server as HttpServer } from "http";
import { Server, type Socket } from "socket.io";
import { verifyAccessToken } from "../auth/tokenService";
import { config } from "../config";
import { store } from "../store/inMemoryStore";
import type { SceneObject } from "../types";
import {
  objectMutationSchema,
  objectRemoveSchema,
  presenceCursorSchema,
  presenceSelectionSchema,
  sceneJoinSchema
} from "../validation/schemas";

type Ack = (payload: Record<string, unknown>) => void;

interface ClientToServerEvents {
  "scene:join": (payload: { sceneId: string; token: string }, ack?: Ack) => void;
  "object:add": (
    payload: {
      sceneId: string;
      opId: string;
      object: {
        id: string;
        type: "cube" | "sphere" | "torus" | "cone" | "pointLight";
        transform: {
          position: [number, number, number];
          rotation: [number, number, number];
          scale: [number, number, number];
        };
        props?: Record<string, unknown>;
        version?: number;
      };
    },
    ack?: Ack
  ) => void;
  "object:update": ClientToServerEvents["object:add"];
  "object:remove": (
    payload: { sceneId: string; opId: string; objectId: string; expectedVersion?: number },
    ack?: Ack
  ) => void;
  "presence:cursor": (payload: { sceneId: string; x: number; y: number }) => void;
  "presence:select": (payload: { sceneId: string; selection: string[] }) => void;
}

interface ServerToClientEvents {
  "scene:snapshot": (payload: { sceneId: string; objects: Record<string, unknown> }) => void;
  "object:added": (payload: { object: SceneObject }) => void;
  "object:updated": (payload: { object: SceneObject; conflict?: boolean }) => void;
  "object:removed": (payload: { objectId: string; conflict?: boolean }) => void;
  "presence:cursor": (payload: { userId: string; cursor: { x: number; y: number }; color: string }) => void;
  "presence:select": (payload: { userId: string; selection: string[]; color: string }) => void;
  "presence:left": (payload: { userId: string }) => void;
  error: (payload: { code: string; message?: string }) => void;
}

interface SocketData {
  userId?: string;
  sceneId?: string;
}

function canWrite(role: string | null): boolean {
  return role === "owner" || role === "editor";
}

function ensureSceneAccess(socket: Socket<ClientToServerEvents, ServerToClientEvents, Record<string, never>, SocketData>, sceneId: string): boolean {
  return socket.data.sceneId === sceneId;
}

export function createSocketGateway(httpServer: HttpServer): Server<ClientToServerEvents, ServerToClientEvents, Record<string, never>, SocketData> {
  const io = new Server<ClientToServerEvents, ServerToClientEvents, Record<string, never>, SocketData>(httpServer, {
    cors: {
      origin: true,
      credentials: true
    }
  });

  io.on("connection", (socket) => {
    let lastCursorAt = 0;

    socket.on("scene:join", (payload, ack) => {
      const parsed = sceneJoinSchema.safeParse(payload);
      if (!parsed.success) {
        ack?.({ ok: false, code: "INVALID_REQUEST" });
        socket.emit("error", { code: "INVALID_REQUEST" });
        return;
      }

      try {
        const tokenPayload = verifyAccessToken(parsed.data.token);
        const role = store.getSceneRole(parsed.data.sceneId, tokenPayload.sub);
        if (!role) {
          ack?.({ ok: false, code: "FORBIDDEN" });
          socket.emit("error", { code: "UNAUTHORIZED" });
          return;
        }

        socket.data.userId = tokenPayload.sub;
        socket.data.sceneId = parsed.data.sceneId;
        void socket.join(parsed.data.sceneId);

        const objects = store.getSceneSnapshot(parsed.data.sceneId);
        socket.emit("scene:snapshot", { sceneId: parsed.data.sceneId, objects });
        ack?.({ ok: true });
      } catch {
        ack?.({ ok: false, code: "UNAUTHORIZED" });
        socket.emit("error", { code: "UNAUTHORIZED" });
      }
    });

    socket.on("object:add", (payload, ack) => {
      const parsed = objectMutationSchema.safeParse(payload);
      if (!parsed.success) {
        ack?.({ ok: false, code: "INVALID_REQUEST" });
        return;
      }

      if (!socket.data.userId || !ensureSceneAccess(socket, parsed.data.sceneId)) {
        ack?.({ ok: false, code: "FORBIDDEN" });
        return;
      }

      const role = store.getSceneRole(parsed.data.sceneId, socket.data.userId);
      if (!canWrite(role)) {
        ack?.({ ok: false, code: "FORBIDDEN" });
        return;
      }

      try {
        const object = store.applyAddObject(parsed.data.sceneId, socket.data.userId, parsed.data.opId, parsed.data.object);
        io.to(parsed.data.sceneId).emit("object:added", { object });
        ack?.({ ok: true, object });
      } catch {
        ack?.({ ok: false, code: "ADD_FAILED" });
      }
    });

    socket.on("object:update", (payload, ack) => {
      const parsed = objectMutationSchema.safeParse(payload);
      if (!parsed.success) {
        ack?.({ ok: false, code: "INVALID_REQUEST" });
        return;
      }

      if (!socket.data.userId || !ensureSceneAccess(socket, parsed.data.sceneId)) {
        ack?.({ ok: false, code: "FORBIDDEN" });
        return;
      }

      const role = store.getSceneRole(parsed.data.sceneId, socket.data.userId);
      if (!canWrite(role)) {
        ack?.({ ok: false, code: "FORBIDDEN" });
        return;
      }

      try {
        const result = store.applyUpdateObject(parsed.data.sceneId, socket.data.userId, parsed.data.opId, parsed.data.object);
        io.to(parsed.data.sceneId).emit("object:updated", {
          object: result.object,
          conflict: result.conflict
        });
        ack?.({ ok: true, object: result.object, conflict: result.conflict });
      } catch {
        ack?.({ ok: false, code: "UPDATE_FAILED" });
      }
    });

    socket.on("object:remove", (payload, ack) => {
      const parsed = objectRemoveSchema.safeParse(payload);
      if (!parsed.success) {
        ack?.({ ok: false, code: "INVALID_REQUEST" });
        return;
      }

      if (!socket.data.userId || !ensureSceneAccess(socket, parsed.data.sceneId)) {
        ack?.({ ok: false, code: "FORBIDDEN" });
        return;
      }

      const role = store.getSceneRole(parsed.data.sceneId, socket.data.userId);
      if (!canWrite(role)) {
        ack?.({ ok: false, code: "FORBIDDEN" });
        return;
      }

      const result = store.applyRemoveObject(
        parsed.data.sceneId,
        socket.data.userId,
        parsed.data.opId,
        parsed.data.objectId,
        parsed.data.expectedVersion
      );

      if (result.removed) {
        io.to(parsed.data.sceneId).emit("object:removed", {
          objectId: parsed.data.objectId,
          conflict: result.conflict
        });
      }

      ack?.({ ok: true, removed: result.removed, conflict: result.conflict });
    });

    socket.on("presence:cursor", (payload) => {
      const parsed = presenceCursorSchema.safeParse(payload);
      if (!parsed.success) {
        return;
      }

      if (!socket.data.userId || !ensureSceneAccess(socket, parsed.data.sceneId)) {
        return;
      }

      const now = Date.now();
      if (now - lastCursorAt < 40) {
        return;
      }
      lastCursorAt = now;

      const presence = store.upsertPresence(parsed.data.sceneId, socket.data.userId, {
        cursor: { x: parsed.data.x, y: parsed.data.y }
      });

      socket.to(parsed.data.sceneId).emit("presence:cursor", {
        userId: socket.data.userId,
        cursor: { x: parsed.data.x, y: parsed.data.y },
        color: presence.color
      });
    });

    socket.on("presence:select", (payload) => {
      const parsed = presenceSelectionSchema.safeParse(payload);
      if (!parsed.success) {
        return;
      }

      if (!socket.data.userId || !ensureSceneAccess(socket, parsed.data.sceneId)) {
        return;
      }

      const presence = store.upsertPresence(parsed.data.sceneId, socket.data.userId, {
        selection: parsed.data.selection
      });

      socket.to(parsed.data.sceneId).emit("presence:select", {
        userId: socket.data.userId,
        selection: parsed.data.selection,
        color: presence.color
      });
    });

    socket.on("disconnect", () => {
      if (!socket.data.sceneId || !socket.data.userId) {
        return;
      }

      store.removePresence(socket.data.sceneId, socket.data.userId);
      socket.to(socket.data.sceneId).emit("presence:left", { userId: socket.data.userId });
    });
  });

  return io;
}
