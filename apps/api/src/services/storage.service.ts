import { PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { randomUUID } from "crypto";

import { r2, R2_BUCKET, R2_PUBLIC_URL } from "../config/r2";
import path from "path";

export const uploadToR2 = async (file: Express.Multer.File) => {
  const extension = path.extname(file.originalname).toLowerCase();
  const key = `publications/${randomUUID()}${extension}`;

  await r2.send(
    new PutObjectCommand({
      Bucket: R2_BUCKET,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
    }),
  );

  return { key, url: `${R2_PUBLIC_URL}/${key}` };
};

export const deleteFromR2 = async (key: string) => {
  await r2.send(
    new DeleteObjectCommand({
      Bucket: R2_BUCKET,
      Key: key,
    }),
  );
};
