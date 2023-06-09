"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("student_lectures", [
      {
        student_id: 2018202043,
        professor_id: 1,
        lecture_id: "H020-4-8483-01",
        score: 4.5,
        is_retake: false,
      },
      {
        student_id: 2018202043,
        professor_id: 2,
        lecture_id: "H020-4-1654-01",
        score: 3.5,
        is_retake: true,
      },
      {
        student_id: 2018202043,
        professor_id: 2,
        lecture_id: "H020-3-1654-05",
        score: 2.5,
        is_retake: false,
      },
      {
        student_id: 2018202043,
        professor_id: 2,
        lecture_id: "H020-3-1654-06",
        score: 3.0,
        is_retake: false,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("student_lectures");
  },
};

