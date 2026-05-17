# V3S — Design Diagram

A set of architecture diagrams (Mermaid) describing the **V3S Collaborative 3D Scene Editor**.
Render in any Mermaid-aware viewer (GitHub, VS Code Mermaid preview, mermaid.live).

- **Stack**: React 18 + Vite + Three.js + Zustand (frontend) · Node.js + Express + Socket.IO + TypeScript (backend)
- **Persistence (current)**: In-memory store with file snapshot (`backend/data/store.json`)
- **Persistence (target)**: PostgreSQL — schema in [`backend/sql/schema.sql`](../backend/sql/schema.sql)
- **Transport**: HTTPS (REST) + WebSocket (Socket.IO)
- **Auth**: JWT access + refresh tokens; guest tokens via invite codes

---

## 1. System Context (C4 - Level 1)

```mermaid
flowchart LR
    subgraph Users
        U1["Authenticated User<br/>(owner / editor / viewer)"]
        U2["Guest<br/>(via invite link)"]
    end

    Browser["Web Browser<br/>(Chrome / FF / Safari / Edge<br/>WebGL required)"]

    subgraph V3S["V3S Platform"]
        FE["Frontend SPA<br/>(React + Three.js)"]
        BE["Backend API<br/>(Express + Socket.IO)"]
        FS[("Local JSON Snapshot<br/>backend/data/store.json")]
        DB[("PostgreSQL<br/>(planned)")]
    end

    Assets["GLTF / GLB Assets<br/>(client-side import/export)"]

    U1 --> Browser
    U2 --> Browser
    Browser -- "HTTPS REST /api/v1/*" --> BE
    Browser -- "WebSocket (Socket.IO)" --> BE
    Browser <-. "Three.js renders" .-> FE
    BE --- FS
    BE -. "future migration" .-> DB
    Browser <-- "import / export GLTF" --> Assets
```

---

## 2. High-Level Architecture (C4 - Level 2 Container)

```mermaid
flowchart TB
    subgraph Client["Browser / SPA"]
        direction TB
        Pages["Pages<br/>Login · Scenes · Editor · Invite"]
        UI["UI Components<br/>TopBar · ToolShelf · PropertiesPanel<br/>Panel · CursorOverlay"]
        Canvas["SceneCanvas (Three.js)<br/>Renderer · Gizmos · Picking"]
        Store["Zustand sceneStore<br/>objects · selection · presence<br/>undo/redo command stack"]
        Sync["sceneSync / socket.ts<br/>optimistic apply + reconcile"]
        ApiLib["api.ts / auth.ts<br/>REST client + token storage"]
        Export["exportScene.ts<br/>GLTFExporter"]
    end

    subgraph Backend["Node.js Backend (Express + Socket.IO)"]
        direction TB
        HTTP["HTTP Server<br/>server.ts<br/>/health · /ready"]
        APIRouter["API Router /api/v1<br/>router.ts"]
        AuthMW["authMiddleware<br/>JWT verify"]
        RAuth["routes/auth.ts<br/>login · refresh · logout · guest"]
        RMe["routes/me.ts<br/>profile · options"]
        RScenes["routes/scenes.ts<br/>CRUD + members"]
        RInvites["routes/invites.ts<br/>create · accept"]
        Gateway["socketGateway.ts<br/>scene:join · object:* · presence:*"]
        Tokens["tokenService.ts<br/>sign / verify JWT"]
        Validation["validation/schemas.ts<br/>Zod request schemas"]
        Store2[("InMemoryStore<br/>users · scenes · objects<br/>invites · presence · opIds")]
        Persist[("Debounced JSON Persist<br/>data/store.json")]
    end

    Pages --> UI
    Pages --> Canvas
    Canvas --> Store
    UI --> Store
    Pages --> ApiLib
    Sync --> Store
    Canvas --> Sync
    UI --> Sync
    Canvas --> Export

    ApiLib -- "REST" --> APIRouter
    Sync -- "WebSocket" --> Gateway

    HTTP --> APIRouter
    APIRouter --> AuthMW
    AuthMW --> RAuth
    AuthMW --> RMe
    AuthMW --> RScenes
    AuthMW --> RInvites
    RAuth --> Tokens
    RAuth --> Store2
    RMe --> Store2
    RScenes --> Store2
    RInvites --> Store2
    Gateway --> Tokens
    Gateway --> Validation
    Gateway --> Store2
    Store2 --> Persist
```

