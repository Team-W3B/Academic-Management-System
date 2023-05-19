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
