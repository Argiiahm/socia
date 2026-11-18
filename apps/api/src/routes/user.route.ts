import { Router } from "express";
import { authentication } from "../middlewares/authentication.middleware";
import {
  CreateUser,
  DeleteUser,
  GetUser,
  GetUsers,
  UpdateUser,
} from "../controllers/user.controller";

const router = Router();

router.get("/users", GetUsers);
router.get("/user/:username", GetUser);
router.post("/user", CreateUser);
router.put("/user/:userId", authentication, UpdateUser);
router.delete("/user/:userId", authentication, DeleteUser);

export default router;
