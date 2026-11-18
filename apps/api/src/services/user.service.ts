import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import { Prisma } from "../config/prisma.js";
import { RegisterInput, UpdateUserInput } from "@socia/shared";

const UserSelect = {
  id: true,
  fullname: true,
  username: true,
  role: true,
  createdAt: true,
} as const;

export const GetUsers = async () => {
  return await Prisma.user.findMany({
    select: UserSelect,
  });
};

export const GetUser = async (username: string) => {
  const user = await Prisma.user.findUnique({
    where: { username },
    select: UserSelect,
  });

  if (!user) throw createHttpError.NotFound("User Not Found");

  return user;
};

export const CreateUser = async (data: RegisterInput) => {
  const [existUsername, existEmail] = await Promise.all([
    Prisma.user.findUnique({ where: { username: data.username } }),
    Prisma.user.findUnique({ where: { email: data.email } }),
  ]);

  if (existUsername) throw createHttpError.Conflict("Username Already Exist");
  if (existEmail) throw createHttpError.Conflict("Email Already Exist");

  const hashPassword = await bcrypt.hash(data.password, 10);
  return await Prisma.user.create({
    data: {
      ...data,
      password: hashPassword,
    },
    select: UserSelect,
  });
};

export const UpdateUser = async (
  userId: string,
  currentUserId: string,
  data: UpdateUserInput,
) => {
  if (userId !== currentUserId) {
    throw createHttpError.Forbidden("Forbidden");
  }

  const user = await Prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw createHttpError.NotFound("User Not Found");

  const [existUsername, existEmail] = await Promise.all([
    data.username
      ? Prisma.user.findUnique({ where: { username: data.username } })
      : null,
    data.email
      ? Prisma.user.findUnique({ where: { email: data.email } })
      : null,
  ]);

  if (existUsername && existUsername.id !== userId) {
    throw createHttpError.Conflict("Username Already Exist");
  }

  if (existEmail && existEmail.id !== userId) {
    throw createHttpError.Conflict("Email Already Exist");
  }

  return await Prisma.user.update({
    where: { id: userId },
    data,
    select: UserSelect,
  });
};

export const DeleteUser = async (userId: string, currentUserId: string) => {
  if (userId !== currentUserId) {
    throw createHttpError.Forbidden("Forbidden");
  }

  const user = await Prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw createHttpError.NotFound("User Not Found");

  return await Prisma.user.delete({
    where: { id: userId },
    select: UserSelect,
  });
};
