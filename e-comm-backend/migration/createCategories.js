const mongoose = require("mongoose");
const Category = require("../models/categories");

mongoose
  .connect(
    `mongodb+srv://mahmoud:164253@e-comm.h88ttis.mongodb.net/ecomm
  ?retryWrites=true&w=majority&appName=e-comm`
  )
  .then(async() => {
    console.log("Connected!");
    const phonesCategory = new Category({
      name:"phones",
      description:"this is phones category",
      products:[]
    })
    const watchesCategory = new Category({
      name:"watches",
      description:"this is watches category",
      products:[]
    })

    await phonesCategory.save().catch((err)=>console.log(err))
    await watchesCategory.save().catch((err)=>console.log(err))

  })
  .catch(() => {
    console.log("Couldn't Connect!");
    process.exit(1);
  });

  mongoose.connection.close().then(()=>{
    console.log("Connection Closed")
  });