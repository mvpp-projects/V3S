"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invitesRouter = void 0;
const express_1 = require("express");
const tokenService_1 = require("../../auth/tokenService");
const inMemoryStore_1 = require("../../store/inMemoryStore");
exports.invitesRouter = (0, express_1.Router)();
exports.invitesRouter.get("/:token/resolve", (req, res) => {
    const invite = inMemoryStore_1.store.resolveInvite(req.params.token);
    if (!invite) {
        res.status(404).json({ error: "INVITE_NOT_FOUND" });
        return;
    }
    const scene = inMemoryStore_1.store.getScene(invite.sceneId);
    if (!scene) {
        res.status(404).json({ error: "SCENE_NOT_FOUND" });
        return;
    }
    res.json({
        scene: {
            id: scene.id,
            name: scene.name
        },
        role: invite.role,
        expiresAt: invite.expiresAt,
        maxUses: invite.maxUses,
        uses: invite.uses
    });
});
exports.invitesRouter.post("/:token/accept", (req, res) => {
    const authHeader = req.headers.authorization;
    let user = null;
    if (authHeader?.startsWith("Bearer ")) {
        const token = authHeader.slice("Bearer ".length);
        try {
            const payload = (0, tokenService_1.verifyAccessToken)(token);
            user = inMemoryStore_1.store.getUserById(payload.sub);
        }
        catch {
            user = null;
        }
    }
    if (!user) {
        const displayName = typeof req.body?.displayName === "string" ? req.body.displayName : undefined;
        user = inMemoryStore_1.store.getOrCreateGuest(displayName);
    }
    try {
        const accepted = inMemoryStore_1.store.acceptInvite(req.params.token, user.id);
        const accessToken = (0, tokenService_1.signAccessToken)(user);
        const refreshToken = (0, tokenService_1.signRefreshToken)(user);
        inMemoryStore_1.store.saveRefreshToken(user.id, refreshToken);
        res.status(201).json({
            sceneId: accepted.sceneId,
            role: accepted.role,
            accessToken,
            refreshToken,
            user: {
                id: user.id,
                email: user.email,
                displayName: user.displayName
            }
        });
    }
    catch {
        res.status(400).json({ error: "INVITE_INVALID" });
    }
});
