'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Professor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Professor.init({
    professor_id: DataTypes.INTEGER,
    college_id: DataTypes.INTEGER,
    department_id: DataTypes.INTEGER,
    member_id: DataTypes.INTEGER,
    grade_semester_id: DataTypes.INTEGER,
    passwd: DataTypes.STRING,
    name: DataTypes.STRING,
    birth: DataTypes.DATE,
    tel: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Professor',
  });
  return Professor;
};