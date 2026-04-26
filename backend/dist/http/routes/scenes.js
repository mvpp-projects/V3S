"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scenesRouter = void 0;
const express_1 = require("express");
const inMemoryStore_1 = require("../../store/inMemoryStore");
const schemas_1 = require("../../validation/schemas");
const authMiddleware_1 = require("../authMiddleware");
exports.scenesRouter = (0, express_1.Router)();
function roleCanInvite(role) {
    return role === "owner" || role === "editor";
}
exports.scenesRouter.get("/", authMiddleware_1.requireAuth, (req, res) => {
    if (!req.auth) {
        res.status(401).json({ error: "UNAUTHORIZED" });
        return;
    }
    const scenes = inMemoryStore_1.store.listUserScenes(req.auth.userId);
    res.json({ scenes });
});
exports.scenesRouter.post("/", authMiddleware_1.requireAuth, (req, res) => {
    if (!req.auth) {
        res.status(401).json({ error: "UNAUTHORIZED" });
        return;
    }
    const parsed = schemas_1.createSceneSchema.safeParse(req.body);
    if (!parsed.success) {
        res.status(400).json({ error: "INVALID_REQUEST", details: parsed.error.flatten() });
        return;
    }
    const scene = inMemoryStore_1.store.createScene(parsed.data.name, req.auth.userId);
    res.status(201).json(scene);
});
exports.scenesRouter.get("/:sceneId", authMiddleware_1.requireAuth, (req, res) => {
    if (!req.auth) {
        res.status(401).json({ error: "UNAUTHORIZED" });
        return;
    }
    const sceneId = req.params.sceneId;
    const role = inMemoryStore_1.store.getSceneRole(sceneId, req.auth.userId);
    if (!role) {
        res.status(403).json({ error: "FORBIDDEN" });
        return;
    }
    const scene = inMemoryStore_1.store.getScene(sceneId);
    if (!scene) {
        res.status(404).json({ error: "SCENE_NOT_FOUND" });
        return;
    }
    res.json({ ...scene, role });
});
exports.scenesRouter.get("/:sceneId/objects", authMiddleware_1.requireAuth, (req, res) => {
    if (!req.auth) {
        res.status(401).json({ error: "UNAUTHORIZED" });
        return;
    }
    const sceneId = req.params.sceneId;
    const role = inMemoryStore_1.store.getSceneRole(sceneId, req.auth.userId);
    if (!role) {
        res.status(403).json({ error: "FORBIDDEN" });
        return;
    }
    try {
        const objects = inMemoryStore_1.store.listSceneObjects(sceneId);
        res.json({ sceneId, objects });
    }
    catch {
        res.status(404).json({ error: "SCENE_NOT_FOUND" });
    }
});
exports.scenesRouter.post("/:sceneId/invites", authMiddleware_1.requireAuth, (req, res) => {
    if (!req.auth) {
        res.status(401).json({ error: "UNAUTHORIZED" });
        return;
    }
    const sceneId = req.params.sceneId;
    const role = inMemoryStore_1.store.getSceneRole(sceneId, req.auth.userId);
    if (!role || !roleCanInvite(role)) {
        res.status(403).json({ error: "FORBIDDEN" });
        return;
    }
    const parsed = schemas_1.createInviteSchema.safeParse(req.body);
    if (!parsed.success) {
        res.status(400).json({ error: "INVALID_REQUEST", details: parsed.error.flatten() });
        return;
    }
    try {
        const invite = inMemoryStore_1.store.createInvite(sceneId, req.auth.userId, parsed.data.role, parsed.data.expiresInMinutes, parsed.data.maxUses);
        res.status(201).json({
            sceneId: invite.sceneId,
            role: invite.role,
            expiresAt: invite.expiresAt,
            maxUses: invite.maxUses,
            uses: invite.uses,
            token: invite.token
        });
    }
    catch {
        res.status(404).json({ error: "SCENE_NOT_FOUND" });
    }
});
