'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student_lecture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  student_lecture.init({
    student_id: DataTypes.INTEGER,
    grade_semester_id: DataTypes.INTEGER,
    lecture_id: DataTypes.INTEGER,
    day_of_week: DataTypes.CHAR,
    period: DataTypes.INTEGER,
    is_retake: DataTypes.BOOLEAN,
    attendance: DataTypes.INTEGER,
    assignment: DataTypes.INTEGER,
    midterm_exam: DataTypes.INTEGER,
    final_exam: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    score: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'student_lecture',
  });
  return student_lecture;
};