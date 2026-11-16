import { z } from "zod";

export const PublicationSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(200, "Content minimum 200 Character"),
});

export type PublicationInput = z.infer<typeof PublicationSchema>;
