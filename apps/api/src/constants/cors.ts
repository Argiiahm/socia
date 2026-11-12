import type { CorsOptions } from "cors";

export const CorsConfiguration: CorsOptions = {
  origin: process.env.WEB_ORIGIN,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  maxAge: 86400,
};
