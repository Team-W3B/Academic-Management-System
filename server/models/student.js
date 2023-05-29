"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.belongsTo(models.Department, {
        foreignKey: "department_id",
        targetKey: "id",
      });
      Student.belongsTo(models.Department, {
        foreignKey: "department_college_id",
        targetKey: "college_id",
      });
      Student.belongsTo(models.Grade_Semester, {
        foreignKey: "grade_semester_id",
        targetKey: "id",
      });

      Student.hasMany(models.Student_Lecture, {
        foreignKey: "student_id",
        sourceKey: "id",
      });
    }
  }
  Student.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      passwd: { type: DataTypes.STRING, allowNull: false },
      member_type: { type: DataTypes.STRING, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false },
      birth: { type: DataTypes.DATE, allowNull: false },
      tel: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      department_id: { type: DataTypes.INTEGER, allowNull: false },
      department_college_id: { type: DataTypes.INTEGER, allowNull: false },
      grade_semester_id: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "Student",
      timestamps: false,
    }
  );
  return Student;
};
