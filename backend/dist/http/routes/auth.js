"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const tokenService_1 = require("../../auth/tokenService");
const inMemoryStore_1 = require("../../store/inMemoryStore");
const schemas_1 = require("../../validation/schemas");
const authMiddleware_1 = require("../authMiddleware");
exports.authRouter = (0, express_1.Router)();
exports.authRouter.post("/login", (req, res) => {
    const parsed = schemas_1.loginSchema.safeParse(req.body);
    if (!parsed.success) {
        res.status(400).json({ error: "INVALID_REQUEST", details: parsed.error.flatten() });
        return;
    }
    const user = inMemoryStore_1.store.authenticate(parsed.data.email, parsed.data.password);
    if (!user) {
        res.status(401).json({ error: "INVALID_CREDENTIALS" });
        return;
    }
    const accessToken = (0, tokenService_1.signAccessToken)(user);
    const refreshToken = (0, tokenService_1.signRefreshToken)(user);
    inMemoryStore_1.store.saveRefreshToken(user.id, refreshToken);
    res.json({
        accessToken,
        refreshToken,
        user: {
            id: user.id,
            email: user.email,
            displayName: user.displayName
        }
    });
});
exports.authRouter.post("/guest", (req, res) => {
    const guestName = typeof req.body?.displayName === "string" ? req.body.displayName : undefined;
    const user = inMemoryStore_1.store.getOrCreateGuest(guestName);
    const accessToken = (0, tokenService_1.signAccessToken)(user);
    const refreshToken = (0, tokenService_1.signRefreshToken)(user);
    inMemoryStore_1.store.saveRefreshToken(user.id, refreshToken);
    res.status(201).json({
        accessToken,
        refreshToken,
        user: {
            id: user.id,
            email: user.email,
            displayName: user.displayName
        }
    });
});
exports.authRouter.post("/refresh", (req, res) => {
    const parsed = schemas_1.refreshSchema.safeParse(req.body);
    if (!parsed.success) {
        res.status(400).json({ error: "INVALID_REQUEST", details: parsed.error.flatten() });
        return;
    }
    try {
        const payload = (0, tokenService_1.verifyRefreshToken)(parsed.data.refreshToken);
        if (!inMemoryStore_1.store.isValidRefreshToken(payload.sub, parsed.data.refreshToken)) {
            res.status(401).json({ error: "INVALID_REFRESH_TOKEN" });
            return;
        }
        const user = inMemoryStore_1.store.getUserById(payload.sub);
        if (!user) {
            res.status(401).json({ error: "USER_NOT_FOUND" });
            return;
        }
        const accessToken = (0, tokenService_1.signAccessToken)(user);
        const refreshToken = (0, tokenService_1.signRefreshToken)(user);
        inMemoryStore_1.store.saveRefreshToken(user.id, refreshToken);
        res.json({ accessToken, refreshToken });
    }
    catch {
        res.status(401).json({ error: "INVALID_REFRESH_TOKEN" });
    }
});
exports.authRouter.post("/logout", authMiddleware_1.requireAuth, (req, res) => {
    if (!req.auth) {
        res.status(401).json({ error: "UNAUTHORIZED" });
        return;
    }
    inMemoryStore_1.store.revokeRefreshToken(req.auth.userId);
    res.status(204).send();
});
