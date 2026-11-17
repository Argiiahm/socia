import { z } from "zod";

export const ThreadSchema = z.object({
  content: z.string().min(1, "Content is Required"),
  includeContentType: z.array(z.enum(["PRODUCT", "PUBLICATION"])).default([]),
  productId: z.string().optional(),
  publicationId: z.string().optional(),
});

export type ThreadInput = z.infer<typeof ThreadSchema>;