---

## 3. Frontend Component Diagram

```mermaid
flowchart TB
    Main["main.tsx<br/>(React root)"] --> App["App.tsx<br/>(client router)"]
    App --> ThemeProvider
    App --> LoginPage
    App --> ScenesPage
    App --> EditorPage
    App --> InvitePage

    EditorPage --> WorkspaceTopBar
    EditorPage --> ToolShelf
    EditorPage --> PropertiesPanel
    EditorPage --> SceneCanvas
    EditorPage --> CursorOverlay

    SceneCanvas --> ThreeJS["three.js<br/>Scene · Camera · Renderer<br/>TransformControls"]

    subgraph Stores["State (Zustand)"]
        SceneStore["sceneStore<br/>objects · selection<br/>gizmoMode · axisConstraint<br/>presence · lighting<br/>undoStack · redoStack"]
    end

    subgraph Libs["lib/"]
        Api["api.ts"]
        Auth["auth.ts<br/>(token storage)"]
        Sock["socket.ts"]
        Sync["sceneSync.ts"]
        Exp["exportScene.ts"]
    end

    LoginPage --> Api
    ScenesPage --> Api
    InvitePage --> Api
    EditorPage --> Sync
    EditorPage --> Exp

    ToolShelf --> SceneStore
    PropertiesPanel --> SceneStore
    SceneCanvas --> SceneStore
    CursorOverlay --> SceneStore

    Sync --> Sock
    Sync --> SceneStore
    Api --> Auth
    Sock --> Auth
```

---

## 4. Backend Component Diagram

```mermaid
flowchart TB
    Entry["server.ts<br/>express + http.createServer"]
    Entry --> CORS["cors middleware"]
    Entry --> JSONP["express.json (1mb)"]
    Entry --> Health["/health · /ready"]
    Entry --> Router["/api/v1 → apiRouter"]
    Entry --> ErrMW["error middleware"]
    Entry --> SockGw["createSocketGateway(server)"]

    subgraph HTTP["HTTP Layer"]
        Router --> AuthR["/auth (auth.ts)"]
        Router --> MeR["/me (me.ts)"]
        Router --> ScenesR["/scenes (scenes.ts)"]
        Router --> InvitesR["/invites (invites.ts)"]
        AuthMW["authMiddleware<br/>requireAuth"]
        MeR --> AuthMW
        ScenesR --> AuthMW
        InvitesR --> AuthMW
    end

    subgraph Realtime["Realtime Layer"]
        SockGw --> Handlers["Event handlers:<br/>scene:join<br/>object:add / update / remove<br/>presence:cursor / select<br/>disconnect"]
    end

    subgraph Domain["Domain / Services"]
        TokSvc["auth/tokenService.ts<br/>signAccessToken<br/>signRefreshToken<br/>verifyAccessToken<br/>verifyRefreshToken"]
        Schemas["validation/schemas.ts<br/>(Zod)"]
    end

    subgraph Store["Persistence"]
        Mem[("InMemoryStore<br/>users · refreshTokens<br/>scenes · members · objects<br/>invites · presence · opIds<br/>userOptions")]
        Disk[("data/store.json<br/>(debounced snapshot)")]
        Sweep["Background sweepers:<br/>invites · presence TTL"]
    end

    AuthR --> TokSvc
    AuthR --> Mem
    MeR --> Mem
    ScenesR --> Mem
    InvitesR --> Mem
    AuthMW --> TokSvc
    Handlers --> TokSvc
    Handlers --> Schemas
    Handlers --> Mem
    Mem --> Disk
    Mem --> Sweep
```

---

## 5. Data Model (target PostgreSQL schema)

