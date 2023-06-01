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
      Student_Lecture.belongsTo(models.Student, {
        foreignKey: "student_id",
        targetKey: "id",
      });

      Student_Lecture.belongsTo(models.Lecture, {
        foreignKey: "lecture_id",
        targetKey: "id",
      });

      Student_Lecture.belongsTo(models.Professor, {
        foreignKey: "professor_id",
        targetKey: "id",
      });

      Student_Lecture.hasMany(models.Board, {
        foreignKey: "sl_student_id",
        sourceKey: "student_id",
      });

      Student_Lecture.hasMany(models.Board, {
        foreignKey: "sl_lecture_id",
        sourceKey: "lecture_id",
      });

      Student_Lecture.hasOne(models.Attendance, {
        foreignKey: "sl_student_id",
        sourceKey: "student_id",
      });

      Student_Lecture.hasOne(models.Attendance, {
        foreignKey: "sl_lecture_id",
        sourceKey: "lecture_id",
      });

      Student_Lecture.hasMany(models.Assignment, {
        foreignKey: "ass_student_id",
        sourceKey: "student_id",
      });

      Student_Lecture.hasMany(models.Assignment, {
        foreignKey: "ass_lecture_id",
        sourceKey: "lecture_id",
      });
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
      professor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: false,
      },
      lecture_id: {
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
