const express = require("express");
const Task = require("../models/tasks");
const auth = require("../middleware/auth");
const { model } = require("../models/user");
const router = new express.Router();

router.post("/tasks", auth, async (req, res) => {
  //const tasks = new Task(req.body);
  const task = new Task({
    ...req.body,
    owner: req.user._id,
  });
  console.log("task", task);
  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
  // tasks
  //   .save()
  //   .then(() => {
  //     res.status(201).send(tasks);
  //   })
  //   .catch((error) => {
  //     res.status(400).send(error);
  //   });
});

router.get("/tasks", auth, async (req, res) => {
  try {
    //   const tasks = await Task.find({owner:req.user._id});
    await req.user.populate("tasks").execPopulate();
    res.send(req.user.tasks);
  } catch (e) {
    res.status(500).send();
  }
  // Task.find({})
  //   .then((tasks) => {
  //     res.send(tasks);
  //   })
  //   .catch((e) => {
  //     res.status(500).send();
  //   });
});

router.get("/tasks/:id", auth, async (req, res) => {
  const _id = req.params.id;
  try {
    //  const task = await Task.findById(_id);
    const task = await Task.findOne({ _id, owner: req.user._id });

    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    res.status(500).send();
  }
  // console.log(_id);
  // Task.findById(_id)
  //   .then((task) => {
  //     if (!task) {
  //       return res.status(404).send();
  //     }
  //     res.send(task);
  //   })
  //   .catch((e) => {
  //     res.status(500).send();
  //   });
});

router.patch("/tasks/:id", auth, async (req, res) => {
  console.log("reqest received");
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description", "completed"];
  const isValidOperation = updates.every((update) => {
    return allowedUpdates.includes(update);
  });
  console.log("valid", isValidOperation);
  if (!isValidOperation) {
    return res.status(400).send({ error: "Invliad Operation" });
  }
  try {
    // const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });
    const task = await Task.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });
    // const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).send();
    }
    updates.forEach((update) => (task[update] = req.body[update]));
    await task.save();
    res.send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/tasks/:id", auth, async (req, res) => {
  try {
    // const task = await Task.findByIdAndDelete(req.params.id);
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    });
    if (!task) {
      res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