```mermaid
erDiagram
    users ||--o{ scenes : "created_by"
    users ||--o{ scene_members : "user_id"
    users ||--o{ scene_invites : "created_by"
    users ||--|| user_options : "user_id"
    users ||--o{ scene_objects : "updated_by"
    users ||--o{ scene_presence : "user_id"
    scenes ||--o{ scene_members : "scene_id"
    scenes ||--o{ scene_invites : "scene_id"
    scenes ||--o{ scene_objects : "scene_id"
    scenes ||--o{ scene_presence : "scene_id"

    users {
        text id PK
        text email UK
        text display_name
        text password_hash
        timestamptz created_at
    }
    scenes {
        text id PK
        text name
        text created_by FK
        timestamptz created_at
    }
    scene_members {
        text scene_id PK "FK to scenes.id"
        text user_id PK "FK to users.id"
        text role "owner|editor|viewer"
        timestamptz created_at
    }
    scene_invites {
        text token_hash PK
        text scene_id FK
        text role "editor|viewer"
        text created_by FK
        timestamptz expires_at
        int max_uses
        int uses
    }
    scene_objects {
        text scene_id PK "FK to scenes.id"
        text object_id PK
        text object_type
        jsonb transform
        jsonb props
        int version
        timestamptz updated_at
        text updated_by FK
    }
    scene_presence {
        text scene_id PK "FK to scenes.id"
        text user_id PK "FK to users.id"
        jsonb cursor
        jsonb selection
        text color
        timestamptz last_seen_at
    }
    user_options {
        text user_id PK "FK to users.id"
        jsonb options
        timestamptz updated_at
    }
    audit_events {
        bigserial id PK
        text scene_id
        text user_id
        text op_id
        text event_type
        jsonb payload
        timestamptz created_at
    }
```

---

## 6. Authentication Flow (Sequence)

```mermaid
sequenceDiagram
    autonumber
    actor U as User
    participant FE as Frontend (LoginPage / auth.ts)
    participant API as Express /api/v1/auth
    participant TS as tokenService
    participant ST as InMemoryStore

    U->>FE: enter email + password
    FE->>API: POST /auth/login {email, password}
    API->>ST: authenticate(email, password)
    ST-->>API: User | null
    alt invalid
        API-->>FE: 401 INVALID_CREDENTIALS
    else valid
        API->>TS: signAccessToken(user)
        API->>TS: signRefreshToken(user)
        API->>ST: saveRefreshToken(userId, refresh)
        API-->>FE: 200 {accessToken, refreshToken, user}
        FE->>FE: store tokens (localStorage)
        FE-->>U: navigate to /scenes
    end

    Note over FE,API: Later — access token expires

    FE->>API: POST /auth/refresh {refreshToken}
    API->>TS: verifyRefreshToken
    API->>ST: isValidRefreshToken?
    alt rotation valid
        API->>TS: sign new access + refresh
        API->>ST: saveRefreshToken(rotate)
        API-->>FE: 200 {accessToken, refreshToken}
    else invalid
        API-->>FE: 401 INVALID_REFRESH_TOKEN
        FE-->>U: redirect to /login
    end
```

---

## 7. Realtime Collaboration Flow (Sequence)

Optimistic apply on initiating client, server reconciles via versioned object + opId dedup, broadcasts to peers.

```mermaid
sequenceDiagram
    autonumber
    actor UA as User A (editor)
    actor UB as User B (editor)
    participant FA as Frontend A
    participant FB as Frontend B
    participant GW as Socket Gateway
    participant ST as InMemoryStore

    UA->>FA: drag gizmo to move cube
    FA->>FA: optimistic store.updateTransform()
    FA->>GW: emit object:update {sceneId, opId, object{version}}
    GW->>GW: Zod validate + role check (owner/editor)
    GW->>ST: applyUpdateObject(sceneId, userId, opId, object)
    alt opId already processed
        ST-->>GW: existing object (idempotent)
    else version conflict (LWW)
        ST-->>GW: {object, conflict:true}
    else clean
        ST-->>GW: {object, conflict:false}
    end
    GW-->>FA: ack {ok, object, conflict}
    GW-)FB: emit object:updated {object, conflict}
    FA->>FA: reconcile local store with server object
    FB->>FB: upsert object in store → re-render
```

### Presence broadcast (throttled)

```mermaid
sequenceDiagram
    autonumber
    actor UA as User A
    participant FA as Frontend A
    participant GW as Socket Gateway
    participant ST as InMemoryStore
    actor UB as User B

    UA->>FA: mouse move in viewport
    FA->>GW: emit presence:cursor {x,y} (≤25 Hz)
    GW->>GW: throttle (40ms minimum)
    GW->>ST: upsertPresence(userId, cursor)
    ST-->>GW: presence{color}
    GW-)UB: presence:cursor {userId,cursor,color}
    Note over UB: CursorOverlay renders remote cursor
```

---

## 8. Scene Join + Snapshot (Sequence)

