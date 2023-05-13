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
      // define association here
    }
  }
  College.init(
    {
      college_id: { type: DataTypes.INTEGER, primarykey: true },
      college_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "College",
      timestamps: false,
      id: false,
    }
  );
  return College;
};