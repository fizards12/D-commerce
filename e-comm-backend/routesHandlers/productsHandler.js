const { default: mongoose, isObjectIdOrHexString, isValidObjectId } = require("mongoose");
const Category = require("../models/categories");
const Product = require("../models/products");
const { validateForm } = require("../utils/validation");

const getAll = async (req, res, next) => {
  try {
    const data = await Product.find({}).populate("category", "name");

    if (!data) {
      return res.status(404).json({ message: "No products Found." });
    }
    return res.json(data);
  } catch (error) {
    next(error);
  }
  next();
};

const getById = async (req, res, next) => {
  try {
    if(!isObjectIdOrHexString(req.params.id)){
        return res.status(400).send("Wrong Product Id");
    }
    const id = new mongoose.Types.ObjectId.createFromHexString(req.params.id);
    const products = await Product.findById(id).populate(
      "categories",
      "name",
      "Category"
    );
    res.send(products);
  } catch (error) {
    next(error);
  }
};

const addProductHandler = async (req, res, next) => {
  try {
    const formData = req.body;
    if (!formData && validateForm(formData)) {
      return res.status(400).send("Please Enter Valid Values");
    }
    const category = await Category.findOne({ name: formData.category });
    if (!category || !category.id) {
      return res.status(400).send("Please Enter Valid Category");
    }

    const product = {
      ...formData,
      category: category.id,
      image: `http://localhost:3000/api/assets/${req.file.filename}`,
    };
    const newProduct = new Product(product);
    const returnedProduct = await newProduct.save();
    category.products.push(returnedProduct.id);
    const result = await category.save();
    console.log(result);
    return res.send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = { getAll, addProductHandler, getById };
