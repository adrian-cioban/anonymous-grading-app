const StudentDb = require("../models").Student;
const TeacherDb = require("../models").Teacher;
const ProjectDb = require("../models").Project;
const PartialDeliverableDb = require("../models").PartialDeliverable;
const GradeDb = require("../models").Grade;

const controller = {
  getAllGrades: async (req, res) => {
    GradeDb.findAll()
      .then((grades) => {
        res.status(200).send(grades);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send({ message: "Server error!" });
      });
  },

  addGrade: async (req, res) => {
    const { grade, idStudent, projectId } = req.body;
    ProjectDb.findByPk(projectId)
      .then((project) => {
        if (project) {
          if (grade) {
            project
              .createGrade({ grade, idStudent })
              .then((addedGrade) => {
                res.status(201).send(addedGrade);
              })
              .catch((error) => {
                console.log(error);
                res.status(500).send({ message: "Server error!" });
              });
          } else {
            res.status(400).send({ message: "No grade entered!" });
          }
        } else {
          res.status(404).send({ message: "Project not found!" });
        }
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send({ message: "Server error!" });
      });
  },

  getGradesById: async (req, res) => {
    GradeDb.findByPk(req.params.id)
      .then((grade) => {
        if (grade) {
          res.status(201).send(grade);
        } else {
          res.status(404).send({ message: "Grade not found!" });
        }
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send({ message: "Server error!" });
      });
  },
};

module.exports = controller;
