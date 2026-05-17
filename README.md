# V3S – Collaborative Web 3D Scene Editor

**V3S** is a web-based, collaborative 3D scene editor (Blender-like) built with modern web technologies. It enables real-time, multi-user editing of 3D scenes with support for primitives, transforms, basic modeling operations, and GLTF import/export.

## Table of Contents

- [Quick Start](#quick-start)
- [Project Overview](#project-overview)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Setup & Installation](#setup--installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Development Guide](#development-guide)
- [API & Events](#api--events)
- [Testing](#testing)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## Quick Start

### Prerequisites
- **Node.js** 16+ and **npm** 8+
- Git

### 1. Clone & Install
```bash
# Clone repository
git clone <repo-url>
cd V3S

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 2. Configure Environment
```bash
# Backend configuration
cd ../backend
cp .env.example .env
# Edit .env as needed (defaults work for local dev)
```

### 3. Run Locally
```bash
# Terminal 1: Start backend server
cd backend
npm run dev
# Backend runs at http://localhost:3001

# Terminal 2: Start frontend dev server
cd frontend
npm run dev
# Frontend runs at http://localhost:5173
```

### 4. Open in Browser
Navigate to **http://localhost:5173** and log in with:
- **Email**: `demo@v3s.local`
- **Password**: `demo1234`

---

## Project Overview

**V3S** is an MVP (minimum viable product) for a collaborative 3D modeling platform:

- **Target Use Case**: Real-time, multi-user 3D scene editing with persistence
- **Current Phase**: Prototype with in-memory + file-backed storage; planned migration to PostgreSQL and cloud assets
- **Tech Stack**: 
  - Frontend: React, Vite, Three.js, Zustand, Socket.io-client
  - Backend: Node.js, Express, Socket.io, TypeScript

### MVP Goals
- ✅ Primitives + transforms (move/rotate/scale) with visual transform gizmos
- ✅ Command-based undo/redo
- ✅ Basic modeling ops (extrude, subdivide) for polygonal meshes
- ✅ GLTF/GLB import & export
- ✅ Real-time optimistic collaboration with conflict handling
- ✅ Modular UI: Outliner, Properties, Tool Shelf, Viewport

### Non-Goals (MVP)
- Sculpting, animation timeline, offline production rendering, heavy physics

---

## Architecture

### High-Level Diagram
```
┌─────────────────┐
│   React UI      │ (Components, Pages, State)
├─────────────────┤
│   Three.js      │ (3D Rendering & Gizmos)
│   Renderer      │
├─────────────────┤
│  Zustand Store  │ (Scene, Objects, Presence)
├─────────────────┤
│  Socket.io      │ ◄────────────► Socket.io
│  Client         │                Server
└─────────────────┘
         │
         │ REST / WS
         │
    ┌─────────────────┐
    │  Express App    │
    ├─────────────────┤
    │ Socket.io       │
    │ Gateway         │
    ├─────────────────┤
    │ In-Memory Store │ (JSON snapshot → file)
    ├─────────────────┤
    │ Auth Service    │
    └─────────────────┘
```

### Frontend Components

| Component | Purpose |
|-----------|---------|
| `SceneCanvas.tsx` | Main 3D viewport; rendering and input handling |
| `sceneStore.ts` | Zustand store; canonical client state (objects, selection, presence) |
| `socket.ts` | Socket.io wrapper; maps events to store actions |
| `ToolShelf.tsx` | Tool selection and object creation UI |
| `PropertiesPanel.tsx` | Object properties inspector |
| `TopBar.tsx` | Navigation and scene controls |
| `Panel.tsx` | Reusable collapsible panel component |
| `CursorOverlay.tsx` | Renders remote user cursors |

### Backend Modules

| Module | Purpose |
|--------|---------|
| `server.ts` | Express app setup, CORS, routes initialization |
| `socketGateway.ts` | Socket.io connection, event handlers, presence management |
| `inMemoryStore.ts` | Scene and object data; persists to JSON file |
| `tokenService.ts` | JWT generation and validation |
| `authMiddleware.ts` | Request authentication & authorization |
| `router.ts` | Express route registration |
| `routes/auth.ts` | Login, logout, refresh endpoints |
| `routes/scenes.ts` | Scene CRUD operations |
| `routes/invites.ts` | Invite creation, acceptance, guest authentication |
| `routes/me.ts` | Current user info and options |
| `validation/schemas.ts` | Zod validation schemas |

---

## Prerequisites

### System Requirements
- **Node.js**: v16.0 or higher (v18+ recommended)
- **npm**: v8.0 or higher
- **OS**: Windows, macOS, or Linux
- **Browser**: Modern browser with WebGL support (Chrome, Firefox, Safari, Edge)

### Development Tools (Optional)
- **VS Code** with TypeScript, ESLint extensions
- **Postman** or **REST Client** for API testing
- **WebSocket debugging tools** for Socket.io inspection

---

## Setup & Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd V3S
```

### 2. Backend Setup
```bash
cd backend

# Install dependencies
npm install

# Copy environment configuration
copy .env.example .env

# Review/customize .env if needed
# Default config works for local development
```

### 3. Frontend Setup
```bash
cd ../frontend

# Install dependencies
npm install
```

### 4. Verify Installation
```bash
# Backend: verify TypeScript compilation
cd ../backend
npm run build

# Frontend: verify build
cd ../frontend
npm run build
```

---

## Running the Project

### Development Mode

#### Terminal 1: Backend
```bash
cd backend
npm run dev
```
- Server runs at: **http://localhost:3001**
- Hot reload enabled via `ts-node-dev`

#### Terminal 2: Frontend
```bash
cd frontend
npm run dev
```
- UI runs at: **http://localhost:5173**
- Vite hot module replacement enabled

#### Terminal 3 (Optional): Database Seeding or Scripts
```bash
cd backend
# Run scripts as needed (e.g., seed demo data)
```

### Production Build

#### Backend
```bash
cd backend
npm run build
npm start
# Serves compiled JS from dist/
```

#### Frontend
```bash
cd frontend
npm run build
# Outputs static files to dist/
# Serve via Express or static hosting (Vercel, Netlify, etc.)
```

### Docker (Future)
Coming soon: Dockerfile for containerized deployment.

---

## Project Structure

```
V3S/
├── backend/
│   ├── src/
│   │   ├── server.ts                 # Express app entry point
│   │   ├── config.ts                 # Configuration constants
│   │   ├── types.ts                  # Shared TypeScript types
│   │   ├── auth/
│   │   │   └── tokenService.ts       # JWT token generation/validation
│   │   ├── http/
│   │   │   ├── authMiddleware.ts     # Auth guard for routes
│   │   │   ├── router.ts             # Route aggregator
│   │   │   └── routes/
│   │   │       ├── auth.ts           # Auth endpoints
│   │   │       ├── scenes.ts         # Scene CRUD
│   │   │       ├── invites.ts        # Invite endpoints
│   │   │       └── me.ts             # User profile
│   │   ├── realtime/
│   │   │   └── socketGateway.ts      # Socket.io event handlers
│   │   ├── store/
│   │   │   └── inMemoryStore.ts      # Scene persistence
│   │   └── validation/
│   │       └── schemas.ts            # Zod validation schemas
│   ├── data/
│   │   └── store.json                # File-backed scene data
│   ├── sql/
│   │   └── schema.sql                # PostgreSQL migration target
│   ├── .env.example                  # Environment template
│   ├── package.json                  # Dependencies
│   ├── tsconfig.json                 # TypeScript config
│   ├── README.md                     # Backend-specific docs
│   └── dist/                         # Compiled output (after build)
│
├── frontend/
│   ├── src/
│   │   ├── App.tsx                   # Main app component
│   │   ├── main.tsx                  # React entry point
│   │   ├── pages/
│   │   │   ├── LoginPage.tsx         # User authentication
│   │   │   ├── ScenesPage.tsx        # Scene list/selection
│   │   │   ├── EditorPage.tsx        # Main 3D editor
│   │   │   └── InvitePage.tsx        # Invite-based guest access
│   │   ├── components/
│   │   │   ├── TopBar.tsx            # Navigation bar
│   │   │   ├── ToolShelf.tsx         # Tool palette
│   │   │   ├── PropertiesPanel.tsx   # Object inspector
│   │   │   ├── Panel.tsx             # Reusable panel
│   │   │   ├── CursorOverlay.tsx     # Remote presence
│   │   │   ├── WorkspaceTopBar.tsx   # Editor toolbar
│   │   │   └── ui/
│   │   │       ├── Button.tsx        # Reusable button
│   │   │       ├── Card.tsx          # Card component
│   │   │       ├── Dropdown.tsx      # Dropdown selector
│   │   │       └── Input.tsx         # Text input
│   │   ├── lib/
│   │   │   ├── api.ts                # REST client helper
│   │   │   ├── auth.ts               # Auth utilities
│   │   │   ├── socket.ts             # Socket.io setup
│   │   │   ├── sceneSync.ts          # Sync orchestrator
│   │   │   └── exportScene.ts        # GLTF export
│   │   ├── scene/
│   │   │   └── SceneCanvas.tsx       # 3D canvas & renderer
│   │   ├── state/
│   │   │   └── sceneStore.ts         # Zustand store
│   │   ├── theme/
│   │   │   └── ThemeProvider.tsx     # Theme context
│   │   ├── styles/
│   │   │   ├── index.css             # Global styles
│   │   │   ├── pages.css             # Page-specific styles
│   │   │   └── tokens.css            # Design tokens
│   │   ├── vite-env.d.ts             # Vite type definitions
│   │   └── AppExample.tsx            # Component showcase
│   ├── index.html                    # HTML template
│   ├── package.json                  # Dependencies
│   ├── tsconfig.json                 # TypeScript config
│   ├── vite.config.ts                # Vite configuration
│   ├── README.md                     # Frontend-specific docs
│   └── dist/                         # Build output
│
├── docs/
│   ├── hld.md                        # High-level design document
│   ├── backend.md                    # Backend architecture deep-dive
│   ├── frontend.md                   # Frontend architecture & guide
│   ├── frontend-design.md            # UI/UX design specs
│   └── v3s.arcdoc                    # Architecture decision log
│
└── README.md                         # This file
```

---

## Key Features

### User Authentication
- JWT-based login with email/password
- Guest access via invite codes
- Refresh token rotation and secure session handling
- Demo account: `demo@v3s.local` / `demo1234`

### Scene Management
- Create and list 3D scenes
- Persistent storage (file-backed; migration to PostgreSQL planned)
- Scene snapshots and versioning

### Real-Time Collaboration
- Socket.io-based WebSocket communication
- Optimistic updates: local changes reflect immediately, server reconciles
- Presence tracking: see remote user cursors and selections
- Conflict resolution: last-write-wins for simple fields; CRDT planned for transforms

### 3D Editing
- **Objects**: Primitives (cube, sphere, cylinder, etc.)
- **Transforms**: Move, rotate, scale via visual gizmo or properties panel
- **Mesh Operations**: Extrude, subdivide, inset, bevel (planned enhancements)
- **Undo/Redo**: Command-based undo stack with replay
- **Selection**: Single/multi-select with bounding box highlight
- **Outliner**: Hierarchical object tree with parent/child relationships

### Asset Management
- GLTF/GLB import and export
- Client-side processing (no server upload by default)
- Optional server-side asset hosting (planned)

### UI Components
- Modal dialogs for auth, scene creation, settings
- Responsive panels: properties inspector, tool shelf, outliner
- Design tokens for consistent theming
- Light/dark mode support (planned)

---

## Development Guide

### Code Style & Standards
- **TypeScript**: Strict mode enabled; all code must be typed
- **Naming**: PascalCase for components/classes, camelCase for functions/variables
- **Formatting**: Follow ESLint config (run `npm run lint` if configured)
- **Comments**: JSDoc for public functions and exports

### Adding a New Feature

#### Backend (New API Endpoint)
1. Define request/response types in `types.ts` or a dedicated types file
2. Create validation schema in `validation/schemas.ts` using Zod
3. Add route handler in `routes/<feature>.ts`
4. Register in `router.ts`
5. Test with curl/Postman:
   ```bash
   curl -X POST http://localhost:3001/api/features \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer <token>" \
     -d '{"name": "feature-name"}'
   ```

#### Frontend (New Component)
1. Create component in `src/components/` (or appropriate subfolder)
2. Define props interface at top of file
3. Import and use in parent component
4. Style with CSS file (co-located with component) or Tailwind (if setup)
5. Test in dev mode: `npm run dev`

#### Adding Socket.io Event
1. **Backend** (`socketGateway.ts`):
   - Listen: `socket.on('event-name', (data) => { ... })`
   - Broadcast: `io.emit('event-name', data)` or `socket.emit()`
2. **Frontend** (`socket.ts`):
   - Subscribe in socket setup: `socket.on('event-name', (data) => { ... })`
   - Dispatch store action in handler
3. **Store** (`sceneStore.ts`):
   - Add action to handle incoming event
   - Update state accordingly

### Environment Variables

#### Backend (.env)
```bash
PORT=3001                           # Server port
FRONTEND_ORIGIN=http://localhost:5173  # CORS origins (comma-separated)
ACCESS_TOKEN_SECRET=change_me       # JWT signing key (change in production!)
REFRESH_TOKEN_SECRET=change_me_refresh
ACCESS_TOKEN_TTL=15m                # Access token lifetime
REFRESH_TOKEN_TTL=7d                # Refresh token lifetime
DEFAULT_SCENE_ID=default-scene      # Default scene ID
DATA_FILE_PATH=./data/store.json    # File persistence path
PERSIST_DEBOUNCE_MS=400             # Debounce for file writes
INVITE_SWEEP_INTERVAL_MS=60000      # Cleanup interval for expired invites
PRESENCE_TTL_MS=45000               # Presence timeout (ms)
```

#### Frontend
No `.env` file required; configure via `src/lib/socket.ts` if backend is on different host:
```typescript
const socket = io(process.env.REACT_APP_API_URL || 'http://localhost:3001', {
  autoConnect: true,
});
```

### Debugging

#### Backend
- Use `console.log()` or debugger in VS Code
- Set breakpoints in `src/server.ts`, routes, etc.
- Check logs in terminal where `npm run dev` runs

#### Frontend
- Open **DevTools** (F12 or Cmd+Option+I)
- **Sources** tab: set breakpoints in components/hooks
- **Console** tab: inspect store state or component props
- **Network** tab: monitor REST and WebSocket traffic
- **Application** tab: inspect localStorage (tokens, etc.)

#### Socket.io Events
Browser DevTools → Network → WS (WebSocket) → Messages:
- Watch `emit` and `receive` in real-time
- Inspect payload structure for debugging mismatches

### Running Tests (Planned)
```bash
# Backend
cd backend
npm test

# Frontend
cd frontend
npm test
```
See `docs/` for testing strategy and examples.

---

## API & Events

### REST Endpoints

#### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/login` | User login (email/password) |
| POST | `/api/auth/refresh` | Refresh access token |
| POST | `/api/auth/logout` | Logout (revoke tokens) |
| POST | `/api/auth/guest` | Guest login via invite code |

#### Scenes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/scenes` | List user's scenes |
| POST | `/api/scenes` | Create new scene |
| GET | `/api/scenes/:id` | Get scene details |
| GET | `/api/scenes/:id/objects` | List scene objects |
| PATCH | `/api/scenes/:id` | Update scene metadata |
| DELETE | `/api/scenes/:id` | Delete scene |

#### Invites
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/invites` | Create invite |
| POST | `/api/invites/:code/accept` | Accept invite as guest |

#### User
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/me` | Get current user info |
| GET | `/api/me/options` | Get user options (preferences) |
| PATCH | `/api/me/options` | Update user preferences |

### Socket.io Events

#### Client → Server (Emit)
```javascript
// Join a scene
socket.emit('scene:join', { sceneId: 'abc123', token: 'jwt...' });

// Add object
socket.emit('object:add', { sceneId: 'abc123', object: {...} });

// Update object
socket.emit('object:update', { sceneId: 'abc123', objectId: 'obj1', changes: {...} });

// Remove object
socket.emit('object:remove', { sceneId: 'abc123', objectId: 'obj1' });

// Presence: cursor position
socket.emit('presence:cursor', { sceneId: 'abc123', x: 100, y: 200 });

// Presence: selection
socket.emit('presence:select', { sceneId: 'abc123', objectIds: ['obj1', 'obj2'] });
```

#### Server → Client (Listen)
```javascript
// Receive scene snapshot on join
socket.on('scene:snapshot', (data) => {
  // { objects: {...}, metadata: {...} }
});

// Receive new object from other clients
socket.on('object:added', (data) => {
  // { objectId, object, userId }
});

// Receive object update
socket.on('object:updated', (data) => {
  // { objectId, changes, userId }
});

// Receive object removal
socket.on('object:removed', (data) => {
  // { objectId, userId }
});

// Receive remote user cursor
socket.on('presence:cursor', (data) => {
  // { userId, x, y, color }
});

// Receive remote selection
socket.on('presence:select', (data) => {
  // { userId, objectIds, color }
});
```

---

## Testing

### Manual Testing Checklist

#### Authentication
- [ ] Login with demo account
- [ ] Invalid credentials rejected
- [ ] Token refresh works
- [ ] Logout clears session
- [ ] Create invite and log in as guest

#### Scene Operations
- [ ] Create new scene
- [ ] Load existing scene
- [ ] Add primitives (cube, sphere, etc.)
- [ ] Transform objects (move, rotate, scale)
- [ ] Multi-select and group operations
- [ ] Delete objects
- [ ] Undo/redo commands

#### Real-Time Collaboration
- [ ] Open scene in two browser tabs
- [ ] Edit object in tab 1, see update in tab 2
- [ ] Transform in parallel; check conflict resolution
- [ ] See remote cursor movement
- [ ] See remote selection highlighting

#### Asset Management
- [ ] Export scene to GLTF
- [ ] Import GLTF model
- [ ] Verify model appears in viewport

### Automated Testing (Planned)
- Unit tests for Zustand store actions
- Integration tests for Socket.io event flow
- End-to-end tests for multi-client scenarios

---

## Roadmap

### Phase 0: Refactor (1 week)
- [ ] Extract Renderer module from SceneCanvas
- [ ] Standardize object schema
- [ ] Add command skeleton
- [ ] Enhance outliner UI

### Phase 1: MVP (2–3 weeks)
- [ ] Implement undo/redo
- [ ] Add primitives and mesh operations
- [ ] Integrate transform gizmos
- [ ] Add GLTF import/export
- [ ] Harden collaboration (deduplication, conflict resolution)

### Phase 2: Scale & Collaboration (3–4 weeks)
- [ ] Migrate in-memory store to PostgreSQL
- [ ] Implement CRDT for transforms (optional: use Yjs)
- [ ] Add asset server/storage (S3 integration)
- [ ] Session replay and history
- [ ] Performance testing and optimization

### Phase 3: Advanced Modeling (4+ weeks)
- [ ] Mesh editing tools (extrude, subdivide, bevel, etc.)
- [ ] WebWorker / WebAssembly offload for heavy ops
- [ ] Material editing and texture support
- [ ] Optional Electron packaging for desktop

### Post-MVP
- [ ] Lighting and rendering improvements
- [ ] Animation timeline (basic keyframe support)
- [ ] Plugins / extensions API
- [ ] Mobile / touch support
- [ ] Dark mode and accessibility features

---

## Contributing

### Getting Help
- Check [docs/](docs/) for architecture and design docs
- Review backend [README.md](backend/README.md) and frontend [README.md](frontend/README.md)
- Open an issue or pull request with questions

### Reporting Bugs
1. Check if issue already exists
2. Provide:
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Environment (OS, browser, Node version)

### Submitting Changes
1. Create a feature branch: `git checkout -b feature/my-feature`
2. Make commits with clear messages
3. Push and open a pull request
4. Ensure all tests pass and code follows style guide

---

## License

This project is proprietary software. See LICENSE file for details (or contact maintainers if no LICENSE exists).

---

## Troubleshooting

### Backend won't start
- Ensure Node.js v16+ is installed: `node --version`
- Check port 3001 is available: `netstat -an | findstr 3001` (Windows)
- Clear node_modules and reinstall: `rm -r node_modules && npm install`
- Check .env file syntax (no trailing spaces, valid JSON values)

### Frontend won't build
- Clear Vite cache: `rm -r node_modules/.vite`
- Ensure Vite is v7.2+: `npm show vite version`
- Check TypeScript: `npx tsc --version`

### Socket connection fails
- Verify backend is running: `curl http://localhost:3001/health`
- Check CORS origin in backend .env matches frontend URL
- Open DevTools → Network → WS to inspect WebSocket handshake
- Clear browser cache and hard-refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Can't log in
- Use demo account: `demo@v3s.local` / `demo1234`
- Check backend logs for auth errors
- Verify JWT secrets in .env are set (can be any string for local dev)

---

## Contact & Support

For questions, issues, or contributions, please:
- Open an issue on GitHub
- Contact the maintainers
- Check the [docs/](docs/) folder for detailed guides

---

**Last Updated**: May 2026  
**V3S Version**: 0.1.0 (Prototype)
