const express = require("express");
const router = express.Router();
const studentController = require("../controllers").student;

router.get("/", studentController.getAllStudents);
router.get("/:id", studentController.getStudentById);
router.post("/", studentController.addStudent);
router.put("/:id", studentController.updateStudentById);
router.delete("/:id", studentController.deleteStudentById);

module.exports = router;
