import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import { Prisma } from "../config/prisma.js";
import { LoginInput, RegisterInput } from "../schemas/auth.schema.js";
import { randomUUID } from "crypto";
import {
  createAccessToken,
  createRefreshToken,
  verifyRefreshToken,
} from "../utils/jwt";

export const Register = async (data: RegisterInput) => {
  const [existUsername, existEmail] = await Promise.all([
    Prisma.user.findUnique({ where: { username: data.username } }),
    Prisma.user.findUnique({ where: { email: data.email } }),
  ]);

  if (existUsername) throw createHttpError.Conflict("Username Already Exist");
  if (existEmail) throw createHttpError.Conflict("Email Already Exist");

  const hashPassword = await bcrypt.hash(data.password, 10);
  const user = await Prisma.user.create({
    data: {
      ...data,
      password: hashPassword,
    },
    select: {
      id: true,
      fullname: true,
      username: true,
      email: true,
      role: true,
    },
  });

  return user;
};

export const Login = async (data: LoginInput) => {
  const user = await Prisma.user.findFirst({ where: { email: data.email } });
  if (!user) throw createHttpError.Unauthorized("Invalid Credentials");

  const validPassword = await bcrypt.compare(data.password, user.password);
  if (!validPassword) throw createHttpError.Unauthorized("Invalid Credentials");

  const tokenId = randomUUID();
  // createAccessToken
  const accessToken = createAccessToken({
    userId: user.id,
    email: user.email,
    role: user.role,
  });

  // createRefreshToken
  const refreshToken = createRefreshToken({
    userId: user.id,
    tokenId: tokenId,
  });

  const hashRefreshToken = await bcrypt.hash(refreshToken, 10);
  await Prisma.refreshToken.create({
    data: {
      id: tokenId,
      userId: user.id,
      tokenHash: hashRefreshToken,
      expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    },
  });

  return {
    accessToken,
    refreshToken,
  };
};

export const Refresh = async (refreshToken: string) => {
  if (!refreshToken) {
    throw createHttpError.Unauthorized("RefreshToken Required.");
  }

  const payload = verifyRefreshToken(refreshToken);
  const session = await Prisma.refreshToken.findUnique({
    where: { id: payload.tokenId },
    include: { user: true },
  });

  if (!session) throw createHttpError.Unauthorized("Invalid RefreshToken");

  if (session.revokedAt) {
    throw createHttpError.Unauthorized("Invalid Revoked");
  }

  if (session.expiresAt < new Date()) {
    throw createHttpError.Unauthorized("RefreshToken Expires");
  }

  const valid = await bcrypt.compare(refreshToken, session.tokenHash);
  if (!valid) throw createHttpError.Unauthorized("Invalid RefreshToken");

  const accessToken = createAccessToken({
    userId: session.user.id,
    email: session.user.email,
    role: session.user.role,
  });

  return {
    accessToken,
    refreshToken,
  };
};

export const Logout = async (refreshToken: string) => {
  if (!refreshToken) {
    throw createHttpError.Unauthorized("RefreshToken Required.");
  }

  const payload = verifyRefreshToken(refreshToken);
  const session = await Prisma.refreshToken.findUnique({
    where: { id: payload.tokenId },
  });

  if (!session) throw createHttpError.Unauthorized("Invalid RefreshToken");

  if (session.revokedAt) {
    throw createHttpError.Unauthorized("Invalid Revoked");
  }

  // Revoked Session
  await Prisma.refreshToken.update({
    where: { id: session.id },
    data: { expiresAt: new Date() },
  });

  return;
};
