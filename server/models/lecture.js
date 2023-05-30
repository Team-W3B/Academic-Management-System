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
      Lecture.belongsTo(models.Professor, {
        foreignKey: "professor_id",
        targetKey: "id",
      });

      Lecture.hasMany(models.Schedule, {
        foreignKey: "lecture_id",
        sourceKey: "id",
      });

      Lecture.hasOne(models.Student_Lecture, {
        foreignKey: "lecture_id",
        sourceKey: "id",
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
        autoIncrement: false,
        primaryKey: true,
      },
      lecture_name: { type: DataTypes.STRING, allowNull: false },
      lecture_room: { type: DataTypes.STRING, allowNull: false },
      is_major: { type: DataTypes.BOOLEAN, allowNull: false },
      credit_point: { type: DataTypes.INTEGER, allowNull: false },
      grade_semester: {
        type: DataTypes.STRING,
        allowNull: false,
        autoIncrement: false,
      },
      professor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: false,
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
