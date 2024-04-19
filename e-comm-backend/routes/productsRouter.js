const productRouter = require("express").Router();
const { getAll, addProductHandler, getById } = require("../routesHandlers/productsHandler");
const { uploadImageMiddleware } = require("../utils/image");

const upload = uploadImageMiddleware();

productRouter.get("/", getAll);
productRouter.get("/:id", getById);

productRouter.post("/", upload.single("image"), addProductHandler);


module.exports = productRouter;
