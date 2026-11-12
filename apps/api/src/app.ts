import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { CorsConfiguration } from "./constants/cors.js";
import AuthRoutes from "./routes/auth.route.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();
app.use(cors(CorsConfiguration));
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", AuthRoutes);

app.use(errorHandler);

export default app;
