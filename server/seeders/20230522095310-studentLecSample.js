"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("student_lectures", [
      {
        student_id: 2018202043,
        professor_id: 1,
        lecture_id: 1,
      },
      {
        student_id: 2018202043,
        professor_id: 2,
        lecture_id: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("student_lectures");
  },
};
