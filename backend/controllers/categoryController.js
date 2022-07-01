const Category = require("../models/catModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Product = require("../models/productModel");

// Create Category
exports.createCategory = async (req, res, next) => {
  const cat = await Category.create(req.body);
  res.status(201).json({
    success: true,
    cat,
  });
};

// Get all categories
exports.getAllCategories = catchAsyncErrors(async (req, res, next) => {
  const cats = await Category.find();
  res.status(200).json({
    message: "working",
    success: true,
    cats,
  });
});

// Del Category
exports.deleteCategory = catchAsyncErrors(async (req, res, next) => {
  let category = await Category.findById(req.params.id);
  let { name } = category;
  if (!category) {
    return next(new ErrorHandler(`${req.params.category} not found`, 404));
  }

  const products = await Product.find({ category: name });

  if (!products) {
    return next(
      new ErrorHandler(`Products with ${req.params.category} not found`, 404)
    );
  }

  products.forEach(async (product) => {
    await product.remove();
  });

  await category.remove();

  res.status(200).json({
    success: true,
    message: "Category deletion successful",
  });
});

// Update Category
exports.updateCategory = catchAsyncErrors(async (req, res, next) => {
  let category = await Category.findById(req.params.id);

  if (!category) {
    return next(new ErrorHandler("Category not found", 404));
  }

  category = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    category,
  });
});
