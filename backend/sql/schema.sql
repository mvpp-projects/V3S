-- Prototype schema for V3S realtime collaboration backend.

CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  display_name TEXT NOT NULL,
  password_hash TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS scenes (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  created_by TEXT NOT NULL REFERENCES users(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS scene_members (
  scene_id TEXT NOT NULL REFERENCES scenes(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('owner', 'editor', 'viewer')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (scene_id, user_id)
);

CREATE TABLE IF NOT EXISTS scene_invites (
  token_hash TEXT PRIMARY KEY,
  scene_id TEXT NOT NULL REFERENCES scenes(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('editor', 'viewer')),
  created_by TEXT NOT NULL REFERENCES users(id),
  expires_at TIMESTAMPTZ NOT NULL,
  max_uses INT NOT NULL,
  uses INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS scene_objects (
  scene_id TEXT NOT NULL REFERENCES scenes(id) ON DELETE CASCADE,
  object_id TEXT NOT NULL,
  object_type TEXT NOT NULL,
  transform JSONB NOT NULL,
  props JSONB,
  version INT NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_by TEXT NOT NULL REFERENCES users(id),
  PRIMARY KEY (scene_id, object_id)
);

CREATE TABLE IF NOT EXISTS scene_presence (
  scene_id TEXT NOT NULL REFERENCES scenes(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  cursor JSONB,
  selection JSONB,
  color TEXT,
  last_seen_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (scene_id, user_id)
);

CREATE TABLE IF NOT EXISTS user_options (
  user_id TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  options JSONB NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS audit_events (
  id BIGSERIAL PRIMARY KEY,
  scene_id TEXT,
  user_id TEXT,
  op_id TEXT,
  event_type TEXT NOT NULL,
  payload JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_scene_objects_scene_updated ON scene_objects (scene_id, updated_at);
CREATE INDEX IF NOT EXISTS idx_scene_members_scene_user ON scene_members (scene_id, user_id);
CREATE INDEX IF NOT EXISTS idx_scene_presence_scene_lastseen ON scene_presence (scene_id, last_seen_at);
CREATE INDEX IF NOT EXISTS idx_scene_invites_expiry ON scene_invites (expires_at);
