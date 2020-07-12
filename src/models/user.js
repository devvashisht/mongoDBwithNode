const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Task = require("./tasks");

const userSchema = new mongoose.Schema(
  {
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
      unique: true,
      validatse(value) {
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
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
    avatar: { type: Buffer },
  },
  {
    timestamps: true,
  }
);

userSchema.virtual("tasks", {
  ref: "Task",
  localField: "_id",
  foreignField: "owner",
});

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  console.log("userObject", userObject);
  delete userObject.password;
  delete userObject.tokens;
  delete userObject.avatar;
  console.log("afterDe", userObject);
  return userObject;
};
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  console.log("userModel", user);
  const token = jwt.sign({ _id: user._id.toString() }, "thisissecretkey");
  console.log("tokenModel", token);
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("user : Unable to login");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Passwor: dUnable to login");
  }
  return user;
};

////hasn the plain txt password before saving

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

userSchema.pre("remove", async function (next) {
  const user = this;
  await Task.deleteMany({ owner: user._id });
});

const User = mongoose.model("User", userSchema);
// const me = new User({
//   name: "dffss",
//   email: "DEVE@gmail.com  ",
//   password: "     sfdfsdfa!@#! ",
// });

// me.save()
//   .then((res) => {
//     // console.log("doucment save in task-manager-api db", me, res);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });
module.exports = User;
