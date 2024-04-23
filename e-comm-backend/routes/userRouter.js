const { registerHandler, loginHandler, accessTokenGeneratorHandler } = require("../routesHandlers/userHandler");

const router = require("express").Router();


router.post("/register",registerHandler)
router.post("/login",loginHandler)
router.post("/token",accessTokenGeneratorHandler);


module.exports = router;