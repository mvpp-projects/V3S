import { randomBytes } from "crypto";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { config } from "../config";
import type {
  Presence,
  Scene,
  SceneInvite,
  SceneMember,
  SceneObject,
  SceneRole,
  User,
  UserOptions
} from "../types";

const PRESENCE_COLORS = ["#8fb7ff", "#ffb58f", "#b6e3d8", "#d8d0ff"];

interface SceneState {
  scene: Scene;
  objects: Map<string, SceneObject>;
  members: Map<string, SceneMember>;
  processedOpIds: Set<string>;
  presence: Map<string, Presence>;
}

type IncomingObject = Omit<SceneObject, "version" | "updatedAt" | "updatedBy"> & {
  version?: number;
};

interface SceneStateSnapshot {
  scene: Scene;
  objects: SceneObject[];
  members: SceneMember[];
  processedOpIds: string[];
  presence: Presence[];
}

interface StoreSnapshot {
  users: User[];
  refreshTokens: Array<[string, string]>;
  userOptions: Array<[string, UserOptions]>;
  scenes: SceneStateSnapshot[];
  invites: SceneInvite[];
}

export class InMemoryStore {
  private readonly users = new Map<string, User>();
  private readonly usersByEmail = new Map<string, User>();
  private readonly refreshTokens = new Map<string, string>();
  private readonly userOptions = new Map<string, UserOptions>();
  private readonly scenes = new Map<string, SceneState>();
  private readonly invites = new Map<string, SceneInvite>();
  private persistTimer: NodeJS.Timeout | null = null;
  private inviteSweepTimer: NodeJS.Timeout | null = null;
  private presenceSweepTimer: NodeJS.Timeout | null = null;

  constructor() {
    this.bootstrapDefaults();
    this.loadFromDisk();
    this.startBackgroundCleanup();
  }

  shutdown(): void {
    if (this.persistTimer) {
      clearTimeout(this.persistTimer);
      this.persistTimer = null;
    }
    if (this.inviteSweepTimer) {
      clearInterval(this.inviteSweepTimer);
      this.inviteSweepTimer = null;
    }
    if (this.presenceSweepTimer) {
      clearInterval(this.presenceSweepTimer);
      this.presenceSweepTimer = null;
    }
    this.flushToDisk();
  }

  private bootstrapDefaults(): void {
    const demoUser: User = {
      id: "user_demo",
      email: "demo@v3s.local",
      displayName: "Demo User",
      password: "demo1234"
    };

    this.users.set(demoUser.id, demoUser);
    this.usersByEmail.set(demoUser.email.toLowerCase(), demoUser);
    this.userOptions.set(demoUser.id, { snapEnabled: true, gridVisible: true, theme: "light" });

    const defaultScene: Scene = {
      id: config.defaultSceneId,
      name: "Default Scene",
      createdBy: demoUser.id,
      createdAt: new Date().toISOString()
    };

    const sceneState: SceneState = {
      scene: defaultScene,
      objects: new Map<string, SceneObject>(),
      members: new Map<string, SceneMember>(),
      processedOpIds: new Set<string>(),
      presence: new Map<string, Presence>()
    };

    sceneState.members.set(demoUser.id, { sceneId: defaultScene.id, userId: demoUser.id, role: "owner" });
    this.scenes.set(defaultScene.id, sceneState);
  }

  authenticate(email: string, password: string): User | null {
    const user = this.usersByEmail.get(email.toLowerCase());
    if (!user || user.password !== password) {
      return null;
    }
    return user;
  }

  getUserById(userId: string): User | null {
    return this.users.get(userId) ?? null;
  }

  saveRefreshToken(userId: string, refreshToken: string): void {
    this.refreshTokens.set(userId, refreshToken);
    this.markDirty();
  }

  isValidRefreshToken(userId: string, refreshToken: string): boolean {
    return this.refreshTokens.get(userId) === refreshToken;
  }

  revokeRefreshToken(userId: string): void {
    this.refreshTokens.delete(userId);
    this.markDirty();
  }

