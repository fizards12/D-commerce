const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  }
});

cartSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = doc._id.toString();
    delete ret.__v;
    delete ret._id;
  },
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
