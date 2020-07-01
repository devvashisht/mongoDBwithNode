require("../src/db/mongoose");
const Task = require("../src/models/tasks");

// Task.findByIdAndDelete("5efccc154c7c8044f81ae856")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch(() => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: true });
  return count;
};

deleteTaskAndCount("5efccc5db0843235848e3a33")
  .then((count) => {
    console.log("Count", count);
  })
  .catch((e) => {
    console.log("error", e);
  });
