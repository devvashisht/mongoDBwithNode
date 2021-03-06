const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/tasks");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/tasks");

const app = express();
const port = process.env.PORT || 3000;
const multer = require("multer");
const upload = multer({
  dest: "images",
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    //  if (!file.originalname.endsWith(".pdf")) {
    if (!file.originalname.match(/\.(doc|docx)$/)) {
      return cb(new Error("Please upload a pdf"));
    }
    cb(undefined, true);
    //cb(new Error('File must be a PDF'))
  },
});
app.post(
  "/upload",
  upload.single("upload"),
  (req, res) => {
    res.send();
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);
// app.use((req, res, next) => {
//   console.log("middleware", req.method, req.path);
//   if (req.method === "GET") {
//     return res.send("get not allowed");
//   }
//   next();
// });

// app.use((req, res, net) => {
//   return res.status(503).send("site undermainteince");
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("server is up on port " + port);
});

const task = require("./models/tasks");
const user = require("./models/user");
// const main = async () => {
//   // const task = await Task.findById("5efe606cdc46a0325c52c1ac");
//   // console.log(task);
//   // await task.populate("owner").execPopulate();
//   // console.log(task.owner);
//   const user = await User.findById("5efe5f1e7f13ad5ac02e1012");
//   await user.populate("tasks").execPopulate();
//   console.log(user.tasks);
// };
// main();
// const jwt = require("jsonwebtoken");
// const myFunction = async () => {
//   const token = jwt.sign({ _id: "12321" }, "thisismynew", {
//     expiresIn: "7 days",
//   });
//   // console.log("Token", token);
//   const data = jwt.verify(token, "thisismynew");
//   // console.log("data", data);
// };

//myFunction();

//const bcrypt = require("bcryptjs");
// const myFunction = async () => {
//   const passowrd = "EncryptPasswod";
//   const hashedPassword = await bcrypt.hash(passowrd, 8);
//   console.log(passowrd);
//   console.log(hashedPassword);
//   const ismatch = await bcrypt.compare("EncryptPasswod", hashedPassword);
//   console.log(ismatch);
// };

// myFunction();

// app.post("/users", async (req, res) => {
//   const user = new User(req.body);

//   try {
//     await user.save();
//     res.status(201).send(user);
//   } catch (e) {
//     res.status(400).send(e);
//   }
//   // user
//   //   .save()
//   //   .then(() => {
//   //     res.status(201).send(user);
//   //   })
//   //   .catch((error) => {
//   //     res.status(400).send(error);
//   //   });
// });

// app.get("/users", async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.send(users);
//   } catch (e) {
//     res.status(500).send();
//   }
//   // User.find({})
//   //   .then((users) => {
//   //     res.send(users);
//   //   })
//   //   .catch((e) => {
//   //     res.status(500).send();
//   //   });
// });
// app.get("/users/:id", async (req, res) => {
//   const _id = req.params.id;
//   try {
//     const user = await User.findById(_id);
//     if (!user) {
//       return res.status(404).send();
//     }
//     res.send(user);
//   } catch (e) {
//     res.status(500).send();
//   }
//   // console.log(_id);
//   // User.findById(_id)
//   //   .then((user) => {
//   //     if (!user) {
//   //       return res.status(404).send();
//   //     }
//   //     res.send(user);
//   //   })
//   //   .catch((e) => {
//   //     res.status(500).send();
//   //   });
// });

// app.patch("/users/:id", async (req, res) => {
//   const updates = Object.keys(req.body);
//   const allowedUpdates = ["name", "email", "age", "password"];
//   const isValidOperation = updates.every((update) => {
//     return allowedUpdates.includes(update);
//   });

