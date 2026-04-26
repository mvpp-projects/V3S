"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
function parseAllowedOrigins(raw) {
    return raw
        .split(",")
        .map((origin) => origin.trim())
        .filter(Boolean);
}
function getEnv(name, fallback) {
    const value = process.env[name] ?? fallback;
    if (!value) {
        throw new Error(`Missing required env var: ${name}`);
    }
    return value;
}
exports.config = {
    port: Number(process.env.PORT ?? 3001),
    frontendOrigins: parseAllowedOrigins(getEnv("FRONTEND_ORIGIN", "http://localhost:5173,http://localhost:5174")),
    accessTokenSecret: getEnv("ACCESS_TOKEN_SECRET", "change_me_access"),
    refreshTokenSecret: getEnv("REFRESH_TOKEN_SECRET", "change_me_refresh"),
    accessTokenTtl: getEnv("ACCESS_TOKEN_TTL", "15m"),
    refreshTokenTtl: getEnv("REFRESH_TOKEN_TTL", "7d"),
    defaultSceneId: getEnv("DEFAULT_SCENE_ID", "default-scene"),
    dataFilePath: process.env.DATA_FILE_PATH
        ? path_1.default.resolve(process.env.DATA_FILE_PATH)
        : path_1.default.resolve(process.cwd(), "data", "store.json"),
    persistDebounceMs: Number(process.env.PERSIST_DEBOUNCE_MS ?? 400),
    inviteSweepIntervalMs: Number(process.env.INVITE_SWEEP_INTERVAL_MS ?? 60_000),
    presenceSweepIntervalMs: Number(process.env.PRESENCE_SWEEP_INTERVAL_MS ?? 20_000),
    presenceTtlMs: Number(process.env.PRESENCE_TTL_MS ?? 45_000)
};
