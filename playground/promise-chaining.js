require("../src/db/mongoose");
const User = require("../src/models/user");
//5efc515725156d53a47fa9a9

// User.findByIdAndUpdate("5efc515725156d53a47fa9a9", { age: 1 })
//   .then((user) => {
//     //  console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     //  console.log(result);
//   })
//   .catch((e) => {
//     //  console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("5efc515725156d53a47fa9a9", 36)
  .then((count) => {
    console.log("count", count);
  })
  .catch((e) => {
    console.log("error", e);
  });
