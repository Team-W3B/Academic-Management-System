"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Plan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Plan.belongsTo(models.Lecture, {
        foreignKey: "lecture_id",
        targetKey: "id",
      });

      Plan.hasMany(models.Weekplan, {
        foreignKey: "plan_lecture_id",
        sourceKey: "lecture_id",
      });
    }
  }
  Plan.init(
    {
      lecture_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      lectureType: DataTypes.STRING,
      leftover: DataTypes.INTEGER,
      assistant: DataTypes.STRING,
      outline: DataTypes.TEXT,
      percent_attendance: { type: DataTypes.INTEGER, defaultValue: 0 },
      percent_midterm: { type: DataTypes.INTEGER, defaultValue: 0 },
      percent_finalterm: { type: DataTypes.INTEGER, defaultValue: 0 },
      percent_assignment: { type: DataTypes.INTEGER, defaultValue: 0 },
      percent_attitude: { type: DataTypes.INTEGER, defaultValue: 0 },
      percent_quiz: { type: DataTypes.INTEGER, defaultValue: 0 },
      percent_etc: { type: DataTypes.INTEGER, defaultValue: 0 },
    },
    {
      sequelize,
      modelName: "Plan",
      id: false,
      timestamps: false,
    }
  );
  return Plan;
};
