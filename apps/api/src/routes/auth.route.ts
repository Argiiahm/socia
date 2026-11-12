import { Router } from "express";
import { Register, Login, Refresh } from "../controllers/auth.controller.js";

const router = Router();

router.post("/auth/register", Register);
router.post("/auth/login", Login);
router.post("/auth/refresh", Refresh);

export default router;
