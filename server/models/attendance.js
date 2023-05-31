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
        foreignKey: "sl_student_id",
        targetKey: "student_id",
      });

      Attendance.belongsTo(models.Student_Lecture, {
        foreignKey: "sl_lecture_id",
        targetKey: "lecture_id",
      });
    }
  }
  Attendance.init(
    {
      week: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      round: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      sl_student_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      sl_lecture_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      check: {
        type: DataTypes.STRING,
        allowNull: false,
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
