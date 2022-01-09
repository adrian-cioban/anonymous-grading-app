const express = require("express");
const router = express.Router();
const teacherController = require("../controllers").teacher;

router.get("/", teacherController.getAllTeachers);
router.post("/", teacherController.addTeacher);
router.get("/:id", teacherController.getTeacherById);
router.put("/:id", teacherController.updateTeacherById);
router.delete("/:id", teacherController.deleteTeacherById);

module.exports = router;
