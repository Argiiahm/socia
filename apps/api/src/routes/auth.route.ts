import { Router } from "express";
import {
  Register,
  Login,
  Refresh,
  Logout,
} from "../controllers/auth.controller.js";

const router = Router();

router.post("/auth/register", Register);
router.post("/auth/login", Login);
router.post("/auth/refresh", Refresh);
router.post("/auth/logout", Logout);

export default router;
