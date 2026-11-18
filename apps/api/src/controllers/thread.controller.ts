import * as ThreadService from "../services/thread.service";
import type { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import createHttpError from "http-errors";
import { ThreadInput, ThreadSchema } from "@socia/shared/schemas/thread.schema";

export const getThreads = asyncHandler(async (_req: Request, res: Response) => {
  const threads = await ThreadService.getThreads();
  return res.status(200).json({
    success: true,
    message: "Successfully Fetch Threads",
    data: threads,
  });
});

export const getThreadsByUsername = asyncHandler(
  async (req: Request<{ username: string }>, res: Response) => {
    const threads = await ThreadService.getThreadsByUsername(
      req.params.username,
    );
    return res.status(200).json({
      success: true,
      message: "Successfully Fetch Threads",
      data: threads,
    });
  },
);

export const getThread = asyncHandler(
  async (req: Request<{ threadId: string }>, res: Response) => {
    const thread = await ThreadService.getThread(req.params.threadId);
    return res.status(200).json({
      success: true,
      message: "Successfully Fetch Thread",
      data: thread,
    });
  },
);

export const createThread = asyncHandler(
  async (req: Request<ThreadInput>, res: Response) => {
    if (!req.user || !req.user.userId) {
      throw createHttpError.Unauthorized("Unauthorization");
    }

    const validateData = ThreadSchema.safeParse(req.body);
    if (!validateData.success) {
      return res.status(400).json({
        success: false,
        errors: validateData.error.flatten(),
      });
    }

    const { productId, publicationId } = validateData.data;

    const thread = await ThreadService.createThreads(
      validateData.data,
      req.user.userId,
      productId,
      publicationId,
    );

    return res.status(201).json({
      success: true,
      message: "Successfully Create Thread",
      data: thread,
    });
  },
);

export const deleteThread = asyncHandler(
  async (req: Request<{ threadId: string }>, res: Response) => {
    if (!req.user || !req.user.userId) {
      throw createHttpError.Unauthorized("Unauthorization");
    }

    await ThreadService.deleteThreads(req.params.threadId, req.user.userId);
    return res.status(200).json({
      success: true,
      message: "Successfully Delete Thread",
    });
  },
);
