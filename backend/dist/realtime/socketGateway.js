"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSocketGateway = createSocketGateway;
const socket_io_1 = require("socket.io");
const tokenService_1 = require("../auth/tokenService");
const inMemoryStore_1 = require("../store/inMemoryStore");
const schemas_1 = require("../validation/schemas");
function canWrite(role) {
    return role === "owner" || role === "editor";
}
function ensureSceneAccess(socket, sceneId) {
    return socket.data.sceneId === sceneId;
}
function createSocketGateway(httpServer) {
    const io = new socket_io_1.Server(httpServer, {
        cors: {
            origin: true,
            credentials: true
        }
    });
    io.on("connection", (socket) => {
        let lastCursorAt = 0;
        socket.on("scene:join", (payload, ack) => {
            const parsed = schemas_1.sceneJoinSchema.safeParse(payload);
            if (!parsed.success) {
                ack?.({ ok: false, code: "INVALID_REQUEST" });
                socket.emit("error", { code: "INVALID_REQUEST" });
                return;
            }
            try {
                const tokenPayload = (0, tokenService_1.verifyAccessToken)(parsed.data.token);
                const role = inMemoryStore_1.store.getSceneRole(parsed.data.sceneId, tokenPayload.sub);
                if (!role) {
                    ack?.({ ok: false, code: "FORBIDDEN" });
                    socket.emit("error", { code: "UNAUTHORIZED" });
                    return;
                }
                socket.data.userId = tokenPayload.sub;
                socket.data.sceneId = parsed.data.sceneId;
                void socket.join(parsed.data.sceneId);
                const objects = inMemoryStore_1.store.getSceneSnapshot(parsed.data.sceneId);
                socket.emit("scene:snapshot", { sceneId: parsed.data.sceneId, objects });
                ack?.({ ok: true });
            }
            catch {
                ack?.({ ok: false, code: "UNAUTHORIZED" });
                socket.emit("error", { code: "UNAUTHORIZED" });
            }
        });
        socket.on("object:add", (payload, ack) => {
            const parsed = schemas_1.objectMutationSchema.safeParse(payload);
            if (!parsed.success) {
                ack?.({ ok: false, code: "INVALID_REQUEST" });
                return;
            }
            if (!socket.data.userId || !ensureSceneAccess(socket, parsed.data.sceneId)) {
                ack?.({ ok: false, code: "FORBIDDEN" });
                return;
            }
            const role = inMemoryStore_1.store.getSceneRole(parsed.data.sceneId, socket.data.userId);
            if (!canWrite(role)) {
                ack?.({ ok: false, code: "FORBIDDEN" });
                return;
            }
            try {
                const object = inMemoryStore_1.store.applyAddObject(parsed.data.sceneId, socket.data.userId, parsed.data.opId, parsed.data.object);
                io.to(parsed.data.sceneId).emit("object:added", { object });
                ack?.({ ok: true, object });
            }
            catch {
                ack?.({ ok: false, code: "ADD_FAILED" });
            }
        });
        socket.on("object:update", (payload, ack) => {
            const parsed = schemas_1.objectMutationSchema.safeParse(payload);
            if (!parsed.success) {
                ack?.({ ok: false, code: "INVALID_REQUEST" });
                return;
            }
            if (!socket.data.userId || !ensureSceneAccess(socket, parsed.data.sceneId)) {
                ack?.({ ok: false, code: "FORBIDDEN" });
                return;
            }
            const role = inMemoryStore_1.store.getSceneRole(parsed.data.sceneId, socket.data.userId);
            if (!canWrite(role)) {
                ack?.({ ok: false, code: "FORBIDDEN" });
                return;
            }
            try {
                const result = inMemoryStore_1.store.applyUpdateObject(parsed.data.sceneId, socket.data.userId, parsed.data.opId, parsed.data.object);
                io.to(parsed.data.sceneId).emit("object:updated", {
                    object: result.object,
                    conflict: result.conflict
                });
                ack?.({ ok: true, object: result.object, conflict: result.conflict });
            }
            catch {
                ack?.({ ok: false, code: "UPDATE_FAILED" });
            }
        });
        socket.on("object:remove", (payload, ack) => {
            const parsed = schemas_1.objectRemoveSchema.safeParse(payload);
            if (!parsed.success) {
                ack?.({ ok: false, code: "INVALID_REQUEST" });
                return;
            }
            if (!socket.data.userId || !ensureSceneAccess(socket, parsed.data.sceneId)) {
                ack?.({ ok: false, code: "FORBIDDEN" });
                return;
            }
            const role = inMemoryStore_1.store.getSceneRole(parsed.data.sceneId, socket.data.userId);
            if (!canWrite(role)) {
                ack?.({ ok: false, code: "FORBIDDEN" });
                return;
            }
            const result = inMemoryStore_1.store.applyRemoveObject(parsed.data.sceneId, socket.data.userId, parsed.data.opId, parsed.data.objectId, parsed.data.expectedVersion);
            if (result.removed) {
                io.to(parsed.data.sceneId).emit("object:removed", {
                    objectId: parsed.data.objectId,
                    conflict: result.conflict
                });
            }
            ack?.({ ok: true, removed: result.removed, conflict: result.conflict });
        });
        socket.on("presence:cursor", (payload) => {
            const parsed = schemas_1.presenceCursorSchema.safeParse(payload);
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
            const presence = inMemoryStore_1.store.upsertPresence(parsed.data.sceneId, socket.data.userId, {
                cursor: { x: parsed.data.x, y: parsed.data.y }
            });
            socket.to(parsed.data.sceneId).emit("presence:cursor", {
                userId: socket.data.userId,
                cursor: { x: parsed.data.x, y: parsed.data.y },
                color: presence.color
            });
        });
        socket.on("presence:select", (payload) => {
            const parsed = schemas_1.presenceSelectionSchema.safeParse(payload);
            if (!parsed.success) {
                return;
            }
            if (!socket.data.userId || !ensureSceneAccess(socket, parsed.data.sceneId)) {
                return;
            }
            const presence = inMemoryStore_1.store.upsertPresence(parsed.data.sceneId, socket.data.userId, {
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
            inMemoryStore_1.store.removePresence(socket.data.sceneId, socket.data.userId);
            socket.to(socket.data.sceneId).emit("presence:left", { userId: socket.data.userId });
        });
    });
    return io;
}
