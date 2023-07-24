import express from "express";
import { getAllProducts } from "./get.allProducts.js";

const router = express.Router();

router.use(getAllProducts);

export default router;
