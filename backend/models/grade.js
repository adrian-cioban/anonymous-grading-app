module.exports = (sequelize, DataTypes) => {
  return sequelize.define("grade", {
    grade: DataTypes.FLOAT,
  });
};
