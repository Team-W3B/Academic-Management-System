"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Professor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Professor.belongsTo(models.Department, {
        foreignKey: "department_id",
        targetKey: "id",
      });

      Professor.hasMany(models.Lecture, {
        foreignKey: "professor_id",
        sourceKey: "id",
      });

      Professor.hasMany(models.Student_Lecture, {
        foreignKey: "professor_id",
        sourceKey: "id",
      });
    }
  }
  Professor.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      passwd: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      birth: { type: DataTypes.DATE, allowNull: false },
      tel: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      department_id: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "Professor",
      timestamps: false,
    }
  );
  return Professor;
};
