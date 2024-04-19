const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  description: {
    type: String,
    required: true,
  },
  products:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  }]
});

categorySchema.set("toObject", {
  transform: (doc, ret) => {
    ret.id = doc._id.toString();
    delete ret.__v;
    delete ret._id;
    return ret;
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