  getOrCreateGuest(guestName?: string): User {
    const id = `guest_${uuidv4().slice(0, 8)}`;
    const user: User = {
      id,
      email: `${id}@v3s.local`,
      displayName: guestName?.trim() || `Guest ${id.slice(-4)}`,
      password: ""
    };
    this.users.set(id, user);
    this.usersByEmail.set(user.email.toLowerCase(), user);
    this.userOptions.set(user.id, { snapEnabled: true, gridVisible: true, theme: "light" });
    this.markDirty();
    return user;
  }

  getUserOptions(userId: string): UserOptions {
    return this.userOptions.get(userId) ?? { snapEnabled: true, gridVisible: true, theme: "light" };
  }

  patchUserOptions(userId: string, patch: Partial<UserOptions>): UserOptions {
    const current = this.getUserOptions(userId);
    const next = { ...current, ...patch };
    this.userOptions.set(userId, next);
    this.markDirty();
    return next;
  }

  createScene(name: string, createdBy: string): Scene {
    const scene: Scene = {
      id: `scene_${uuidv4().slice(0, 8)}`,
      name,
      createdBy,
      createdAt: new Date().toISOString()
    };

    const state: SceneState = {
      scene,
      objects: new Map<string, SceneObject>(),
      members: new Map<string, SceneMember>(),
      processedOpIds: new Set<string>(),
      presence: new Map<string, Presence>()
    };

    state.members.set(createdBy, { sceneId: scene.id, userId: createdBy, role: "owner" });
    this.scenes.set(scene.id, state);
    this.markDirty();
    return scene;
  }

  getScene(sceneId: string): Scene | null {
    return this.scenes.get(sceneId)?.scene ?? null;
  }

  listUserScenes(userId: string): Array<Scene & { role: SceneRole }> {
    const scenes: Array<Scene & { role: SceneRole }> = [];
    for (const state of this.scenes.values()) {
      const role = state.members.get(userId)?.role;
      if (!role) {
        continue;
      }
      scenes.push({ ...state.scene, role });
    }

    scenes.sort((a, b) => {
      const aTs = new Date(a.createdAt).getTime();
      const bTs = new Date(b.createdAt).getTime();
      return bTs - aTs;
    });

    return scenes;
  }

  getSceneRole(sceneId: string, userId: string): SceneRole | null {
    return this.scenes.get(sceneId)?.members.get(userId)?.role ?? null;
  }

  addSceneMember(sceneId: string, userId: string, role: Exclude<SceneRole, "owner">): void {
    const scene = this.scenes.get(sceneId);
    if (!scene) {
      throw new Error("SCENE_NOT_FOUND");
    }
    scene.members.set(userId, { sceneId, userId, role });
    this.markDirty();
  }

  getSceneSnapshot(sceneId: string): Record<string, SceneObject> {
    const scene = this.scenes.get(sceneId);
    if (!scene) {
      throw new Error("SCENE_NOT_FOUND");
    }
    const snapshot: Record<string, SceneObject> = {};
    for (const [id, object] of scene.objects) {
      snapshot[id] = object;
    }
    return snapshot;
  }

  listSceneObjects(sceneId: string): SceneObject[] {
    const scene = this.scenes.get(sceneId);
    if (!scene) {
      throw new Error("SCENE_NOT_FOUND");
    }
    return [...scene.objects.values()];
  }

  hasProcessedOp(sceneId: string, opId: string): boolean {
    return this.scenes.get(sceneId)?.processedOpIds.has(opId) ?? false;
  }

  applyAddObject(sceneId: string, userId: string, opId: string, incoming: IncomingObject): SceneObject {
    const scene = this.requireScene(sceneId);
    if (scene.processedOpIds.has(opId) && scene.objects.has(incoming.id)) {
      return scene.objects.get(incoming.id)!;
    }

    const now = new Date().toISOString();
    const object: SceneObject = {
      ...incoming,
      version: Math.max(1, incoming.version ?? 0),
      updatedAt: now,
      updatedBy: userId
    };

    scene.objects.set(object.id, object);
    scene.processedOpIds.add(opId);
    this.markDirty();
    return object;
  }

