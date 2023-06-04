"use strict";
const { Model, NOW } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Assignment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Assignment.belongsTo(models.Student_Lecture, {
        foreignKey: "ass_student_id",
        targetKey: "student_id",
      });

      Assignment.belongsTo(models.Student_Lecture, {
        foreignKey: "ass_lecture_id",
        targetKey: "lecture_id",
      });
    }
  }
  Assignment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      ass_student_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      ass_lecture_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      write_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      file_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      file_size: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      file: {
        type: DataTypes.BLOB,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Assignment",
      timestamps: false,
    }
  );
  return Assignment;
};
