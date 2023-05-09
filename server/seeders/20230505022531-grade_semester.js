"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("grade_semesters", [
      {
        grade: 1,
        semester: 1,
      },
      {
        grade: 1,
        semester: 2,
      },
      {
        grade: 2,
        semester: 1,
      },
      {
        grade: 2,
        semester: 2,
      },
      {
        grade: 3,
        semester: 1,
      },
      {
        grade: 3,
        semester: 2,
      },
      {
        grade: 4,
        semester: 1,
      },
      {
        grade: 4,
        semester: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("grade_semesters");
  },
};
