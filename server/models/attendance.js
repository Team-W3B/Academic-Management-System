'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class attendance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  attendance.init({
    student_id: DataTypes.INTEGER,
    grade_semester_id: DataTypes.INTEGER,
    lecture_id: DataTypes.INTEGER,
    day_of_week: DataTypes.CHAR,
    period: DataTypes.INTEGER,
    week: DataTypes.INTEGER,
    round: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'attendance',
  });
  return attendance;
};