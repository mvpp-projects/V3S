"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.meRouter = void 0;
const express_1 = require("express");
const inMemoryStore_1 = require("../../store/inMemoryStore");
const schemas_1 = require("../../validation/schemas");
const authMiddleware_1 = require("../authMiddleware");
exports.meRouter = (0, express_1.Router)();
exports.meRouter.get("/options", authMiddleware_1.requireAuth, (req, res) => {
    if (!req.auth) {
        res.status(401).json({ error: "UNAUTHORIZED" });
        return;
    }
    const options = inMemoryStore_1.store.getUserOptions(req.auth.userId);
    res.json(options);
});
exports.meRouter.patch("/options", authMiddleware_1.requireAuth, (req, res) => {
    if (!req.auth) {
        res.status(401).json({ error: "UNAUTHORIZED" });
        return;
    }
    const parsed = schemas_1.patchOptionsSchema.safeParse(req.body);
    if (!parsed.success) {
        res.status(400).json({ error: "INVALID_REQUEST", details: parsed.error.flatten() });
        return;
    }
    const options = inMemoryStore_1.store.patchUserOptions(req.auth.userId, parsed.data);
    res.json(options);
});
