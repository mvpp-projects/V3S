import { Router } from "express";
import { store } from "../../store/inMemoryStore";
import { createInviteSchema, createSceneSchema } from "../../validation/schemas";
import { requireAuth, type AuthenticatedRequest } from "../authMiddleware";

export const scenesRouter = Router();

function roleCanInvite(role: string | null): boolean {
  return role === "owner" || role === "editor";
}

scenesRouter.get("/", requireAuth, (req: AuthenticatedRequest, res) => {
  if (!req.auth) {
    res.status(401).json({ error: "UNAUTHORIZED" });
    return;
  }

  const scenes = store.listUserScenes(req.auth.userId);
  res.json({ scenes });
});

scenesRouter.post("/", requireAuth, (req: AuthenticatedRequest, res) => {
  if (!req.auth) {
    res.status(401).json({ error: "UNAUTHORIZED" });
    return;
  }

  const parsed = createSceneSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "INVALID_REQUEST", details: parsed.error.flatten() });
    return;
  }

  const scene = store.createScene(parsed.data.name, req.auth.userId);
  res.status(201).json(scene);
});

scenesRouter.get("/:sceneId", requireAuth, (req: AuthenticatedRequest, res) => {
  if (!req.auth) {
    res.status(401).json({ error: "UNAUTHORIZED" });
    return;
  }

  const sceneId = req.params.sceneId;
  const role = store.getSceneRole(sceneId, req.auth.userId);
  if (!role) {
    res.status(403).json({ error: "FORBIDDEN" });
    return;
  }

  const scene = store.getScene(sceneId);
  if (!scene) {
    res.status(404).json({ error: "SCENE_NOT_FOUND" });
    return;
  }

  res.json({ ...scene, role });
});

scenesRouter.get("/:sceneId/objects", requireAuth, (req: AuthenticatedRequest, res) => {
  if (!req.auth) {
    res.status(401).json({ error: "UNAUTHORIZED" });
    return;
  }

  const sceneId = req.params.sceneId;
  const role = store.getSceneRole(sceneId, req.auth.userId);
  if (!role) {
    res.status(403).json({ error: "FORBIDDEN" });
    return;
  }

  try {
    const objects = store.listSceneObjects(sceneId);
    res.json({ sceneId, objects });
  } catch {
    res.status(404).json({ error: "SCENE_NOT_FOUND" });
  }
});

scenesRouter.post("/:sceneId/invites", requireAuth, (req: AuthenticatedRequest, res) => {
  if (!req.auth) {
    res.status(401).json({ error: "UNAUTHORIZED" });
    return;
  }

  const sceneId = req.params.sceneId;
  const role = store.getSceneRole(sceneId, req.auth.userId);
  if (!role || !roleCanInvite(role)) {
    res.status(403).json({ error: "FORBIDDEN" });
    return;
  }

  const parsed = createInviteSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "INVALID_REQUEST", details: parsed.error.flatten() });
    return;
  }

  try {
    const invite = store.createInvite(
      sceneId,
      req.auth.userId,
      parsed.data.role,
      parsed.data.expiresInMinutes,
      parsed.data.maxUses
    );

    res.status(201).json({
      sceneId: invite.sceneId,
      role: invite.role,
      expiresAt: invite.expiresAt,
      maxUses: invite.maxUses,
      uses: invite.uses,
      token: invite.token
    });
  } catch {
    res.status(404).json({ error: "SCENE_NOT_FOUND" });
  }
});