  applyUpdateObject(
    sceneId: string,
    userId: string,
    opId: string,
    incoming: IncomingObject
  ): { object: SceneObject; conflict: boolean } {
    const scene = this.requireScene(sceneId);
    const existing = scene.objects.get(incoming.id);

    if (!existing) {
      throw new Error("OBJECT_NOT_FOUND");
    }

    if (scene.processedOpIds.has(opId)) {
      return { object: existing, conflict: false };
    }

    const expectedVersion = incoming.version ?? existing.version;
    const conflict = expectedVersion < existing.version;

    const now = new Date().toISOString();
    const next: SceneObject = {
      ...existing,
      ...incoming,
      version: existing.version + 1,
      updatedAt: now,
      updatedBy: userId
    };

    scene.objects.set(next.id, next);
    scene.processedOpIds.add(opId);
    this.markDirty();
    return { object: next, conflict };
  }

  applyRemoveObject(
    sceneId: string,
    _userId: string,
    opId: string,
    objectId: string,
    expectedVersion?: number
  ): { removed: boolean; conflict: boolean } {
    const scene = this.requireScene(sceneId);
    const existing = scene.objects.get(objectId);

    if (!existing) {
      return { removed: false, conflict: false };
    }

    if (scene.processedOpIds.has(opId)) {
      return { removed: false, conflict: false };
    }

    const conflict = expectedVersion !== undefined && expectedVersion < existing.version;
    scene.objects.delete(objectId);
    scene.processedOpIds.add(opId);
    this.markDirty();

    return { removed: true, conflict };
  }

  upsertPresence(sceneId: string, userId: string, patch: Partial<Presence>): Presence {
    const scene = this.requireScene(sceneId);
    const current = scene.presence.get(userId);

    const presence: Presence = {
      userId,
      color: current?.color ?? PRESENCE_COLORS[scene.presence.size % PRESENCE_COLORS.length],
      cursor: patch.cursor ?? current?.cursor,
      selection: patch.selection ?? current?.selection,
      lastSeenAt: new Date().toISOString()
    };

    scene.presence.set(userId, presence);
    this.markDirty();
    return presence;
  }

  removePresence(sceneId: string, userId: string): void {
    const removed = this.scenes.get(sceneId)?.presence.delete(userId) ?? false;
    if (removed) {
      this.markDirty();
    }
  }

  createInvite(
    sceneId: string,
    createdBy: string,
    role: Exclude<SceneRole, "owner">,
    expiresInMinutes: number,
    maxUses: number
  ): SceneInvite {
    this.requireScene(sceneId);
    const token = randomBytes(24).toString("base64url");
    const invite: SceneInvite = {
      token,
      sceneId,
      role,
      createdBy,
      expiresAt: new Date(Date.now() + expiresInMinutes * 60_000).toISOString(),
      maxUses,
      uses: 0
    };
    this.invites.set(token, invite);
    this.markDirty();
    return invite;
  }

  resolveInvite(token: string): SceneInvite | null {
    const invite = this.invites.get(token);
    if (!invite) {
      return null;
    }

    const expired = new Date(invite.expiresAt).getTime() < Date.now();
    const exhausted = invite.uses >= invite.maxUses;

    if (expired || exhausted) {
      this.invites.delete(token);
      this.markDirty();
      return null;
    }

    return invite;
  }

  acceptInvite(token: string, userId: string): { sceneId: string; role: Exclude<SceneRole, "owner"> } {
    const invite = this.resolveInvite(token);
    if (!invite) {
      throw new Error("INVITE_INVALID");
    }

    this.addSceneMember(invite.sceneId, userId, invite.role);
    invite.uses += 1;

    if (invite.uses >= invite.maxUses) {
      this.invites.delete(token);
    } else {
      this.invites.set(token, invite);
    }

    this.markDirty();

    return { sceneId: invite.sceneId, role: invite.role };
  }

  private startBackgroundCleanup(): void {
    this.inviteSweepTimer = setInterval(() => {
      this.cleanupExpiredInvites();
    }, config.inviteSweepIntervalMs);

    this.presenceSweepTimer = setInterval(() => {
      this.cleanupStalePresence();
    }, config.presenceSweepIntervalMs);
  }

  private cleanupExpiredInvites(): void {
    const now = Date.now();
    let changed = false;
    for (const [token, invite] of this.invites.entries()) {
      const expired = new Date(invite.expiresAt).getTime() < now;
      const exhausted = invite.uses >= invite.maxUses;
      if (expired || exhausted) {
        this.invites.delete(token);
        changed = true;
      }
    }
    if (changed) {
      this.markDirty();
    }
  }

