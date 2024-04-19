const categoriesRouter = require("express").Router();
const Category = require("../models/categories");
const { getCategoryProducts, getAll } = require("../routesHandlers/categoriesHandler");

categoriesRouter.get("/", getAll);
categoriesRouter.get("/:category", getCategoryProducts);

categoriesRouter.post("/", async (req, res, next) => {
  try {
    const category = req.body;
    const result = await Category.findOne({ name: category.name });
    if (!!result) {
      return res.status(302).send("Category already exists");
    }
    const newCategory = new Category({...category,products:[]});
    const returnedId = await newCategory.save();
    return res.status(201).json({ id: returnedId.id });
  } catch (err) {
    next(err);
  }
});


module.exports = categoriesRouter;