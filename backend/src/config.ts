import dotenv from "dotenv";
import path from "path";

dotenv.config();

function parseAllowedOrigins(raw: string): string[] {
  return raw
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
}

function getEnv(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

export const config = {
  port: Number(process.env.PORT ?? 3001),
  frontendOrigins: parseAllowedOrigins(getEnv("FRONTEND_ORIGIN", "http://localhost:5173,http://localhost:5174")),
  accessTokenSecret: getEnv("ACCESS_TOKEN_SECRET", "change_me_access"),
  refreshTokenSecret: getEnv("REFRESH_TOKEN_SECRET", "change_me_refresh"),
  accessTokenTtl: getEnv("ACCESS_TOKEN_TTL", "15m"),
  refreshTokenTtl: getEnv("REFRESH_TOKEN_TTL", "7d"),
  defaultSceneId: getEnv("DEFAULT_SCENE_ID", "default-scene"),
  dataFilePath: process.env.DATA_FILE_PATH
    ? path.resolve(process.env.DATA_FILE_PATH)
    : path.resolve(process.cwd(), "data", "store.json"),
  persistDebounceMs: Number(process.env.PERSIST_DEBOUNCE_MS ?? 400),
  inviteSweepIntervalMs: Number(process.env.INVITE_SWEEP_INTERVAL_MS ?? 60_000),
  presenceSweepIntervalMs: Number(process.env.PRESENCE_SWEEP_INTERVAL_MS ?? 20_000),
  presenceTtlMs: Number(process.env.PRESENCE_TTL_MS ?? 45_000)
};
