"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Weekplan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Weekplan.belongsTo(models.Plan, {
        foreignKey: "plan_lecture_id",
        targetKey: "lecture_id",
      });
    }
  }
  Weekplan.init(
    {
      plan_lecture_id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      week: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
      content: DataTypes.STRING,
      operation: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Weekplan",
      id: false,
      timestamps: false,
    }
  );
  return Weekplan;
};
