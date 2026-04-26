/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SOCKET_URL?: string;
  readonly VITE_API_BASE?: string;
  readonly VITE_SCENE_ID?: string;
  readonly VITE_LOGIN_EMAIL?: string;
  readonly VITE_LOGIN_PASSWORD?: string;
  readonly VITE_GUEST_NAME?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
