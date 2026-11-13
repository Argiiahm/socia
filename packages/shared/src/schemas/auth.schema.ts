import { z } from "zod";

export const RegisterSchema = z.object({
  fullname: z
    .string()
    .min(1, "Fullname is required")
    .max(100, "Fullname must be less than 100 characters"),
  username: z
    .string()
    .min(1, "Username is required")
    .max(30, "Username must be less than 30 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export type RegisterInput = z.infer<typeof RegisterSchema>;
export type LoginInput = z.infer<typeof LoginSchema>;
