import { Router } from "express";
import { store } from "../../store/inMemoryStore";
import { patchOptionsSchema } from "../../validation/schemas";
import { requireAuth, type AuthenticatedRequest } from "../authMiddleware";

export const meRouter = Router();

meRouter.get("/options", requireAuth, (req: AuthenticatedRequest, res) => {
  if (!req.auth) {
    res.status(401).json({ error: "UNAUTHORIZED" });
    return;
  }

  const options = store.getUserOptions(req.auth.userId);
  res.json(options);
});

meRouter.patch("/options", requireAuth, (req: AuthenticatedRequest, res) => {
  if (!req.auth) {
    res.status(401).json({ error: "UNAUTHORIZED" });
    return;
  }

  const parsed = patchOptionsSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "INVALID_REQUEST", details: parsed.error.flatten() });
    return;
  }

  const options = store.patchUserOptions(req.auth.userId, parsed.data);
  res.json(options);
});
