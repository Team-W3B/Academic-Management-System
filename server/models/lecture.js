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
      professor_id: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "Lecture",
      timestamps: false,
    }
  );
  return Lecture;
};
