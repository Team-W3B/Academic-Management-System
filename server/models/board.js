"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class board extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  board.init(
    {
      board_id: DataTypes.INTEGER,
      board_type_id: DataTypes.INTEGER,
      professor_id: DataTypes.INTEGER,
      lecture_id: DataTypes.INTEGER,
      grade_semester_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      write_date: DataTypes.STRING,
      content: DataTypes.TEXT,
      file_name: DataTypes.STRING,
      file_size: DataTypes.INTEGER,
      file: DataTypes.BLOB,
    },
    {
      sequelize,
      modelName: "board",
    }
  );
  return board;
};
