import { z } from "zod";

export const ProductSchema = z.object({
  name: z
    .string()
    .min(1, "ProductName is Required")
    .max(100, "ProductName maximum 100 Character"),
  price: z.coerce.number().nonnegative(),
  thumbnail: z.string().nullable(),
  images: z.array(z.string()),
  description: z.string().min(1, "Description is Required"),
  features: z.array(z.string()),
});

export type ProductInput = z.infer<typeof ProductSchema>;
