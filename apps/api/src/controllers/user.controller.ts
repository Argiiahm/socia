import * as UserService from "../services/user.service.js";
import type { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import createHttpError from "http-errors";
import {
  RegisterInput,
  RegisterSchema,
  UpdateUserInput,
  UpdateUserSchema,
} from "@socia/shared";

export const GetUsers = asyncHandler(
  async (_req: Request, res: Response) => {
    const users = await UserService.GetUsers();
    return res.status(200).json({
      success: true,
      message: "Successfully Get Users",
      data: users,
    });
  },
);

export const GetUser = asyncHandler(
  async (req: Request<{ username: string }>, res: Response) => {
    const user = await UserService.GetUser(req.params.username);
    return res.status(200).json({
      success: true,
      message: "Successfully Get User",
      data: user,
    });
  },
);

export const CreateUser = asyncHandler(
  async (req: Request<{}, {}, RegisterInput>, res: Response) => {
    const validateData = RegisterSchema.safeParse(req.body);
    if (!validateData.success) {
      return res.status(400).json({
        success: false,
        errors: validateData.error.flatten(),
      });
    }

    const user = await UserService.CreateUser(validateData.data);
    return res.status(201).json({
      success: true,
      message: "Successfully Create User",
      data: user,
    });
  },
);

export const UpdateUser = asyncHandler(
  async (req: Request<{ userId: string }, {}, UpdateUserInput>, res: Response) => {
    if (!req.user || !req.user.userId) {
      throw createHttpError.Unauthorized("Unauthorization");
    }

    const validateData = UpdateUserSchema.safeParse(req.body);
    if (!validateData.success) {
      return res.status(400).json({
        success: false,
        errors: validateData.error.flatten(),
      });
    }

    const user = await UserService.UpdateUser(
      req.params.userId,
      req.user.userId,
      validateData.data,
    );

    return res.status(200).json({
      success: true,
      message: "Successfully Update User",
      data: user,
    });
  },
);

export const DeleteUser = asyncHandler(
  async (req: Request<{ userId: string }>, res: Response) => {
    if (!req.user || !req.user.userId) {
      throw createHttpError.Unauthorized("Unauthorization");
    }

    await UserService.DeleteUser(req.params.userId, req.user.userId);
    return res.status(200).json({
      success: true,
      message: "Successfully Delete User",
    });
  },
);
