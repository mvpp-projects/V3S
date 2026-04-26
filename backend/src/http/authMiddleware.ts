import type { NextFunction, Request, Response } from "express";
import { verifyAccessToken } from "../auth/tokenService";

export interface AuthenticatedRequest extends Request {
  auth?: {
    userId: string;
    email: string;
    displayName: string;
  };
}

export function requireAuth(req: AuthenticatedRequest, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    res.status(401).json({ error: "UNAUTHORIZED" });
    return;
  }

  const token = authHeader.slice("Bearer ".length);

  try {
    const payload = verifyAccessToken(token);
    req.auth = {
      userId: payload.sub,
      email: payload.email,
      displayName: payload.displayName
    };
    next();
  } catch {
    res.status(401).json({ error: "UNAUTHORIZED" });
  }
}
