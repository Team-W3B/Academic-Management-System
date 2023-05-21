"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Grade_Semester extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Grade_Semester.hasMany(models.Student, {
        foreignKey: "grade_semester_id",
        sourceKey: "id",
      });

      Grade_Semester.hasMany(models.Professor, {
        foreignKey: "grade_semester_id",
        sourceKey: "id",
      });

      Grade_Semester.hasOne(models.Lecture, {
        foreignKey: "grade_semester_id",
        sourceKey: "id",
      });
    }
  }
  Grade_Semester.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      grade: { type: DataTypes.INTEGER, allowNull: false },
      semester: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "Grade_Semester",
      timestamps: false,
    }
  );
  return Grade_Semester;
};
