const {
  isObjectIdOrHexString,
  Schema,
  default: mongoose,
} = require("mongoose");
const Cart = require("../models/cart");

const getCartProducts = async (req, res, next) => {
  try {
    const cart = await Cart.find({}).populate({
      path: "product",
      model: "Product",
    });
    return res.json(cart);
  } catch (error) {
    next(error);
  }
};

const addProductToCart = async (req, res, next) => {
  try {
    if (!req.body.id || !isObjectIdOrHexString(req.body.id)) {
      res.status(400).send({ message: "Please Enter Valid Credentials" });
    }
    const id = new mongoose.Types.ObjectId(req.body.id);

    const cartExist = await Cart.findOne({ product: id }).populate({
      path: "product",
      model: "Product",
    });
    if (cartExist) {
      return res.status(400).send({message: "Already Added"});
    }
    const newCartProduct = new Cart({
      amount: 1,
      product: id,
    });
    const result = await newCartProduct.save();
    res.status(201).json({
      item: result,
      message: "Product Has Been Added To The Cart Successfully",
    });
  } catch (error) {
    next(error);
  }
};

const updateCartProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id || !isObjectIdOrHexString(id) || !req.body) {
      return res
        .status(400)
        .send({ message: "Please enter Valid credentials" });
    }
    const updatedCart = await Cart.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(id) },
      { amount: req.body.amount },
      { new: true }
    );
    if (!updatedCart) {
      return res
        .status(404)
        .send({ message: "No Such Cart Product", product: false });
    }
    return res.status(201).json(updatedCart);
  } catch (error) {
    next(error);
  }
};

const removeFromCart = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id || !isObjectIdOrHexString(id) || !req.body) {
      return res
        .status(400)
        .send({ message: "Please enter Valid credentials" });
    }
    const objectId = new mongoose.Types.ObjectId(id);
    const result = await Cart.findByIdAndDelete(objectId);
    return res.status(204).json({
      data: result,
      message: "Product Has Been Deleted Successfully from Cart",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCartProducts,
  updateCartProduct,
  addProductToCart,
  removeFromCart,
};
