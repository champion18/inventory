const express = require("express");
const {
  deleteCategory,
  updateCategory,
  createCategory,
  getAllCategories,
} = require("../controllers/categoryController");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();

router.route("/categories").get(getAllCategories);

router
  .route("/category/:id")
  .put(isAuthenticatedUser, updateCategory)
  .delete(isAuthenticatedUser, deleteCategory);

router.route("/category/new").post(isAuthenticatedUser, createCategory);

module.exports = router;
