"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Attendance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Attendance.belongsTo(models.Student_Lecture, {
        foreignKey: "student_lecture_student_id",
        targetKey: "student_id",
      });

      Attendance.belongsTo(models.Student_Lecture, {
        foreignKey: "student_lecture_lecture_id",
        targetKey: "lecture_id",
      });

      Attendance.belongsTo(models.Student_Lecture, {
        foreignKey: "student_lecture_lecture_day_of_week",
        targetKey: "lecture_day_of_week",
      });

      Attendance.belongsTo(models.Student_Lecture, {
        foreignKey: "student_lecture_lecture_period",
        targetKey: "lecture_period",
      });

      Attendance.belongsTo(models.Student_Lecture, {
        foreignKey: "student_lecture_lecture_grade_semester_id",
        targetKey: "lecture_grade_semester_id",
      });

      Attendance.belongsTo(models.Student_Lecture, {
        foreignKey: "student_lecture_lecture_professor_id",
        targetKey: "lecture_professor_id",
      });
    }
  }
  Attendance.init(
    {
      week: { type: DataTypes.INTEGER, allowNull: false },
      round: { type: DataTypes.INTEGER, allowNull: false },
      student_lecture_student_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      student_lecture_lecture_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      student_lecture_lecture_day_of_week: {
        type: DataTypes.STRING,
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      student_lecture_lecture_period: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      student_lecture_lecture_grade_semester_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      student_lecture_lecture_professor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "Attendance",
      timestamps: false,
      id: false,
    }
  );
  return Attendance;
};
