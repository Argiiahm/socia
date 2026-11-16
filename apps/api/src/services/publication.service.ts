import { PublicationInput } from "@socia/shared";
import { Prisma } from "../config/prisma";
import createHttpError from "http-errors";

type CreatePublicationData = PublicationInput & {
  image: string;
  imageKey: string;
};

type UpdatePublicationData = Partial<PublicationInput> & {
  image?: string;
  imageKey?: string;
};

export const getPublications = async () => {
  return Prisma.publications.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getPublication = async (publicationId: string) => {
  const publication = await Prisma.publications.findUnique({
    where: { id: publicationId },
  });

  if (!publication) {
    throw createHttpError.NotFound("Publication not found");
  }

  return publication;
};

export const createPublication = async (
  data: CreatePublicationData,
  userId: string,
) => {
  return Prisma.publications.create({
    data: {
      ...data,
      userId,
    },
  });
};

export const updatePublication = async (
  publicationId: string,
  userId: string,
  data: UpdatePublicationData,
) => {
  const publication = await Prisma.publications.findUnique({
    where: { id: publicationId },
  });

  if (!publication || publication.userId !== userId) {
    throw createHttpError.NotFound("Publication not found");
  }

  return Prisma.publications.update({
    where: { id: publicationId },
    data,
  });
};

export const deletePublication = async (
  publicationId: string,
  userId: string,
) => {
  const publication = await Prisma.publications.findUnique({
    where: { id: publicationId },
  });

  if (!publication || publication.userId !== userId) {
    throw createHttpError.NotFound("Publication not found");
  }

  return Prisma.publications.delete({
    where: { id: publicationId },
  });
};
