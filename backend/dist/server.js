"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const router_1 = require("./http/router");
const socketGateway_1 = require("./realtime/socketGateway");
const inMemoryStore_1 = require("./store/inMemoryStore");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: config_1.config.frontendOrigins,
    credentials: true
}));
app.use(express_1.default.json({ limit: "1mb" }));
app.get("/health", (_req, res) => {
    res.json({ ok: true, service: "v3s-backend", time: new Date().toISOString() });
});
app.get("/ready", (_req, res) => {
    res.json({ ready: true, service: "v3s-backend", time: new Date().toISOString() });
});
app.use("/api/v1", router_1.apiRouter);
app.use((err, _req, res, _next) => {
    console.error("Unhandled error", err);
    res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
});
const server = http_1.default.createServer(app);
(0, socketGateway_1.createSocketGateway)(server);
server.listen(config_1.config.port, () => {
    console.log(`v3s backend listening on http://localhost:${config_1.config.port}`);
});
function shutdown(signal) {
    console.log(`Received ${signal}, shutting down gracefully`);
    inMemoryStore_1.store.shutdown();
    server.close(() => {
        process.exit(0);
    });
}
process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
