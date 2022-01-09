const express = require("express");
const router = express.Router();
const projectController = require("../controllers").project;

router.get("/", projectController.getAllProjects);
router.post("/", projectController.addProject);

module.exports = router;
