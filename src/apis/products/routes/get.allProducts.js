import express from "express";
import { Product } from "../models/product.js";
import { ProductService } from "../service.js";

const router = express.Router();

const getAllProductsAction = (_productService) => async (req, res, next) => {
  try {
    const products = await _productService.getAllProductsBy(req.query);

    res.status(200).json({
      status: "success",
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllProducts = router.get(
  "/",
  getAllProductsAction(new ProductService(Product))
);
