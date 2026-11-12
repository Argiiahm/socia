import * as AuthService from "../services/auth.service.js";
import type { Request, Response } from "express";
import { CookieConfiguration } from "../constants/cookie.js";
import {
  LoginInput,
  LoginSchema,
  RegisterInput,
  RegisterSchema,
} from "../schemas/auth.schema";
import { asyncHandler } from "../utils/asyncHandler";

export const Register = asyncHandler(
  async (req: Request<object, object, RegisterInput>, res: Response) => {
    const validateData = RegisterSchema.safeParse(req.body);
    if (!validateData.success) {
      return res.status(400).json({
        success: false,
        errors: validateData.error.flatten(),
      });
    }

    const user = await AuthService.Register(validateData.data);
    return res.status(201).json({
      success: true,
      message: "Successfully created account.",
      data: user,
    });
  },
);

export const Login = asyncHandler(
  async (req: Request<object, object, LoginInput>, res: Response) => {
    const validateData = LoginSchema.safeParse(req.body);
    if (!validateData.success) {
      return res.status(400).json({
        success: false,
        errors: validateData.error.flatten(),
      });
    }

    const result = await AuthService.Login(validateData.data);

    console.log(result);

    res.cookie("refreshToken", result.refreshToken, CookieConfiguration);
    return res.status(200).json({
      success: true,
      message: "Login Successfully",
      data: {
        accessToken: result.accessToken,
      },
    });
  },
);

export const Refresh = async (req: Request, res: Response) => {
  const refreshToken = req.cookies.refreshToken;
  const result = await AuthService.Refresh(refreshToken);

  return res.status(200).json({
    success: true,
    data: {
      accessToken: result.accessToken,
    },
  });
};
