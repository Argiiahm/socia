import { Router } from "express";
import {
  createPublication,
  deletePublication,
  getPublication,
  getPublications,
  getPublicationsByUsername,
  updatePublication,
} from "../controllers/publication.controller";
import { authentication } from "../middlewares/authentication.middleware";
import { uploadImage } from "../middlewares/upload.middleware";

const router = Router();

router.get("/publications", getPublications);
router.get("/user/:username/publications", getPublicationsByUsername);
router.get("/publication/:publicationId", getPublication);
router.post(
  "/publication",
  authentication,
  uploadImage.single("image"),
  createPublication,
);
router.put(
  "/publication/:publicationId",
  authentication,
  uploadImage.single("image"),
  updatePublication,
);
router.delete("/publication/:publicationId", authentication, deletePublication);

export default router;
