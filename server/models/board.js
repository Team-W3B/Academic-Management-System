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
      Board.belongsTo(models.Board_Type, {
        foreignKey: "board_type_id",
        targetKey: "id",
      });

      Board.belongsTo(models.Student_Lecture, {
        foreignKey: "sl_student_id",
        targetKey: "student_id",
      });

      Board.belongsTo(models.Student_Lecture, {
        foreignKey: "sl_lecture_id",
        targetKey: "lecture_id",
      });
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
      write_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      deadline: { type: DataTypes.DATE },
      content: { type: DataTypes.TEXT },
      file_name: { type: DataTypes.STRING },
      file_path: { type: DataTypes.STRING },
      file: { type: DataTypes.BLOB },
      board_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      sl_student_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sl_lecture_id: {
        type: DataTypes.STRING,
        allowNull: false,
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