```mermaid
sequenceDiagram
    autonumber
    participant FE as Frontend (EditorPage)
    participant GW as Socket Gateway
    participant TS as tokenService
    participant ST as InMemoryStore

    FE->>GW: socket connect
    FE->>GW: emit scene:join {sceneId, accessToken}
    GW->>TS: verifyAccessToken(token)
    alt invalid token
        GW-->>FE: error UNAUTHORIZED + ack{ok:false}
    else valid
        GW->>ST: getSceneRole(sceneId, userId)
        alt no role
            GW-->>FE: error UNAUTHORIZED + ack{ok:false, FORBIDDEN}
        else has role
            GW->>GW: socket.join(sceneId) (room)
            GW->>ST: getSceneSnapshot(sceneId)
            ST-->>GW: objects map
            GW-->>FE: scene:snapshot {sceneId, objects}
            FE->>FE: store.setSnapshot(objects)
        end
    end
```

---

## 9. Guest / Invite Flow (Sequence)

```mermaid
sequenceDiagram
    autonumber
    actor Owner as Owner
    actor Guest as Guest
    participant API as /api/v1/invites
    participant ST as InMemoryStore
    participant AuthAPI as /api/v1/auth
    participant FE as Frontend (InvitePage)

    Owner->>API: POST /invites {sceneId, role, expiresAt, maxUses}
    API->>ST: createInvite(...)
    API-->>Owner: {inviteToken, url=/invite/{token}}
    Owner->>Guest: share link

    Guest->>FE: open /invite/{token}
    FE->>API: POST /invites/{token}/accept (guest path)
    API->>ST: validate + consume invite (max_uses, expiry)
    API->>ST: getOrCreateGuest()
    API->>ST: addSceneMember(sceneId, guestId, role)
    API-->>FE: {accessToken, refreshToken, sceneId, user}
    FE->>FE: store tokens
    FE-->>Guest: redirect to /editor/{sceneId}
```

---

## 10. Undo / Redo (Command Pattern)

```mermaid
flowchart LR
    subgraph Commands["Command Types"]
        Add["AddObject"]
        Rem["RemoveObject"]
        UT["UpdateTransform"]
        Ex["ExtrudeObject"]
        Sub["SubdivideObject"]
    end

    UserAction["User action<br/>(toolbar / gizmo / key)"] --> Exec["sceneStore.executeCommand(cmd)"]
    Exec --> Apply["Apply forward effect<br/>(update objects map)"]
    Exec --> Push["push {command, inverse}<br/>onto undoStack"]
    Exec --> Sync["sceneSync emits<br/>object:add/update/remove"]

    Undo["sceneStore.undo()"] --> Pop["pop undoStack"]
    Pop --> ApplyInv["apply inverse"]
    Pop --> PushRedo["push onto redoStack"]
    Pop --> SyncU["sceneSync emits inverse op"]

    Redo["sceneStore.redo()"] --> PopR["pop redoStack"]
    PopR --> ApplyFwd["re-apply forward"]
    PopR --> PushUndo["push onto undoStack"]
    PopR --> SyncR["sceneSync emits forward op"]
```

---

## 11. Deployment View

### Current (prototype / dev)

```mermaid
flowchart LR
    Dev["Developer Machine"]
    subgraph Local["Local Workstation"]
        Vite["Vite dev server<br/>:5173"]
        Node["Node.js backend<br/>:3001<br/>(ts-node-dev)"]
        File[("./data/store.json")]
    end
    Browser["Browser"]
    Browser -- "http :5173" --> Vite
    Browser -- "REST :3001" --> Node
    Browser -- "WS :3001" --> Node
    Node --- File
    Dev --> Local
```

### Target (enterprise-ready)

```mermaid
flowchart TB
    User["End User"]
    CDN["Static CDN<br/>(SPA bundle)"]
    Ingress["API Gateway / Ingress<br/>(TLS · rate-limit · auth-edge)"]

    subgraph K8s["Kubernetes Cluster"]
        BE1["v3s-backend pod<br/>HTTP + Socket.IO<br/>liveness /health · readiness /ready"]
        BE2["v3s-backend pod"]
        BEN["… (HPA)"]
        Redis[("Redis<br/>Socket.IO adapter +<br/>presence cache")]
    end

    PG[("PostgreSQL<br/>scenes · objects ·<br/>members · invites ·<br/>audit_events")]
    S3[("Object Store (S3)<br/>GLTF assets")]
    Obs["Observability<br/>logs · metrics · traces"]

    User --> CDN
    User --> Ingress
    Ingress --> BE1
    Ingress --> BE2
    Ingress --> BEN
    BE1 --- Redis
    BE2 --- Redis
    BEN --- Redis
    BE1 --> PG
    BE2 --> PG
    BEN --> PG
    BE1 --> S3
    BE2 --> S3
    BE1 --> Obs
    BE2 --> Obs
```

