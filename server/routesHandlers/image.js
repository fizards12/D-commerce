const {getImagePath} = require("../utils/image")
const fs = require("node:fs")
const readImage = async (req, res, next) => {
  try {
    if (!req.params.image) {
      res.status(400).send("<h1>Please enter right credentials!</h1>");
    }
    const fullPath = await getImagePath(req.params.image);
    return res.sendFile(fullPath);
  } catch (error) {
    next(err);
  }
};


module.exports = {readImage}