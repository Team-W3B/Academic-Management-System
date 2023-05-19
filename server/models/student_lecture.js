"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student_Lecture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student_Lecture.init(
    {
      is_retake: { type: DataTypes.BOOLEAN },
      attendance: { type: DataTypes.INTEGER },
      assignment: { type: DataTypes.INTEGER },
      midterm_exam: { type: DataTypes.INTEGER },
      final_exam: { type: DataTypes.INTEGER },
      total: { type: DataTypes.INTEGER },
      score: { type: DataTypes.STRING },
      student_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      lecture_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      lecture_day_of_week: {
        type: DataTypes.STRING,
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      lecture_period: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      lecture_grade_semester_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "Student_Lecture",
      timestamps: false,
      id: false,
    }
  );
  return Student_Lecture;
};
