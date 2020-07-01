const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// const Task = mongoose.model("Task", {
//   description: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   completed: {
//     type: Boolean,
//     default: false,
//   },
// });

// const task = new Task({
//   description: "Learn moonngose",
//   completed: false,
// });
// task
//   .save()
//   .then((res) => {
//     console.log("Save task", res);
//   })
//   .catch((error) => {
//     console.log("Error while save task", error);
//   });

// const User = mongoose.model("User", {
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error("Email is invalid");
//       }
//     },
//   },
//   password: {
//     type: "String",
//     required: true,
//     minlength: 7,
//     trim: true,
//     validate(value) {
//       if (value.toLowerCase().includes("password")) {
//         throw new Error("Password can not contain password");
//       }
//     },
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error("Age must be +ve");
//       }
//     },
//   },
// });
// const me = new User({
//   name: "dffss",
//   email: "DEVE@gmail.com  ",
//   password: "     sfdfsdfa!@#! ",
// });

// me.save()
//   .then((res) => {
//     console.log("doucment save in task-manager-api db", me, res);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });
