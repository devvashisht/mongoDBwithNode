const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  password: {
    type: "String",
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password can not contain password");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be +ve");
      }
    },
  },
});
const me = new User({
  name: "dffss",
  email: "DEVE@gmail.com  ",
  password: "     sfdfsdfa!@#! ",
});

me.save()
  .then((res) => {
    // console.log("doucment save in task-manager-api db", me, res);
  })
  .catch((error) => {
    console.log("error", error);
  });
module.exports = User;
