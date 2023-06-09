"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.Student, {
        foreignKey: "student_id",
        targetKey: "id",
      });

      Cart.belongsTo(models.Lecture, {
        foreignKey: "lecture_id",
        targetKey: "id",
      });
    }
  }
  Cart.init(
    {
      student_id: { type: DataTypes.INTEGER, primaryKey: true },
      lecture_id: { type: DataTypes.STRING, primaryKey: true },
    },
    {
      sequelize,
      modelName: "Cart",
      id: false,
      timestamps: false,
    }
  );
  return Cart;
};