//   if (!isValidOperation) {
//     return res.status(400).send({ error: "Invlaid udptes" });
//   }
//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     if (!user) {
//       return res.status(404).send();
//     }
//     res.send(user);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// app.delete("/users/:id", async (req, res) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id);
//     if (!user) {
//       return res.status(404).send();
//     }
//     res.send(user);
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });
// app.post("/tasks", async (req, res) => {
//   const tasks = new Task(req.body);
//   try {
//     await tasks.save();
//     res.status(201).send(tasks);
//   } catch (e) {
//     res.status(400).send(e);
//   }
//   // tasks
//   //   .save()
//   //   .then(() => {
//   //     res.status(201).send(tasks);
//   //   })
//   //   .catch((error) => {
//   //     res.status(400).send(error);
//   //   });
// });

// app.get("/tasks", async (req, res) => {
//   try {
//     const tasks = await Task.find({});
//     res.send(tasks);
//   } catch (e) {
//     res.status(500).send();
//   }
//   // Task.find({})
//   //   .then((tasks) => {
//   //     res.send(tasks);
//   //   })
//   //   .catch((e) => {
//   //     res.status(500).send();
//   //   });
// });

// app.get("/tasks/:id", async (req, res) => {
//   const _id = req.params.id;
//   try {
//     const task = await Task.findById(_id);
//     if (!task) {
//       return res.status(404).send();
//     }
//     res.send(task);
//   } catch (e) {
//     res.status(500).send();
//   }
//   // console.log(_id);
//   // Task.findById(_id)
//   //   .then((task) => {
//   //     if (!task) {
//   //       return res.status(404).send();
//   //     }
//   //     res.send(task);
//   //   })
//   //   .catch((e) => {
//   //     res.status(500).send();
//   //   });
// });

// app.patch("/tasks/:id", async (req, res) => {
//   console.log("reqest received");
//   const updates = Object.keys(req.body);
//   const allowedUpdates = ["description", "completed"];
//   const isValidOperation = updates.every((update) => {
//     return allowedUpdates.includes(update);
//   });
//   console.log("valid", isValidOperation);
//   if (!isValidOperation) {
//     return res.status(400).send({ error: "Invliad Operation" });
//   }
//   try {
//     const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     if (!task) {
//       return res.status(404).send();
//     }
//     res.send(task);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// app.delete("/tasks/:id", async (req, res) => {
//   try {
//     const task = await Task.findByIdAndDelete(req.params.id);
//     if (!task) {
//       res.status(404).send();
//     }
//     res.send(task);
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });

// app.post("/users", (req, res) => {
//   const user = new User(req.body);
//   user
//     .save()
//     .then(() => {
//       res.status(201).send(user);
//     })
//     .catch((error) => {
//       res.status(400).send(error);
//     });
// });

// app.get("/users", (req, res) => {
//   User.find({})
//     .then((users) => {
//       res.send(users);
//     })
//     .catch((e) => {
//       res.status(500).send();
//     });
// });
// app.get("/users/:id", (req, res) => {
//   const _id = req.params.id;
//   console.log(_id);
//   User.findById(_id)
//     .then((user) => {
//       if (!user) {
//         return res.status(404).send();
//       }
//       res.send(user);
//     })
//     .catch((e) => {
//       res.status(500).send();
//     });
// });

// app.post("/tasks", (req, res) => {
//   const tasks = new Task(req.body);
//   tasks
//     .save()
//     .then(() => {
//       res.status(201).send(tasks);
//     })
//     .catch((error) => {
//       res.status(400).send(error);
//     });
// });

// app.get("/tasks", (req, res) => {
//   Task.find({})
//     .then((tasks) => {
//       res.send(tasks);
//     })
//     .catch((e) => {
//       res.status(500).send();
//     });
// });

// app.get("/tasks/:id", (req, res) => {
//   const _id = req.params.id;
//   console.log(_id);
//   Task.findById(_id)
//     .then((task) => {
//       if (!task) {
//         return res.status(404).send();
//       }
//       res.send(task);
//     })
//     .catch((e) => {
//       res.status(500).send();
//     });
// });
