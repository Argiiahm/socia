import createHttpError from "http-errors";
import { Prisma } from "../config/prisma.js";
import { ProductInput } from "../schemas/product.schema.js";

export const GetProducts = async () => {
  return await Prisma.products.findMany({
    select: {
      id: true,
      thumbnail: true,
      name: true,
      description: true,
      price: true,
      images: true,
      features: true,
      user: {
        select: {
          id: true,
          username: true,
        },
      },
    },
  });
};

export const CreateProduct = async (data: ProductInput, userId: string) => {
  if (!userId) throw createHttpError.Unauthorized("Unauthorization");

  return await Prisma.products.create({
    data: {
      ...data,
      userId,
    },
  });
};

export const UpdateProduct = async (
  productId: string,
  userId: string,
  data: ProductInput,
) => {
  const product = await Prisma.products.findFirst({
    where: { id: productId },
  });

  if (!product) throw createHttpError.NotFound("Product Not Found");
  if (product.userId !== userId)
    throw createHttpError.NotFound("Product Not Found");

  return await Prisma.products.update({
    where: { id: productId },
    data: {
      ...data,
    },
  });
};

export const DeleteProduct = async (productId: string, userId: string) => {
  const product = await Prisma.products.findFirst({ where: { id: productId } });

  if (!product) throw createHttpError.NotFound("Product Not Found");
  if (product.userId !== userId)
    throw createHttpError.NotFound("Product Not Found");

  return await Prisma.products.delete({
    where: { id: productId },
  });
};
