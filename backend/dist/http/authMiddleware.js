"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = requireAuth;
const tokenService_1 = require("../auth/tokenService");
function requireAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith("Bearer ")) {
        res.status(401).json({ error: "UNAUTHORIZED" });
        return;
    }
    const token = authHeader.slice("Bearer ".length);
    try {
        const payload = (0, tokenService_1.verifyAccessToken)(token);
        req.auth = {
            userId: payload.sub,
            email: payload.email,
            displayName: payload.displayName
        };
        next();
    }
    catch {
        res.status(401).json({ error: "UNAUTHORIZED" });
    }
}
