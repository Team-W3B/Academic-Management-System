"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Schedule.belongsTo(models.Lecture, {
        foreignKey: "lecture_id",
        targetKey: "id",
      });
    }
  }
  Schedule.init(
    {
      day_of_week: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      period: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      lecture_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "Schedule",
    }
  );
  return Schedule;
};
