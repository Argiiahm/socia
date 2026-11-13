import { Router } from "express";
import { authentication } from "../middlewares/authentication.middleware";
import {
  CreateProduct,
  DeleteProduct,
  GetProducts,
  UpdateProduct,
} from "../controllers/product.controller";

const router = Router();

router.get("/products", GetProducts);
router.post("/product", authentication, CreateProduct);
router.put("/product/:productId", authentication, UpdateProduct);
router.delete("/product/:productId", authentication, DeleteProduct);

export default router;
