const { Schema, default: mongoose, Types } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "please Enter your full name."],
    min: [6, "Enter your full name with at least 6 characters."],
    max: [6, "This is Too long name, please provide just first and last name."],
  },
  username: {
    type: String,
    required: [true, "username is required field."],
    unique: [true, "This username already exists."],
    min: [6, "Enter a username with at least 6 characters."],
    max: [
      20,
      "This is Too long username to remember, please enter shorter one.",
    ],
  },
  email: {
    type: String,
    required: [true, "Email is required field."],
    unique: [true, "This Email already exists."],
    validate: {
      validator: function (email) {
        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return re.test(email);
      },
      message: "Please enter valid Email."
    },
  },
  password: {
    type: String,
    required: [true, "Password must be set"],
  },
  refreshToken: {
    type: String,
  },
  cartItems: [{
    type: Schema.Types.ObjectId,
    ref: "Cart"
  }]
  // Orders:[{
  //     type: Types.ObjectId,
  //     ref: "Order"
  // }]
});

userSchema.set("toObject", {
  transform: (doc, ret) => {
    ret.id = doc._id.toString();
    delete ret._id;
    delete ret.__v;
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
