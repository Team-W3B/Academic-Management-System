"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("student_lectures", [
      {
        student_id: 2018202043,
        professor_id: 1,
        lecture_id: "H020-4-8483-01",
      },
      {
        student_id: 2018202043,
        professor_id: 2,
        lecture_id: "H020-3-1654-01",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("student_lectures");
  },
};
