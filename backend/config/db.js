const Sequelize = require("sequelize");

const sequelize = new Sequelize("CodeIT_grading_app", "root", "", {
  dialect: "mysql",
  host: "localhost",
  define: {
    timestamps: false,
  },
});

module.exports = sequelize;
