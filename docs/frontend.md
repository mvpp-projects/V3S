# v3s Frontend Architecture and Developer Guide

## Overview
This document describes the frontend architecture for v3s — a realtime, collaborative 3D scene editor. The frontend is responsible for rendering the scene, managing local state, handling user interactions, and syncing with the backend via Socket.io with optimistic updates.

## Tech Stack
- React (component UI)
- Three.js (3D rendering)
- Zustand (client state store)
- Socket.io-client (realtime events)
- TypeScript (recommended)

## High-Level Architecture
- `SceneCanvas` (rendering & input)
- `sceneStore` (Zustand): canonical client state for objects, selections, and presence
- `lib/socket.ts`: Socket.io wrapper that maps events to store actions
- UI components: object list, inspector, transform gizmos, presence overlay

Diagram (conceptual):

Client UI -> SceneCanvas -> sceneStore <-> lib/socket -> Socket.io -> Server

## Folder / File References
- `frontend/src/scene/SceneCanvas.tsx` — main rendering component and input hooks
- `frontend/src/state/sceneStore.ts` — Zustand store and actions
- `frontend/src/lib/socket.ts` — socket initialization and event handlers

## State Model (suggested)
Example shape for the Zustand store:

```
{
  scenes: { [sceneId]: { objects: Record<objectId, Object>, snapshotMeta } },
  currentSceneId: string | null,
  localPresence: { userId, color, cursor },
  remotePresence: Record<userId, { cursor, selection, color }>,
  pendingOps: Array<PendingOp> // for optimistic updates tracking
}
```

Object model (example):

```
{
  id: string,
  type: 'mesh' | 'light' | 'camera' | ...,
  transform: { position, rotation, scale },
  props: { material, geometry, metadata }
}
```

## Socket Events & Client Handling
The frontend listens for and emits the events defined in the architecture doc. Key patterns:

- On join: emit `scene:join` with `sceneId` and auth token. Expect `scene:snapshot` payload containing full scene state.
- Snapshot: replace or merge into `sceneStore` (use snapshot consistency checks).
- Local edits: apply optimistic update to `sceneStore`, add an entry to `pendingOps`, emit an event (e.g., `object:update`).
- Server acknowledgement: server broadcasts `object:updated` (or `object:added`) — reconcile optimistic changes (clear pending op or patch local state if server authoritative diff differs).
- Presence: emit `presence:cursor` on pointer move (throttled). Render remote cursors in `SceneCanvas`.

Event mapping (client responsibilities):

- Emit: `scene:join`, `object:add`, `object:update`, `object:remove`, `presence:cursor`, `presence:select`
- Listen: `scene:snapshot`, `object:added`, `object:updated`, `object:removed`, `presence:join`, `presence:left`, `presence:cursor`, `presence:select`

## Optimistic UI & Conflict Handling
- Apply changes locally before server confirmation for snappy UX.
- Assign each optimistic op a client-side ID and timestamp; include it when emitting to server.
- When receiving authoritative updates, match by op ID when possible and reconcile (drop duplicates, patch mismatches).
- Use last-write-wins for simple fields (timestamp-based) and consider CRDTs for more complex merging if needed later.

## Performance Considerations
- Throttle high-frequency events (e.g., transforms, cursor moves). Use requestAnimationFrame for visual updates.
- Send deltas, not full objects when possible.
- Use selective re-rendering in React (memoize expensive components) and avoid re-creating Three.js objects unnecessarily.

## Component Guidelines
- `SceneCanvas.tsx`:
  - Initialize Three.js renderer and scene.
  - Subscribe to `sceneStore` for object list and presence.
  - Render remote cursors and selection outlines.
  - Emit user interactions as socket events (debounced/throttled as required).

- Inspector / Object Editor:
  - Read/write object props via `sceneStore` actions.
  - Batch updates when sending large transforms.

## Testing
- Unit tests for store actions and reducers (mock socket layer).
- Integration tests for end-to-end flows using a test socket server (e.g., `socket.io` test server in Node).
- Visual regression testing for key UI components.

## Local Development Tips
- Run frontend with `npm run dev` (or existing script). Ensure backend socket server is running and `lib/socket.ts` points to correct host/port.
- Use browser devtools to watch websocket frames for event lifecycle debugging.

See also: `docs/frontend-design.md` for UI tokens, component guidelines, and theme implementation details.

## Deployment Notes
- Build artifacts should be served by static hosting or via the backend Express server.
- Ensure socket endpoint is reachable (CORS, HTTPS, path) and production deployments use sticky sessions or an external pub/sub for Socket.io scaling.

## Security & Auth
- Authorize `scene:join` with a short-lived token. Reject unauthenticated join requests on the server.
- Validate and sanitize metadata before sending to server.

## Example Code Snippet (socket init)

```
// frontend/src/lib/socket.ts
import { io } from 'socket.io-client';
const socket = io(process.env.SOCKET_URL || '/', { auth: { token: getToken() } });
socket.on('scene:snapshot', (snapshot) => sceneStore.replaceSnapshot(snapshot));
export default socket;
```

## Next Steps / Enhancements
- Add CRDT-based merging for richer conflict resolution.
- Offline editing queue and reconnect reconciliation.
- Visual indicators for pending optimistic operations.
