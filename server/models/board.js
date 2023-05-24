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

      Board.belongsTo(models.Professor, {
        foreignKey: "professor_id",
        targetKey: "id",
      });

      Board.belongsTo(models.Lecture, {
        foreignKey: "lecture_id",
        targetKey: "id",
      });

      Board.belongsTo(models.Lecture, {
        foreignKey: "lecture_day_of_week",
        targetKey: "day_of_week",
      });

      Board.belongsTo(models.Lecture, {
        foreignKey: "lecture_period",
        targetKey: "period",
      });

      Board.belongsTo(models.Lecture, {
        foreignKey: "lecture_grade_semester_id",
        targetKey: "grade_semester_id",
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
