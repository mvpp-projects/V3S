# High Level Design — V3S → Web Blender-like (HLD)

## Purpose
Define architecture and implementation plan to evolve V3S into a Blender-like, collaborative web modeling tool (web-first MVP, eventual Electron packaging).

## Goals (MVP)
- Primitives + transforms (move/rotate/scale) with Transform gizmo
- Command-based undo/redo
- Basic modeling ops (extrude, subdivide) for polygonal meshes
- GLTF/GLB import & export
- Real-time optimistic collaboration with conflict handling
- Modular UI: Outliner, Properties, Tool Shelf, Viewport

## Non-Goals (MVP)
- Sculpting, animation timeline, offline production rendering, heavy physics

## Architecture Overview
- Frontend: React + Vite + three.js renderer. Centralized `Renderer` module controls scene, camera, controls, selection, and transform gizmos.
- State: `useSceneStore` (Zustand) extended with a command stack and optimistic update flags.
- Sync: Socket.IO-based real-time sync retained, migrate to JSON-Patch/CRDT hybrid for transforms. `sceneSync` mediates local command → op emission and remote op application.
- Backend: Node/Express + Socket.IO; current `InMemoryStore` persists JSON snapshots — migrate to durable DB for scale, with server-side validation and op dedupe.
- Assets: Client-side GLTF importer/exporter; optionally server-side storage (S3) for large assets.

## Key Components & Files to Reuse
- Renderer: [frontend/src/scene/SceneCanvas.tsx](frontend/src/scene/SceneCanvas.tsx)
- Client sync: [frontend/src/lib/sceneSync.ts](frontend/src/lib/sceneSync.ts)
- Socket helper: [frontend/src/lib/socket.ts](frontend/src/lib/socket.ts)
- Scene store: [frontend/src/state/sceneStore.ts](frontend/src/state/sceneStore.ts)
- Tool UI: [frontend/src/components/ToolShelf.tsx](frontend/src/components/ToolShelf.tsx), [frontend/src/components/Panel.tsx](frontend/src/components/Panel.tsx)
- Backend gateway & store: [backend/src/realtime/socketGateway.ts](backend/src/realtime/socketGateway.ts), [backend/src/store/inMemoryStore.ts](backend/src/store/inMemoryStore.ts)

## Detailed Design

- Schema / Scene Graph
  - Standardize object schema: `id`, `type` (mesh, light, camera, group), `parentId`, `children[]`, `transform` (position/rotation/scale), `mesh` (geometry descriptor), `material`.
  - Use hierarchical transforms; store world/local transforms with lazy recompute.

- Renderer Module
  - Single `Renderer` class (or hook) exposing: `init(canvas)`, `addObject()`, `updateObject()`, `removeObject()`, `setSelection(ids)`, `applyCommand(cmd)`.
  - Integrate `TransformControls` for gizmo; support multi-select bounding box and group transforms.
  - Resource management: dispose geometries/materials, reuse geometries for identical primitives, support GPU instancing later.

- Command System (Undo/Redo)
  - Client-side command pattern: each user action creates a `Command` with `do()` and `undo()` plus serializable payload.
  - Maintain `undoStack` and `redoStack` in `useSceneStore`.
  - Optimistic emission: when a command is executed locally, it updates the local store and emits an op to the server with `opId` and command payload. On server ack, mark command committed; on conflict, run reconciliation.
  - Commands: `AddObject`, `RemoveObject`, `UpdateTransform`, `UpdateMesh`, `ApplyModifier`, `MaterialChange`.

- Realtime Collaboration & Conflict Resolution
  - Short term: JSON Patch diffs for object-level changes + server ack; last-writer-wins for non-critical fields.
  - For transforms and selection: adopt a CRDT or operation ordering (Yjs or Automerge) for low-latency, merge-friendly behavior. Option: use Yjs for transform & selection but keep authoritative server snapshots.
  - Conflict UX: show transient merge indicators (toast or highlight), and provide undo for users.

- Modeling Tools
  - Start with procedural primitives (cube, sphere, cylinder) and mesh editing ops: extrude face, inset, subdivide, bevel.
  - Use existing JS/WebAssembly libs for mesh ops when possible (e.g., CSG, meshboolean). Keep heavy ops off main thread (WebWorker or WASM).
  - Represent editable geometry as indexed buffer geometry and maintain a lightweight topology structure for edit ops.

- Import/Export & Assets
  - Client-side GLTFLoader + GLTFExporter for import/export. Add optional DRACO compression support.
  - For large models, provide server-side upload endpoint to store and transcode assets.

- Persistence & Scaling
  - Replace `InMemoryStore` with Postgres for object metadata and Redis for presence/locks; store large binary assets in object storage.
  - Keep periodic snapshots for recovery and session history.

- Security
  - Verify tokens on socket connect; enforce per-scene roles (owner/editor/viewer) on server.
  - Rate-limit geometry operations and size of uploaded assets.

## Data Flow (Example: transform move)
1. User drags gizmo → local `UpdateTransform` command executed → local scene store updated and renderer updated immediately.
2. `sceneSync` emits `op:transform` with `opId`, objectId, new transform.
3. Server validates and applies op (writes to store), broadcasts `object:update` to other clients.
4. Receiving clients apply update in `withRemoteApply` mode to avoid echoing.
5. If server returns `conflict`, origin client receives reconciliation message; command may be rolled back or merged, with user notified.

## Migration & Roadmap
- Phase 0 (Refactor): Extract `Renderer` and standardize schema; add command skeleton and outliner UI. (1 week)
- Phase 1 (MVP): Implement undo/redo, primitives, gizmo, GLTF import/export, basic collaboration hardening. (2–3 weeks)
- Phase 2 (Scale & Collaboration): Implement CRDT pilot for transforms, persistent store migration, asset store. (3–4 weeks)
- Phase 3 (Advanced Modeling): Add mesh ops, WebWorker/WASM offload, performance tuning, optional Electron packaging. (4+ weeks)

## Verification & Testing
- Unit tests for command/undo logic and schema validation.
- Integration tests: multi-tab collaboration (two clients), transform conflict scenarios.
- Manual scenarios: create/duplicate/delete, extrude/subdivide, import/export roundtrip.
- Performance tests: render and interact with large numbers of low-poly objects.

## Risks & Mitigations
- Concurrency conflicts: mitigate by adopting CRDT for transforms or lock-on-select fallback.
- Large meshes on client: mitigate with streaming/import limits, server-side transcode, and progressive LODs.
- Undo/redo in collaborative sessions: design commands to be local-first with server snapshots; provide session replay and snapshots for recovery.

## Open Questions
- Preferred authoritative model: server-first authoritative state vs client-optimistic with server reconciliation?
- Target memory/scene complexity targets (objects/triangles) for performance planning?
- Electron packaging required in initial roadmap?

---

Created by the V3S design effort. Refer to the session plan at `/memories/session/plan.md` for tracking.
