import http from "http";
import cors from "cors";
import express from "express";
import { config } from "./config";
import { apiRouter } from "./http/router";
import { createSocketGateway } from "./realtime/socketGateway";
import { store } from "./store/inMemoryStore";

const app = express();

app.use(
  cors({
    origin: config.frontendOrigins,
    credentials: true
  })
);
app.use(express.json({ limit: "1mb" }));

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "v3s-backend", time: new Date().toISOString() });
});

app.get("/ready", (_req, res) => {
  res.json({ ready: true, service: "v3s-backend", time: new Date().toISOString() });
});

app.use("/api/v1", apiRouter);

app.use((err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error("Unhandled error", err);
  res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
});

const server = http.createServer(app);
createSocketGateway(server);

server.listen(config.port, () => {
  console.log(`v3s backend listening on http://localhost:${config.port}`);
});

function shutdown(signal: string): void {
  console.log(`Received ${signal}, shutting down gracefully`);
  store.shutdown();
  server.close(() => {
    process.exit(0);
  });
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
