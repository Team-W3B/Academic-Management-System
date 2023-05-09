'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lecture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lecture.init({
    grade_semester_id: DataTypes.INTEGER,
    lecture_id: DataTypes.INTEGER,
    day_of_week: DataTypes.CHAR,
    period: DataTypes.INTEGER,
    professor_id: DataTypes.INTEGER,
    lecture_name: DataTypes.STRING,
    lecture_room: DataTypes.STRING,
    is_major: DataTypes.BOOLEAN,
    credit_point: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'lecture',
  });
  return lecture;
};