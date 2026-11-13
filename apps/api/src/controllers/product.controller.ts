import * as ProductService from "../services/product.service";
import type { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import createHttpError from "http-errors";
import { ProductInput, ProductSchema } from "@socia/shared";

export const GetProducts = asyncHandler(
  async (_req: Request, res: Response) => {
    const product = await ProductService.GetProducts();
    return res.status(200).json({
      success: true,
      message: "Successfully Get Products",
      product: product,
    });
  },
);

export const CreateProduct = asyncHandler(
  async (req: Request<{}, {}, ProductInput>, res: Response) => {
    if (!req.user || !req.user.userId) {
      throw createHttpError.Unauthorized("Unauthorization");
    }
    const userId = req.user.userId;

    const validateData = ProductSchema.safeParse(req.body);
    if (!validateData.success) {
      return res.status(400).json({
        success: false,
        errors: validateData.error.flatten(),
      });
    }

    const product = await ProductService.CreateProduct(
      validateData.data,
      userId,
    );

    return res.status(201).json({
      success: true,
      message: "Successfully Create Product",
      product: product,
    });
  },
);

export const UpdateProduct = asyncHandler(
  async (req: Request<{ productId: string }>, res: Response) => {
    if (!req.user || !req.user.userId) {
      throw createHttpError.Unauthorized("Unauthorization");
    }

    const userId = req.user.userId;
    const validateData = ProductSchema.safeParse(req.body);
    if (!validateData.success) {
      return res.status(400).json({
        success: false,
        errors: validateData.error.flatten(),
      });
    }

    const product = await ProductService.UpdateProduct(
      req.params.productId,
      userId,
      validateData.data,
    );

    return res.status(200).json({
      success: true,
      message: "Successfully Update Product",
      product: product,
    });
  },
);

export const DeleteProduct = asyncHandler(
  async (req: Request<{ productId: string }>, res: Response) => {
    if (!req.user || !req.user.userId) {
      throw createHttpError.Unauthorized("Unauthorization");
    }
    const userId = req.user.userId;
    await ProductService.DeleteProduct(req.params.productId, userId);

    return res.status(200).json({
      success: true,
      message: "Successfully Delete Product",
    });
  },
);
