const mongoose = require("mongoose");

// lassi, softdrinks, juice, soda, milkshake
// property - caffeinated

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter category name."],
    trim: true,
  },

  caffeinated: {
    type: Boolean,
    required: [true, "Please enter true or false."],
  },
});

module.exports = mongoose.model("Category", categorySchema);
