import { Router } from "express";
import {
  createThread,
  deleteThread,
  getThread,
  getThreads,
} from "../controllers/thread.controller";
import { authentication } from "../middlewares/authentication.middleware";

const router = Router();

router.get("/threads", getThreads);
router.get("/thread/:threadId", getThread);
router.post("/thread", authentication, createThread);
router.delete("/thread/:id", authentication, deleteThread);

export default router;
