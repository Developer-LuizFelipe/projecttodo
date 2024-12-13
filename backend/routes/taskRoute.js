const express = require("express");
const router = express.Router();
const {getTask,getTasks,postTash,putTask,deleteTask} = require('../controllers/taskController.js');

router.get("/", getTasks);

router.get("/:id", getTask);

router.put("/:id", putTask);

router.delete("/:id",deleteTask);

router.post("/",postTash);

module.exports = router;