const express = require("express");
const router = express.Router();
const gradeController = require("../controllers").grade;

router.get("/", gradeController.getAllGrades);
router.get("/:id", gradeController.getGradesById);
router.post("/", gradeController.addGrade);

module.exports = router;
