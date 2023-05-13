"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class board_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  board_type.init(
    {
      board_type_id: DataTypes.INTEGER,
      board_type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "board_type",
      timestamps: false,
      id: false,
    }
  );
  return board_type;
};
