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

      Student_Lecture.belongsTo(models.Lecture, {
        foreignKey: "lecture_day_of_week",
        targetKey: "day_of_week",
      });

      Student_Lecture.belongsTo(models.Lecture, {
        foreignKey: "lecture_period",
        targetKey: "period",
      });

      Student_Lecture.belongsTo(models.Lecture, {
        foreignKey: "lecture_grade_semester_id",
        targetKey: "grade_semester_id",
      });

      Student_Lecture.belongsTo(models.Lecture, {
        foreignKey: "lecture_professor_id",
        targetKey: "professor_id",
      });

      Student_Lecture.hasMany(models.Board, {
        foreignKey: "sl_student_id",
        sourceKey: "student_id",
      });

      Student_Lecture.hasMany(models.Board, {
        foreignKey: "sl_lecture_id",
        sourceKey: "lecture_id",
      });

      Student_Lecture.hasMany(models.Board, {
        foreignKey: "sl_lecture_day_of_week",
        sourceKey: "lecture_day_of_week",
      });

      Student_Lecture.hasMany(models.Board, {
        foreignKey: "sl_lecture_period",
        sourceKey: "lecture_period",
      });

      Student_Lecture.hasMany(models.Board, {
        foreignKey: "sl_lecture_grade_semester_id",
        sourceKey: "lecture_grade_semester_id",
      });

      Student_Lecture.hasOne(models.Attendance, {
        foreignKey: "student_lecture_student_id",
        sourceKey: "student_id",
      });

      Student_Lecture.hasOne(models.Attendance, {
        foreignKey: "student_lecture_lecture_id",
        sourceKey: "lecture_id",
      });

      Student_Lecture.hasOne(models.Attendance, {
        foreignKey: "student_lecture_lecture_day_of_week",
        sourceKey: "lecture_day_of_week",
      });

      Student_Lecture.hasOne(models.Attendance, {
        foreignKey: "student_lecture_lecture_period",
        sourceKey: "lecture_period",
      });

      Student_Lecture.hasOne(models.Attendance, {
        foreignKey: "student_lecture_lecture_grade_semester_id",
        sourceKey: "lecture_grade_semester_id",
      });

      Student_Lecture.hasOne(models.Attendance, {
        foreignKey: "student_lecture_lecture_professor_id",
        sourceKey: "lecture_professor_id",
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
      lecture_professor_id: {
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
