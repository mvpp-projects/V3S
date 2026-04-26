# V3S Backend (Prototype)

Node.js + TypeScript realtime collaboration backend for V3S.

## Features implemented
- JWT auth: login, refresh, logout
- Guest auth endpoint for invite-based collaboration
- Scene APIs: create scene, read scene, list scene objects
- Invite APIs: create invite, resolve invite, accept invite
- User options APIs: get/patch options
- Socket.io realtime collaboration:
  - `scene:join` -> `scene:snapshot`
  - `object:add` -> `object:added`
  - `object:update` -> `object:updated`
  - `object:remove` -> `object:removed`
  - `presence:cursor`, `presence:select`, `presence:left`
- Versioned object updates and opId dedupe in store
- Auto-persisted prototype state to disk with restart recovery
- Background cleanup for expired invites and stale presence
- Health + readiness endpoints (`/health`, `/ready`)

## Run locally
1. Install dependencies
   - `npm install`
2. Copy environment file
   - `copy .env.example .env`
3. Start dev server
   - `npm run dev`

Server default: `http://localhost:3001`

## Important prototype notes
- Persistence is file-backed by default (`DATA_FILE_PATH`, defaults to `./data/store.json`).
- `sql/schema.sql` contains the PostgreSQL target schema for next phase migration.
- Demo user available for frontend defaults:
  - email: `demo@v3s.local`
  - password: `demo1234`

## Next implementation steps
- Replace in-memory store with PostgreSQL repository layer
- Hash and store passwords securely
- Rotate and persist refresh tokens with revocation list
- Add structured logs and metrics
- Add integration tests for concurrent edits and invite flows
