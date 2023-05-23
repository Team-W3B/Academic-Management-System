"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Lecture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Lecture.belongsTo(models.Grade_Semester, {
        foreignKey: "grade_semester_id",
        targetKey: "id",
      });

      Lecture.belongsTo(models.Professor, {
        foreignKey: "professor_id",
        targetKey: "id",
      });

      Lecture.hasOne(models.Student_Lecture, {
        foreignKey: "lecture_id",
        sourceKey: "id",
      });

      Lecture.hasOne(models.Student_Lecture, {
        foreignKey: "lecture_day_of_week",
        sourceKey: "day_of_week",
      });

      Lecture.hasOne(models.Student_Lecture, {
        foreignKey: "lecture_period",
        sourceKey: "period",
      });

      Lecture.hasOne(models.Student_Lecture, {
        foreignKey: "lecture_grade_semester_id",
        sourceKey: "grade_semester_id",
      });

      Lecture.hasOne(models.Student_Lecture, {
        foreignKey: "lecture_professor_id",
        sourceKey: "professor_id",
      });
    }
  }
  Lecture.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      day_of_week: {
        type: DataTypes.STRING,
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      period: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      lecture_name: { type: DataTypes.STRING, allowNull: false },
      lecture_room: { type: DataTypes.STRING, allowNull: false },
      is_major: { type: DataTypes.BOOLEAN, allowNull: false },
      credit_point: { type: DataTypes.INTEGER, allowNull: false },
      grade_semester_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      professor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "Lecture",
      timestamps: false,
    }
  );
  return Lecture;
};
