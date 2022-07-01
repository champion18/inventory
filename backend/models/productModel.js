// const { truncate } = require("fs/promises");
const mongoose = require("mongoose");
// const Category = require("../models/catModel");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
    trim: true,
  },

  price: {
    type: Number,
    required: [true, "Please enter product price"],
  },

  category: {
    type: String,
    ref: "Category",
    required: true,
  },

  stock: {
    type: Number,
    required: [true, "Please enter product stock"],
    maxlength: [4, "Stock cannot exceed 4 characters"],
    default: 1,
  },
});

module.exports = mongoose.model("Product", productSchema);
