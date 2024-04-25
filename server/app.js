const dotenv = require("dotenv");
dotenv.config();
const PORT = 3000;
const express = require("express");
const mongoose = require("mongoose");
const Category = require("./models/categories");
const productsRouter = require("./routes/productsRouter");
const assetsRouter = require("./routes/assetsRouter");
const userRouter = require("./routes/userRouter");
const cors = require("cors");
const categoriesRouter = require("./routes/categoriesRouter");
const cartRouter = require("./routes/cartRouter");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

mongoose.set("strictQuery", false);
mongoose
  .connect(
    `mongodb+srv://mahmoud:164253@e-comm.h88ttis.mongodb.net/ecomm
  ?retryWrites=true&w=majority&appName=e-comm`
  )
  .then(() => {
    console.log("Connected!");
  })
  .catch(() => {
    console.log("Couldn't Connect!");
    process.exit(1);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/categories",categoriesRouter)
app.use("/api/products", productsRouter);
app.use("/api/cart", cartRouter);
app.use("/api/assets", assetsRouter);
app.use("/api/users",userRouter);

const unknownEndPoints = (req,res)=>{
  res.status(404).send({message: "Error: Check your API route!"})
}

app.use(unknownEndPoints);

app.listen(PORT, () => {
  console.log("Listening to 3000");
});
