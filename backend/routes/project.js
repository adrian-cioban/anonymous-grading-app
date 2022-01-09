const express = require("express");
const router = express.Router();
const projectController = require("../controllers").project;

router.get("/", projectController.getAllProjects);
router.get("/:id", projectController.getProjectById);
router.post("/", projectController.addProject);
router.put("/:id", projectController.updateProjectById);

module.exports = router;
