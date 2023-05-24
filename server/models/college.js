"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class College extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      College.hasMany(models.Department, {
        foreignKey: "college_id",
        sourceKey: "id",
      });
    }
  }
  College.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      college_name: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "College",
      timestamps: false,
    }
  );
  return College;
};
