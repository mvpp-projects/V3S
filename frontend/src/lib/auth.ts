export const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:3001/api/v1";

const ACCESS_TOKEN_KEY = "v3s_access_token";
const REFRESH_TOKEN_KEY = "v3s_refresh_token";
const USER_KEY = "v3s_user";

export type AuthUser = {
  id: string;
  email: string;
  displayName: string;
};

type AuthResponse = {
  accessToken: string;
  refreshToken: string;
  user: AuthUser;
};

let accessToken = localStorage.getItem(ACCESS_TOKEN_KEY) ?? "";
let refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY) ?? "";
let currentUser: AuthUser | null = (() => {
  const raw = localStorage.getItem(USER_KEY);
  if (!raw) {
    return null;
  }
  try {
    return JSON.parse(raw) as AuthUser;
  } catch {
    return null;
  }
})();

function parseErrorPayload(payload: unknown): string {
  if (!payload || typeof payload !== "object") {
    return "Request failed";
  }
  const maybeError = (payload as { error?: unknown }).error;
  if (typeof maybeError === "string") {
    return maybeError;
  }
  return "Request failed";
}

async function parseResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const payload = await response.json().catch(() => null);
    const message = parseErrorPayload(payload);
    throw new Error(`${message} (${response.status})`);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}

function persistSession(nextAccessToken: string, nextRefreshToken: string, user: AuthUser): void {
  accessToken = nextAccessToken;
  refreshToken = nextRefreshToken;
  currentUser = user;
  localStorage.setItem(ACCESS_TOKEN_KEY, nextAccessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY, nextRefreshToken);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

function updateTokens(nextAccessToken: string, nextRefreshToken: string): void {
  accessToken = nextAccessToken;
  refreshToken = nextRefreshToken;
  localStorage.setItem(ACCESS_TOKEN_KEY, nextAccessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY, nextRefreshToken);
}

function clearPersistedSession(): void {
  accessToken = "";
  refreshToken = "";
  currentUser = null;
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

async function postJson<T>(url: string, body: unknown, token?: string): Promise<T> {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...(token ? { authorization: `Bearer ${token}` } : {})
    },
    body: JSON.stringify(body)
  });

  return parseResponse<T>(response);
}

export function getAccessToken(): string {
  return accessToken;
}

export function isAuthenticated(): boolean {
  return !!accessToken && !!refreshToken && !!currentUser;
}

export function getCurrentUser(): AuthUser | null {
  return currentUser;
}

export function getCurrentUserId(): string | null {
  return currentUser?.id ?? null;
}

export function logoutLocal(): void {
  clearPersistedSession();
}

export async function loginWithPassword(email: string, password: string): Promise<AuthUser> {
  const login = await postJson<AuthResponse>(`${API_BASE}/auth/login`, { email, password });
  persistSession(login.accessToken, login.refreshToken, login.user);
  return login.user;
}

export async function loginAsGuest(displayName?: string): Promise<AuthUser> {
  const guest = await postJson<AuthResponse>(`${API_BASE}/auth/guest`, {
    displayName: displayName?.trim() || undefined
  });
  persistSession(guest.accessToken, guest.refreshToken, guest.user);
  return guest.user;
}

export async function acceptInvite(token: string, displayName?: string): Promise<{ sceneId: string; role: string; user: AuthUser }> {
  const accepted = await postJson<{
    sceneId: string;
    role: string;
    accessToken: string;
    refreshToken: string;
    user: AuthUser;
  }>(`${API_BASE}/invites/${token}/accept`, { displayName: displayName?.trim() || undefined }, accessToken || undefined);

  persistSession(accepted.accessToken, accepted.refreshToken, accepted.user);
  return {
    sceneId: accepted.sceneId,
    role: accepted.role,
    user: accepted.user
  };
}

export async function refreshAccessToken(): Promise<void> {
  if (!refreshToken) {
    throw new Error("Missing refresh token");
  }

  const refreshed = await postJson<{ accessToken: string; refreshToken: string }>(`${API_BASE}/auth/refresh`, {
    refreshToken
  });

  updateTokens(refreshed.accessToken, refreshed.refreshToken);
}

export async function authorizedFetch(input: string, init: RequestInit = {}): Promise<Response> {
  if (!accessToken) {
    throw new Error("Not authenticated");
  }

  const doFetch = async (): Promise<Response> => {
    return fetch(input, {
      ...init,
      headers: {
        ...(init.headers || {}),
        authorization: `Bearer ${accessToken}`
      }
    });
  };

  let response = await doFetch();

  if (response.status !== 401) {
    return response;
  }

  await refreshAccessToken();
  response = await doFetch();

  if (response.status === 401) {
    clearPersistedSession();
  }

  return response;
}

export async function logoutRemote(): Promise<void> {
  if (!accessToken) {
    clearPersistedSession();
    return;
  }

  try {
    await authorizedFetch(`${API_BASE}/auth/logout`, { method: "POST" });
  } finally {
    clearPersistedSession();
  }
}

export async function ensureLoggedIn(): Promise<void> {
  if (isAuthenticated()) {
    return;
  }

  const email = import.meta.env.VITE_LOGIN_EMAIL;
  const password = import.meta.env.VITE_LOGIN_PASSWORD;
  if (email && password) {
    await loginWithPassword(email, password);
    return;
  }

  throw new Error("AUTH_REQUIRED");
}

export async function parseJsonResponse<T>(response: Response): Promise<T> {
  return parseResponse<T>(response);
}
