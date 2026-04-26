import { Router } from "express";
import { signAccessToken, signRefreshToken, verifyRefreshToken } from "../../auth/tokenService";
import { store } from "../../store/inMemoryStore";
import { loginSchema, refreshSchema } from "../../validation/schemas";
import { requireAuth, type AuthenticatedRequest } from "../authMiddleware";

export const authRouter = Router();

authRouter.post("/login", (req, res) => {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "INVALID_REQUEST", details: parsed.error.flatten() });
    return;
  }

  const user = store.authenticate(parsed.data.email, parsed.data.password);
  if (!user) {
    res.status(401).json({ error: "INVALID_CREDENTIALS" });
    return;
  }

  const accessToken = signAccessToken(user);
  const refreshToken = signRefreshToken(user);
  store.saveRefreshToken(user.id, refreshToken);

  res.json({
    accessToken,
    refreshToken,
    user: {
      id: user.id,
      email: user.email,
      displayName: user.displayName
    }
  });
});

authRouter.post("/guest", (req, res) => {
  const guestName = typeof req.body?.displayName === "string" ? req.body.displayName : undefined;
  const user = store.getOrCreateGuest(guestName);
  const accessToken = signAccessToken(user);
  const refreshToken = signRefreshToken(user);
  store.saveRefreshToken(user.id, refreshToken);

  res.status(201).json({
    accessToken,
    refreshToken,
    user: {
      id: user.id,
      email: user.email,
      displayName: user.displayName
    }
  });
});

authRouter.post("/refresh", (req, res) => {
  const parsed = refreshSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "INVALID_REQUEST", details: parsed.error.flatten() });
    return;
  }

  try {
    const payload = verifyRefreshToken(parsed.data.refreshToken);
    if (!store.isValidRefreshToken(payload.sub, parsed.data.refreshToken)) {
      res.status(401).json({ error: "INVALID_REFRESH_TOKEN" });
      return;
    }

    const user = store.getUserById(payload.sub);
    if (!user) {
      res.status(401).json({ error: "USER_NOT_FOUND" });
      return;
    }

    const accessToken = signAccessToken(user);
    const refreshToken = signRefreshToken(user);
    store.saveRefreshToken(user.id, refreshToken);

    res.json({ accessToken, refreshToken });
  } catch {
    res.status(401).json({ error: "INVALID_REFRESH_TOKEN" });
  }
});

authRouter.post("/logout", requireAuth, (req: AuthenticatedRequest, res) => {
  if (!req.auth) {
    res.status(401).json({ error: "UNAUTHORIZED" });
    return;
  }

  store.revokeRefreshToken(req.auth.userId);
  res.status(204).send();
});
