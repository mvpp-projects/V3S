import jwt from "jsonwebtoken";
import type { SignOptions } from "jsonwebtoken";
import { config } from "../config";
import type { AccessTokenPayload, User } from "../types";

export interface TokenPair {
  accessToken: string;
  refreshToken: string;
}

export function signAccessToken(user: User): string {
  const payload: AccessTokenPayload = {
    sub: user.id,
    email: user.email,
    displayName: user.displayName
  };
  return jwt.sign(payload, config.accessTokenSecret, {
    expiresIn: config.accessTokenTtl as SignOptions["expiresIn"]
  });
}

export function signRefreshToken(user: User): string {
  return jwt.sign({ sub: user.id }, config.refreshTokenSecret, {
    expiresIn: config.refreshTokenTtl as SignOptions["expiresIn"]
  });
}

export function verifyAccessToken(token: string): AccessTokenPayload {
  return jwt.verify(token, config.accessTokenSecret) as AccessTokenPayload;
}

export function verifyRefreshToken(token: string): { sub: string } {
  return jwt.verify(token, config.refreshTokenSecret) as { sub: string };
}
