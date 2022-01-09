const express = require("express");
const router = express.Router();
const studentController = require("../controllers").student;

router.get("/", studentController.getAllStudents);
router.post("/", studentController.addStudent);
router.get("/:id", studentController.getStudentById);

module.exports = router;
