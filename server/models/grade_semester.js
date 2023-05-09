"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Grade_Semester extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Grade_Semester.init(
    {
      grade_semester_id: DataTypes.INTEGER,
      grade: DataTypes.INTEGER,
      semester: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Grade_Semester",
    }
  );
  return Grade_Semester;
};
