const mongoose = require("mongoose");
const validator = require("validator");

const TaskSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Task = mongoose.model(
  "Task",
  TaskSchema //{
  // description: {
  //   type: String,
  //   required: true,
  //   trim: true,
  // },
  // completed: {
  //   type: Boolean,
  //   default: false,
  // },
  // owner: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   ref: "User",
  // },
  //},
);
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

module.exports = Task;
