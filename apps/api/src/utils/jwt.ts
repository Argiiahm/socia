import jwt from "jsonwebtoken";
import { Role } from "../generated/prisma";

export interface AccessTokenPayload {
  userId: string;
  email: string;
  role: Role;
}

interface RefreshTokenPayload {
  userId: string;
  tokenId: string;
}

export function createAccessToken(payload: AccessTokenPayload) {
  return jwt.sign(payload, process.env.ACCESS_KEY!, {
    expiresIn: "15m",
  });
}

export function createRefreshToken(payload: RefreshTokenPayload) {
  return jwt.sign(payload, process.env.REFRESH_KEY!, {
    expiresIn: "7d",
  });
}

export function verifyAccessToken(tokenId: string) {
  return jwt.verify(tokenId, process.env.ACCESS_KEY!) as AccessTokenPayload;
}

export function verifyRefreshToken(tokenId: string) {
  return jwt.verify(tokenId, process.env.REFRESH_KEY!) as RefreshTokenPayload;
}
