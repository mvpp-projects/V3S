# v3s Backend Architecture and Developer Guide

## Overview
This document describes the backend architecture for v3s. The backend manages scene state, validates and broadcasts realtime events using Socket.io, exposes REST endpoints for scene management, and provides optional persistence and scaling strategies.

## Tech Stack
- Node.js + TypeScript (recommended)
- Express (REST API)
- Socket.io (realtime gateway)
- Redis (optional — for persistence and pub/sub)
- In-memory store (lightweight single-node deployments)

## High-Level Components
- `server.ts` — initializes Express + Socket.io and HTTP server
- `sockets/sceneGateway.ts` — Socket.io handlers and event routing
- `core/roomManager.ts` — per-scene room manager that holds objects, presence, and snapshots
- `api/scenes.ts` — REST endpoints for listing, creating, fetching scenes

## Folder / File References
- `backend/src/server.ts`
- `backend/src/sockets/sceneGateway.ts`
- `backend/src/core/roomManager.ts`
- `backend/src/api/scenes.ts`

## Data Models

Scene snapshot (example):

```
{
  id: string,
  objects: Record<objectId, Object>,
  meta: { createdAt, updatedAt, owner }
}
```

Object model (server-side):

```
{
  id: string,
  type: string,
  transform: { position: [x,y,z], rotation: [x,y,z], scale: [x,y,z] },
  props: {...},
  updatedAt: number
}
```

Presence model:

```
{ userId, socketId, color, cursor: { x,y }, selection: [objectId] }
```

## Socket Event Handling Patterns

- `scene:join`:
  - Authenticate request (token) and check scene permissions.
  - Add socket to Socket.io room named `scene:<sceneId>`.
  - Send `scene:snapshot` with current scene state.
  - Broadcast `presence:join` to room with that user's presence info.

- Object events (`object:add`, `object:update`, `object:remove`):
  - Validate payload schema and permission.
  - Apply changes to room state (in-memory or Redis).
  - Persist change if persistence enabled.
  - Broadcast the authoritative event (`object:added` / `object:updated` / `object:removed`) to the room.

- Presence events (`presence:cursor`, `presence:select`):
  - Update presence state in room manager (with TTL if using Redis).
  - Broadcast to room (throttle high-frequency presence updates by client).

## Validation & Security
- Validate schema of incoming events (use JSON Schema or zod for TypeScript).
- Enforce permissions per scene (read/write roles).
- Rate-limit high-frequency events to avoid abuse.
- Sanitize metadata to avoid injection in downstream systems.

## Persistence Strategies

- In-memory (single node):
  - Fast, simple. Use for development or small deployments.
  - Scene state lost on process restart.

- Redis (recommended for scaling):
  - Use Redis Hashes to store scene snapshots and presence with TTLs.
  - Use Redis Pub/Sub to propagate updates across instances: each instance listens to Redis channel `scene-updates` and re-broadcasts to local sockets.

## Scaling
- For multi-node Socket.io deployments:
  - Use `socket.io-redis` or `@socket.io/redis-adapter` to enable cross-instance pub/sub.
  - Ensure sticky sessions at load balancer if not using adapter (to keep websocket connection pinned to a server).
  - Prefer external pub/sub (Redis) for authoritative state and horizontal scaling.

## REST API
- `GET /api/v1/scenes` — list scenes (supports pagination, filters)
- `POST /api/v1/scenes` — create a new scene (returns scene id)
- `GET /api/v1/scenes/:sceneId` — get scene metadata and latest snapshot

Implement these in `backend/src/api/scenes.ts`. Keep REST limited to CRUD and use sockets for realtime updates.

## Room Manager Responsibilities (`core/roomManager.ts`)
- Maintain canonical scene snapshot in memory or via Redis
- Track connected sockets and presence per scene
- Provide methods: `joinScene(sceneId, user)`, `leaveScene(sceneId, socketId)`, `applyOp(sceneId, op)`, `getSnapshot(sceneId)`

## Example flow for `object:update`
1. Client emits `object:update` with op `{ opId, objectId, changes, userId, ts }`.
2. sceneGateway validates op and calls `roomManager.applyOp`.
3. roomManager applies change and persists (if enabled).
4. server emits `object:updated` to `scene:<sceneId>` room with authoritative object state.

## Testing
- Unit tests for `roomManager` logic (applyOp, conflict scenarios).
- Integration tests for `sceneGateway` using a Socket.io test client and a test Redis instance.
- Endpoint tests for REST APIs (supertest + Jest).

## Deployment & Operations
- Use process managers (PM2, systemd) or containerize with Docker.
- Configure Redis with persistence and high-availability for production.
- Monitor metrics: websocket connections, event rate, CPU/memory of Node processes.

## Observability
- Log joins, leaves, and critical validation failures.
- Emit metrics for events/sec, ops/sec, and average op latency.

## Security Considerations
- Use HTTPS/WSS in production.
- Validate and authenticate all socket connections with tokens.
- Limit event sizes and validate shapes to avoid resource exhaustion.

## Example Server Initialization (concept)

```
// backend/src/server.ts
import express from 'express';
import { createServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';

const app = express();
const httpServer = createServer(app);
const io = new SocketIOServer(httpServer, { cors: { origin: '*' } });

// mount sceneGateway
io.of('/').on('connection', socket => {
  require('./sockets/sceneGateway').attach(socket, io);
});

httpServer.listen(process.env.PORT || 3000);
```

## Next Steps / Enhancements
- Add snapshot versioning for more robust reconnection semantics.
- Consider CRDT-based merging for less surprising conflict resolution.
- Add server-side batching for high-frequency transforms to reduce load.
