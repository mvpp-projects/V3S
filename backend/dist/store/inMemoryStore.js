"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = exports.InMemoryStore = void 0;
const crypto_1 = require("crypto");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const uuid_1 = require("uuid");
const config_1 = require("../config");
const PRESENCE_COLORS = ["#8fb7ff", "#ffb58f", "#b6e3d8", "#d8d0ff"];
class InMemoryStore {
    users = new Map();
    usersByEmail = new Map();
    refreshTokens = new Map();
    userOptions = new Map();
    scenes = new Map();
    invites = new Map();
    persistTimer = null;
    inviteSweepTimer = null;
    presenceSweepTimer = null;
    constructor() {
        this.bootstrapDefaults();
        this.loadFromDisk();
        this.startBackgroundCleanup();
    }
    shutdown() {
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
    bootstrapDefaults() {
        const demoUser = {
            id: "user_demo",
            email: "demo@v3s.local",
            displayName: "Demo User",
            password: "demo1234"
        };
        this.users.set(demoUser.id, demoUser);
        this.usersByEmail.set(demoUser.email.toLowerCase(), demoUser);
        this.userOptions.set(demoUser.id, { snapEnabled: true, gridVisible: true, theme: "light" });
        const defaultScene = {
            id: config_1.config.defaultSceneId,
            name: "Default Scene",
            createdBy: demoUser.id,
            createdAt: new Date().toISOString()
        };
        const sceneState = {
            scene: defaultScene,
            objects: new Map(),
            members: new Map(),
            processedOpIds: new Set(),
            presence: new Map()
        };
        sceneState.members.set(demoUser.id, { sceneId: defaultScene.id, userId: demoUser.id, role: "owner" });
        this.scenes.set(defaultScene.id, sceneState);
    }
    authenticate(email, password) {
        const user = this.usersByEmail.get(email.toLowerCase());
        if (!user || user.password !== password) {
            return null;
        }
        return user;
    }
    getUserById(userId) {
        return this.users.get(userId) ?? null;
    }
    saveRefreshToken(userId, refreshToken) {
        this.refreshTokens.set(userId, refreshToken);
        this.markDirty();
    }
    isValidRefreshToken(userId, refreshToken) {
        return this.refreshTokens.get(userId) === refreshToken;
    }
    revokeRefreshToken(userId) {
        this.refreshTokens.delete(userId);
        this.markDirty();
    }
    getOrCreateGuest(guestName) {
        const id = `guest_${(0, uuid_1.v4)().slice(0, 8)}`;
        const user = {
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
    getUserOptions(userId) {
        return this.userOptions.get(userId) ?? { snapEnabled: true, gridVisible: true, theme: "light" };
    }
    patchUserOptions(userId, patch) {
        const current = this.getUserOptions(userId);
        const next = { ...current, ...patch };
        this.userOptions.set(userId, next);
        this.markDirty();
        return next;
    }
    createScene(name, createdBy) {
        const scene = {
            id: `scene_${(0, uuid_1.v4)().slice(0, 8)}`,
            name,
            createdBy,
            createdAt: new Date().toISOString()
        };
        const state = {
            scene,
            objects: new Map(),
            members: new Map(),
            processedOpIds: new Set(),
            presence: new Map()
        };
        state.members.set(createdBy, { sceneId: scene.id, userId: createdBy, role: "owner" });
        this.scenes.set(scene.id, state);
        this.markDirty();
        return scene;
    }
    getScene(sceneId) {
        return this.scenes.get(sceneId)?.scene ?? null;
    }
    listUserScenes(userId) {
        const scenes = [];
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
    getSceneRole(sceneId, userId) {
        return this.scenes.get(sceneId)?.members.get(userId)?.role ?? null;
    }
    addSceneMember(sceneId, userId, role) {
        const scene = this.scenes.get(sceneId);
        if (!scene) {
            throw new Error("SCENE_NOT_FOUND");
        }
        scene.members.set(userId, { sceneId, userId, role });
        this.markDirty();
    }
    getSceneSnapshot(sceneId) {
        const scene = this.scenes.get(sceneId);
        if (!scene) {
            throw new Error("SCENE_NOT_FOUND");
        }
        const snapshot = {};
        for (const [id, object] of scene.objects) {
            snapshot[id] = object;
        }
        return snapshot;
    }
    listSceneObjects(sceneId) {
        const scene = this.scenes.get(sceneId);
        if (!scene) {
            throw new Error("SCENE_NOT_FOUND");
        }
        return [...scene.objects.values()];
    }
    hasProcessedOp(sceneId, opId) {
        return this.scenes.get(sceneId)?.processedOpIds.has(opId) ?? false;
    }
    applyAddObject(sceneId, userId, opId, incoming) {
        const scene = this.requireScene(sceneId);
        if (scene.processedOpIds.has(opId) && scene.objects.has(incoming.id)) {
            return scene.objects.get(incoming.id);
        }
        const now = new Date().toISOString();
        const object = {
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
    applyUpdateObject(sceneId, userId, opId, incoming) {
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
        const next = {
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
    applyRemoveObject(sceneId, _userId, opId, objectId, expectedVersion) {
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
    upsertPresence(sceneId, userId, patch) {
        const scene = this.requireScene(sceneId);
        const current = scene.presence.get(userId);
        const presence = {
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
    removePresence(sceneId, userId) {
        const removed = this.scenes.get(sceneId)?.presence.delete(userId) ?? false;
        if (removed) {
            this.markDirty();
        }
    }
    createInvite(sceneId, createdBy, role, expiresInMinutes, maxUses) {
        this.requireScene(sceneId);
        const token = (0, crypto_1.randomBytes)(24).toString("base64url");
        const invite = {
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
    resolveInvite(token) {
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
    acceptInvite(token, userId) {
        const invite = this.resolveInvite(token);
        if (!invite) {
            throw new Error("INVITE_INVALID");
        }
        this.addSceneMember(invite.sceneId, userId, invite.role);
        invite.uses += 1;
        if (invite.uses >= invite.maxUses) {
            this.invites.delete(token);
        }
        else {
            this.invites.set(token, invite);
        }
        this.markDirty();
        return { sceneId: invite.sceneId, role: invite.role };
    }
    startBackgroundCleanup() {
        this.inviteSweepTimer = setInterval(() => {
            this.cleanupExpiredInvites();
        }, config_1.config.inviteSweepIntervalMs);
        this.presenceSweepTimer = setInterval(() => {
            this.cleanupStalePresence();
        }, config_1.config.presenceSweepIntervalMs);
    }
    cleanupExpiredInvites() {
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
    cleanupStalePresence() {
        const now = Date.now();
        let changed = false;
        for (const scene of this.scenes.values()) {
            for (const [userId, presence] of scene.presence.entries()) {
                const ageMs = now - new Date(presence.lastSeenAt).getTime();
                if (ageMs > config_1.config.presenceTtlMs) {
                    scene.presence.delete(userId);
                    changed = true;
                }
            }
        }
        if (changed) {
            this.markDirty();
        }
    }
    markDirty() {
        if (this.persistTimer) {
            clearTimeout(this.persistTimer);
        }
        this.persistTimer = setTimeout(() => {
            this.flushToDisk();
            this.persistTimer = null;
        }, config_1.config.persistDebounceMs);
    }
    flushToDisk() {
        const snapshot = this.buildSnapshot();
        const folderPath = path_1.default.dirname(config_1.config.dataFilePath);
        fs_1.default.mkdirSync(folderPath, { recursive: true });
        fs_1.default.writeFileSync(config_1.config.dataFilePath, JSON.stringify(snapshot, null, 2), "utf-8");
    }
    loadFromDisk() {
        if (!fs_1.default.existsSync(config_1.config.dataFilePath)) {
            return;
        }
        try {
            const raw = fs_1.default.readFileSync(config_1.config.dataFilePath, "utf-8");
            const parsed = JSON.parse(raw);
            this.hydrateFromSnapshot(parsed);
        }
        catch (error) {
            console.warn("Failed to load persisted store, continuing with defaults", error);
        }
    }
    buildSnapshot() {
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
    hydrateFromSnapshot(snapshot) {
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
            const state = {
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
        if (!this.scenes.has(config_1.config.defaultSceneId)) {
            const defaultUser = this.users.get("user_demo");
            if (defaultUser) {
                const fallbackScene = {
                    id: config_1.config.defaultSceneId,
                    name: "Default Scene",
                    createdBy: defaultUser.id,
                    createdAt: new Date().toISOString()
                };
                this.scenes.set(fallbackScene.id, {
                    scene: fallbackScene,
                    objects: new Map(),
                    members: new Map([[defaultUser.id, { sceneId: fallbackScene.id, userId: defaultUser.id, role: "owner" }]]),
                    processedOpIds: new Set(),
                    presence: new Map()
                });
            }
        }
    }
    requireScene(sceneId) {
        const scene = this.scenes.get(sceneId);
        if (!scene) {
            throw new Error("SCENE_NOT_FOUND");
        }
        return scene;
    }
}
exports.InMemoryStore = InMemoryStore;
exports.store = new InMemoryStore();
