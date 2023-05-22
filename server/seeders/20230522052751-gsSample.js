"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("grade_semesters", [
      {
        id: 1,
        grade: 1,
        semester: 1,
      },
      {
        id: 2,
        grade: 1,
        semester: 2,
      },
      {
        id: 3,
        grade: 2,
        semester: 1,
      },
      {
        id: 4,
        grade: 2,
        semester: 2,
      },
      {
        id: 5,
        grade: 3,
        semester: 1,
      },
      {
        id: 6,
        grade: 3,
        semester: 2,
      },
      {
        id: 7,
        grade: 4,
        semester: 1,
      },
      {
        id: 8,
        grade: 4,
        semester: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("grade_semesters");
  },
};
