const StudentDb = require("../models").Student;
const TeacherDb = require("../models").Teacher;
const ProjectDb = require("../models").Project;
const PartialDeliverableDb = require("../models").PartialDeliverable;
const GradeDb = require("../models").Grade;

const controller = {
  getAllProjects: async (req, res) => {
    ProjectDb.findAll()
      .then((projects) => {
        res.status(200).send(projects);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send({ message: "Server error!" });
      });
  },

  addProject: async (req, res) => {
    const { titlu, studentId } = req.body;
    StudentDb.findByPk(studentId)
      .then((student) => {
        if (student) {
          if (titlu) {
            student
              .createProject({ titlu })
              .then((project) => {
                res.status(201).send(project);
              })
              .catch((error) => {
                console.log(error);
                res.status(500).send({ message: "Server error!" });
              });
          } else {
            res.status(400).send({ message: "No title entered!" });
          }
        } else {
          res.status(404).send({ message: "Student not found!" });
        }
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send({ message: "Server error!" });
      });
  },
};

module.exports = controller;