---

## 12. Cross-Cutting Concerns

```mermaid
flowchart LR
    subgraph Security
        S1["JWT access (15m) + refresh (7d)"]
        S2["Zod input validation"]
        S3["Role check on every write<br/>(owner/editor only)"]
        S4["Scene-room isolation via socket.data.sceneId"]
        S5["Invite tokens: max_uses + expiry"]
    end
    subgraph Reliability
        R1["opId-based idempotency"]
        R2["Versioned objects + LWW conflict flag"]
        R3["Presence TTL sweeper"]
        R4["Invite expiry sweeper"]
        R5["Debounced disk snapshot"]
    end
    subgraph Observability["Observability (target)"]
        O1["Structured logs + correlation-id"]
        O2["Metrics: socket count, op rate,<br/>conflict rate, presence size"]
        O3["Traces across REST → Socket → Store"]
        O4["/health (liveness) · /ready (readiness)"]
    end
    subgraph Tenancy["Tenancy (per scene)"]
        T1["scene_members table<br/>(role per user per scene)"]
        T2["Socket joins single sceneId room"]
        T3["No cross-scene broadcast"]
    end
```

---

## 13. Key Endpoints & Events Reference

| REST endpoint                | Auth   | Purpose                         |
|------------------------------|--------|---------------------------------|
| `POST /api/v1/auth/login`    | none   | Email/password login            |
| `POST /api/v1/auth/guest`    | none   | Provision guest user            |
| `POST /api/v1/auth/refresh`  | none   | Rotate access + refresh tokens  |
| `POST /api/v1/auth/logout`   | bearer | Revoke refresh token            |
| `GET  /api/v1/me`            | bearer | Current user profile            |
| `GET  /api/v1/me/options`    | bearer | User preferences                |
| `PATCH /api/v1/me/options`   | bearer | Update preferences              |
| `GET  /api/v1/scenes`        | bearer | List scenes for user            |
| `POST /api/v1/scenes`        | bearer | Create scene                    |
| `GET  /api/v1/scenes/:id`    | bearer | Scene metadata + members        |
| `PATCH /api/v1/scenes/:id`   | bearer | Update scene (owner)            |
| `DELETE /api/v1/scenes/:id`  | bearer | Delete scene (owner)            |
| `POST /api/v1/invites`       | bearer | Create scene invite             |
| `POST /api/v1/invites/:t/accept` | mixed | Accept invite (guest/user)  |
| `GET  /health`               | none   | Liveness                        |
| `GET  /ready`                | none   | Readiness                       |

| Socket event (C→S)    | Payload                                                                  |
|-----------------------|--------------------------------------------------------------------------|
| `scene:join`          | `{ sceneId, token }`                                                     |
| `object:add`          | `{ sceneId, opId, object{id,type,transform,props,version?} }`            |
| `object:update`       | same shape as `object:add`                                               |
| `object:remove`       | `{ sceneId, opId, objectId, expectedVersion? }`                          |
| `presence:cursor`     | `{ sceneId, x, y }` (throttled 40ms)                                     |
| `presence:select`     | `{ sceneId, selection: string[] }`                                       |

| Socket event (S→C)    | Payload                                                                  |
|-----------------------|--------------------------------------------------------------------------|
| `scene:snapshot`      | `{ sceneId, objects }`                                                   |
| `object:added`        | `{ object }`                                                             |
| `object:updated`      | `{ object, conflict? }`                                                  |
| `object:removed`      | `{ objectId, conflict? }`                                                |
| `presence:cursor`     | `{ userId, cursor, color }`                                              |
| `presence:select`     | `{ userId, selection, color }`                                           |
| `presence:left`       | `{ userId }`                                                             |
| `error`               | `{ code, message? }`                                                     |

---

_Last updated: 2026-05-17 · derived from source in [backend/src](../backend/src) and [frontend/src](../frontend/src)._
