import * as PublicationService from "../services/publication.service";
import type { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { PublicationInput, PublicationSchema } from "@socia/shared";
import createHttpError from "http-errors";
import { deleteFromR2, uploadToR2 } from "../services/storage.service";

export const getPublications = asyncHandler(
  async (_req: Request, res: Response) => {
    const publications = await PublicationService.getPublications();
    return res.status(200).json({
      success: true,
      message: "Successfully fetch publications",
      data: publications,
    });
  },
);

export const getPublicationsByUsername = asyncHandler(
  async (req: Request<{ username: string }>, res: Response) => {
    const publications = await PublicationService.getPublicationsByUsername(
      req.params.username,
    );
    return res.status(200).json({
      success: true,
      message: "Successfully fetch publications",
      data: publications,
    });
  },
);

export const getPublication = asyncHandler(
  async (req: Request<{ publicationId: string }>, res: Response) => {
    const publication = await PublicationService.getPublication(
      req.params.publicationId,
    );
    return res.status(200).json({
      success: true,
      message: "Successfully get publication",
      data: publication,
    });
  },
);

export const createPublication = asyncHandler(
  async (req: Request<PublicationInput>, res: Response) => {
    if (!req.user || !req.user.userId) {
      throw createHttpError.Unauthorized("Unauthorized");
    }

    if (!req.file) {
      throw createHttpError.BadRequest("Image is required");
    }

    const validateData = PublicationSchema.safeParse(req.body);
    if (!validateData.success) {
      return res.status(400).json({
        success: false,
        errors: validateData.error.flatten(),
      });
    }

    const uploadImage = await uploadToR2(req.file);

    const publication = await PublicationService.createPublication(
      {
        ...validateData.data,
        image: uploadImage.url,
        imageKey: uploadImage.key,
      },
      req.user.userId,
    );

    return res.status(201).json({
      success: true,
      message: "Successfully create publication",
      data: publication,
    });
  },
);

export const updatePublication = asyncHandler(
  async (req: Request<{ publicationId: string }>, res: Response) => {
    if (!req.user || !req.user.userId) {
      throw createHttpError.Unauthorized("Unauthorized");
    }

    if (!req.file) {
      throw createHttpError.BadRequest("Image is required");
    }

    const oldPublication = await PublicationService.getPublication(
      req.params.publicationId,
    );

    if (!oldPublication) {
      throw createHttpError.NotFound("Not Found");
    }

    const validateData = PublicationSchema.safeParse(req.body);
    if (!validateData.success) {
      return res.status(400).json({
        success: false,
        errors: validateData.error.flatten(),
      });
    }

    const uploadImage = await uploadToR2(req.file);
    const publication = await PublicationService.updatePublication(
      req.params.publicationId,
      req.user.userId,
      {
        ...validateData.data,
        image: uploadImage.url,
        imageKey: uploadImage.key,
      },
    );

    if (req.file && oldPublication.imageKey) {
      await deleteFromR2(oldPublication.imageKey);
    }

    return res.status(200).json({
      success: true,
      message: "Successfully update publication",
      data: publication,
    });
  },
);

export const deletePublication = asyncHandler(
  async (req: Request<{ publicationId: string }>, res: Response) => {
    if (!req.user || !req.user.userId) {
      throw createHttpError.Unauthorized("Unauthorized");
    }

    const publication = await PublicationService.getPublication(
      req.params.publicationId,
    );

    if (!publication) throw createHttpError.NotFound("Not Found");

    await PublicationService.deletePublication(
      req.params.publicationId,
      req.user.userId,
    );

    if (publication.imageKey) {
      await deleteFromR2(publication.imageKey);
    }

    return res.status(200).json({
      success: true,
      message: "Successfully delete publication",
    });
  },
);
