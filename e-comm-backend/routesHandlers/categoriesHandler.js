const Category = require("../models/categories");

const getAll = async (req, res, next) => {
  try {
    const data = (await Category.find({})).map(cat=>cat.name);
    res.send(data);
  } catch (err) {
    next(err);
  }
};

const getCategoryProducts = async (req,res,next)=>{
    try {
        const categoryName = req.params.category;
        const products = (await Category.findOne({name:categoryName}).populate("products",{},"Product")).products;
        res.send(products);
    } catch (error) {
        next(error);
    }
}

module.exports = {getAll,getCategoryProducts}
