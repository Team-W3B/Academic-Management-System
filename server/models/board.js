"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Board extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Board.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: { type: DataTypes.STRING, allowNull: false },
      write_date: { type: DataTypes.DATE, allowNull: false },
      content: { type: DataTypes.TEXT },
      file_name: { type: DataTypes.STRING },
      file_size: { type: DataTypes.INTEGER },
      file: { type: DataTypes.BLOB },
      board_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      professor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      lecture_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      lecture_day_of_week: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      lecture_period: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      lecture_grade_semester_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "Board",
      timestamps: false,
    }
  );
  return Board;
};
