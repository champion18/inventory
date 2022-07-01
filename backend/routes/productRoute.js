const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
  getAdminProducts,
  getProductDetails,
} = require("../controllers/productController");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();

router.route("/products").get(getAdminProducts);

router.route("/product/new").post(createProduct);

router.route("/products/:category").get(getProductsByCategory);

router.route("/product/:id").put(updateProduct).delete(deleteProduct);

router.route("/product/:id").get(getProductDetails);

module.exports = router;
