"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("student_lectures", [
      {
        student_id: 2018202043,
        lecture_professor_id: 1,
        lecture_grade_semester_id: 1,
        lecture_id: 1,
        lecture_day_of_week: "mon", //월요일 머신러닝 1교시
        lecture_period: 3,
        is_retake: false,
      },
      {
        student_id: 2018202043,
        lecture_professor_id: 1,
        lecture_grade_semester_id: 1,
        lecture_id: 1,
        lecture_day_of_week: "wed", //수요일 머신러닝 4교시
        lecture_period: 4,
        is_retake: false,
      },
      {
        student_id: 2018202043,
        lecture_professor_id: 2,
        lecture_grade_semester_id: 1,
        lecture_id: 2,
        lecture_day_of_week: "tue", //화요일 컴퓨터네트워크 5교시
        lecture_period: 5,
        is_retake: false,
      },
      {
        student_id: 2018202043,
        lecture_professor_id: 2,
        lecture_grade_semester_id: 1,
        lecture_id: 2,
        lecture_day_of_week: "thur", //목요일 컴퓨터네트워크 6교시
        lecture_period: 6,
        is_retake: false,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("student_lectures");
  },
};
