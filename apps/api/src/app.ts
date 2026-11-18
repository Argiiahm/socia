import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { CorsConfiguration } from "./constants/cors.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import AuthRoutes from "./routes/auth.route.js";
import ProductRoutes from "./routes/product.route.js";
import PublicationRoutes from "./routes/publication.route.js";
import ThreadRoutes from "./routes/thread.route.js";
import UserRoutes from "./routes/user.route.js";

const app = express();
app.use(cors(CorsConfiguration));
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", AuthRoutes);
app.use("/api/v1", ProductRoutes);
app.use("/api/v1", PublicationRoutes);
app.use("/api/v1", ThreadRoutes);
app.use("/api/v1", UserRoutes);

app.use(errorHandler);

export default app;
