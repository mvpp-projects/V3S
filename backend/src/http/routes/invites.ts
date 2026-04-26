import { Router } from "express";
import { signAccessToken, signRefreshToken, verifyAccessToken } from "../../auth/tokenService";
import { store } from "../../store/inMemoryStore";

export const invitesRouter = Router();

invitesRouter.get("/:token/resolve", (req, res) => {
  const invite = store.resolveInvite(req.params.token);
  if (!invite) {
    res.status(404).json({ error: "INVITE_NOT_FOUND" });
    return;
  }

  const scene = store.getScene(invite.sceneId);
  if (!scene) {
    res.status(404).json({ error: "SCENE_NOT_FOUND" });
    return;
  }

  res.json({
    scene: {
      id: scene.id,
      name: scene.name
    },
    role: invite.role,
    expiresAt: invite.expiresAt,
    maxUses: invite.maxUses,
    uses: invite.uses
  });
});

invitesRouter.post("/:token/accept", (req, res) => {
  const authHeader = req.headers.authorization;
  let user = null;

  if (authHeader?.startsWith("Bearer ")) {
    const token = authHeader.slice("Bearer ".length);
    try {
      const payload = verifyAccessToken(token);
      user = store.getUserById(payload.sub);
    } catch {
      user = null;
    }
  }

  if (!user) {
    const displayName = typeof req.body?.displayName === "string" ? req.body.displayName : undefined;
    user = store.getOrCreateGuest(displayName);
  }

  try {
    const accepted = store.acceptInvite(req.params.token, user.id);
    const accessToken = signAccessToken(user);
    const refreshToken = signRefreshToken(user);
    store.saveRefreshToken(user.id, refreshToken);

    res.status(201).json({
      sceneId: accepted.sceneId,
      role: accepted.role,
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        email: user.email,
        displayName: user.displayName
      }
    });
  } catch {
    res.status(400).json({ error: "INVITE_INVALID" });
  }
});
