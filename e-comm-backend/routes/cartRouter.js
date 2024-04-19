const express = require("express");
const Cart = require("../models/cart");
const {
  getCartProducts,
  updateCartProduct,
  addProductToCart,
  removeFromCart,
} = require("../routesHandlers/cartHandler");
const cartRouter = express.Router();

cartRouter.get("/", getCartProducts);
cartRouter.post("/", addProductToCart);
cartRouter.patch("/:id", updateCartProduct);
cartRouter.delete("/:id", removeFromCart);
module.exports = cartRouter;
