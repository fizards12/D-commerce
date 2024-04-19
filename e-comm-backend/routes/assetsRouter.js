const { readImage } = require("../routesHandlers/image");

const assetsRouter = require("express").Router();

assetsRouter.get("/?:image", readImage);

module.exports = assetsRouter;
