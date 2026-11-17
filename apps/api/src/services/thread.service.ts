import { ThreadInput } from "@socia/shared/schemas/thread.schema";
import { Prisma } from "../config/prisma";
import createHttpError from "http-errors";

export const getThreads = async () => {
  return await Prisma.threads.findMany({
    select: {
      id: true,
      content: true,
      includeContentType: true,
      createdAt: true,
      user: {
        select: {
          username: true,
        },
      },
      product: {
        select: {
          id: true,
          thumbnail: true,
          name: true,
          price: true,
        },
      },
      publication: {
        select: {
          id: true,
          image: true,
          title: true,
          content: true,
          user: {
            select: {
              username: true,
            },
          },
        },
      },
    },
  });
};

export const getThread = async (threadId: string) => {
  const thread = await Prisma.threads.findUnique({
    where: { id: threadId },
    select: {
      id: true,
      content: true,
      includeContentType: true,
      createdAt: true,
      user: {
        select: {
          username: true,
        },
      },
      product: {
        select: {
          id: true,
          thumbnail: true,
          name: true,
          price: true,
        },
      },
      publication: {
        select: {
          id: true,
          image: true,
          title: true,
          content: true,
          user: {
            select: {
              username: true,
            },
          },
        },
      },
    },
  });

  if (!thread) throw createHttpError.NotFound("Thread not found");

  return thread;
};

export const createThreads = async (
  data: ThreadInput,
  userId: string,
  productId?: string,
  publicationId?: string,
) => {
  const [product, publication] = await Promise.all([
    productId ? Prisma.products.findUnique({ where: { id: productId } }) : null,
    publicationId
      ? Prisma.publications.findUnique({ where: { id: publicationId } })
      : null,
  ]);

  if (productId && !product) {
    throw createHttpError.NotFound("Product Not Found");
  }

  if (publicationId && !publication) {
    throw createHttpError.NotFound("Publication Not Found");
  }

  const includeContentType = [
    ...(productId ? ["PRODUCT" as const] : []),
    ...(publicationId ? ["PUBLICATION" as const] : []),
  ];

  return await Prisma.threads.create({
    data: {
      ...data,
      userId,
      productId: productId ?? null,
      publicationId: publicationId ?? null,
      includeContentType,
    },
  });
};

export const deleteThreads = async (threadId: string, userId: string) => {
  const thread = await Prisma.threads.findFirst({
    where: { id: threadId },
  });

  if (!thread) throw createHttpError.NotFound("Not Found");
  if (thread.userId !== userId) {
    throw createHttpError.NotFound("Not Found");
  }

  return await Prisma.threads.delete({
    where: { id: threadId },
  });
};