  private cleanupStalePresence(): void {
    const now = Date.now();
    let changed = false;

    for (const scene of this.scenes.values()) {
      for (const [userId, presence] of scene.presence.entries()) {
        const ageMs = now - new Date(presence.lastSeenAt).getTime();
        if (ageMs > config.presenceTtlMs) {
          scene.presence.delete(userId);
          changed = true;
        }
      }
    }

    if (changed) {
      this.markDirty();
    }
  }

  private markDirty(): void {
    if (this.persistTimer) {
      clearTimeout(this.persistTimer);
    }
    this.persistTimer = setTimeout(() => {
      this.flushToDisk();
      this.persistTimer = null;
    }, config.persistDebounceMs);
  }

  private flushToDisk(): void {
    const snapshot = this.buildSnapshot();
    const folderPath = path.dirname(config.dataFilePath);
    fs.mkdirSync(folderPath, { recursive: true });
    fs.writeFileSync(config.dataFilePath, JSON.stringify(snapshot, null, 2), "utf-8");
  }

  private loadFromDisk(): void {
    if (!fs.existsSync(config.dataFilePath)) {
      return;
    }

    try {
      const raw = fs.readFileSync(config.dataFilePath, "utf-8");
      const parsed = JSON.parse(raw) as StoreSnapshot;
      this.hydrateFromSnapshot(parsed);
    } catch (error) {
      console.warn("Failed to load persisted store, continuing with defaults", error);
    }
  }

  private buildSnapshot(): StoreSnapshot {
    return {
      users: [...this.users.values()],
      refreshTokens: [...this.refreshTokens.entries()],
      userOptions: [...this.userOptions.entries()],
      scenes: [...this.scenes.values()].map((sceneState) => ({
        scene: sceneState.scene,
        objects: [...sceneState.objects.values()],
        members: [...sceneState.members.values()],
        processedOpIds: [...sceneState.processedOpIds.values()],
        presence: [...sceneState.presence.values()]
      })),
      invites: [...this.invites.values()]
    };
  }

  private hydrateFromSnapshot(snapshot: StoreSnapshot): void {
    this.users.clear();
    this.usersByEmail.clear();
    this.refreshTokens.clear();
    this.userOptions.clear();
    this.scenes.clear();
    this.invites.clear();

    for (const user of snapshot.users ?? []) {
      this.users.set(user.id, user);
      this.usersByEmail.set(user.email.toLowerCase(), user);
    }

    for (const [userId, token] of snapshot.refreshTokens ?? []) {
      this.refreshTokens.set(userId, token);
    }

    for (const [userId, options] of snapshot.userOptions ?? []) {
      this.userOptions.set(userId, options);
    }

    for (const sceneSnapshot of snapshot.scenes ?? []) {
      const state: SceneState = {
        scene: sceneSnapshot.scene,
        objects: new Map(sceneSnapshot.objects.map((object) => [object.id, object])),
        members: new Map(sceneSnapshot.members.map((member) => [member.userId, member])),
        processedOpIds: new Set(sceneSnapshot.processedOpIds),
        presence: new Map(sceneSnapshot.presence.map((presence) => [presence.userId, presence]))
      };

      this.scenes.set(state.scene.id, state);
    }

    for (const invite of snapshot.invites ?? []) {
      this.invites.set(invite.token, invite);
    }

    if (!this.scenes.has(config.defaultSceneId)) {
      const defaultUser = this.users.get("user_demo");
      if (defaultUser) {
        const fallbackScene: Scene = {
          id: config.defaultSceneId,
          name: "Default Scene",
          createdBy: defaultUser.id,
          createdAt: new Date().toISOString()
        };
        this.scenes.set(fallbackScene.id, {
          scene: fallbackScene,
          objects: new Map<string, SceneObject>(),
          members: new Map<string, SceneMember>([[defaultUser.id, { sceneId: fallbackScene.id, userId: defaultUser.id, role: "owner" }]]),
          processedOpIds: new Set<string>(),
          presence: new Map<string, Presence>()
        });
      }
    }
  }

  private requireScene(sceneId: string): SceneState {
    const scene = this.scenes.get(sceneId);
    if (!scene) {
      throw new Error("SCENE_NOT_FOUND");
    }
    return scene;
  }
}

export const store = new InMemoryStore();
