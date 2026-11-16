import { PublicationSchema } from "@socia/shared";
import { z } from "zod";

export const CreatePublicationSchema = PublicationSchema.extend({
  image: z
    .custom<Express.Multer.File>(
      (file) => file !== null && typeof file === "object" && "buffer" in file,
      "Image is required",
    )
    .refine(
      (file) =>
        ["image/jpeg", "image/png", "image/webp"].includes(file.mimetype),
      "Invalid image format",
    )
    .refine(
      (file) => file.size <= 2 * 1024 * 1024,
      "Maximum image size is 2MB",
    ),
});
