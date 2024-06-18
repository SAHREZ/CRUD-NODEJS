const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();
const {
  getProducts,
  getProduct,
  deleteProduct,
  createProduct,
  updateProduct,
} = require("../controllers/product.controller");

router.get("/", getProducts);

router.get("/:id", getProduct);

router.post("/", createProduct);

// update a product
router.put("/:id", updateProduct);

// dlete a product
router.delete("/:id", deleteProduct);

module.exports = router;
