import { API_BASE, authorizedFetch, parseJsonResponse } from "./auth";

export type SceneRole = "owner" | "editor" | "viewer";

export type SceneSummary = {
  id: string;
  name: string;
  createdBy: string;
  createdAt: string;
  role: SceneRole;
};

export type InviteDetails = {
  scene: {
    id: string;
    name: string;
  };
  role: Exclude<SceneRole, "owner">;
  expiresAt: string;
  maxUses: number;
  uses: number;
};

export async function listScenes(): Promise<SceneSummary[]> {
  const response = await authorizedFetch(`${API_BASE}/scenes`);
  const payload = await parseJsonResponse<{ scenes: SceneSummary[] }>(response);
  return payload.scenes;
}

export async function createScene(name: string): Promise<SceneSummary> {
  const response = await authorizedFetch(`${API_BASE}/scenes`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({ name })
  });

  const created = await parseJsonResponse<Omit<SceneSummary, "role">>(response);
  return {
    ...created,
    role: "owner"
  };
}

export async function resolveInvite(token: string): Promise<InviteDetails> {
  const response = await fetch(`${API_BASE}/invites/${token}/resolve`);
  return parseJsonResponse<InviteDetails>(response);
}

export async function createInvite(
  sceneId: string,
  role: Exclude<SceneRole, "owner">,
  expiresInMinutes: number,
  maxUses: number
): Promise<{ token: string; role: Exclude<SceneRole, "owner">; expiresAt: string; maxUses: number; uses: number }> {
  const response = await authorizedFetch(`${API_BASE}/scenes/${sceneId}/invites`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({ role, expiresInMinutes, maxUses })
  });

  return parseJsonResponse<{
    token: string;
    role: Exclude<SceneRole, "owner">;
    expiresAt: string;
    maxUses: number;
    uses: number;
  }>(response);
}
