"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("schedules", [
      {
        lecture_id: "H020-4-8483-01",
        day_of_week: "월",
        period: 3,
      },
      {
        lecture_id: "H020-4-8483-01",
        day_of_week: "월",
        period: 4,
      },
      {
        lecture_id: "H020-4-8483-01",
        day_of_week: "수",
        period: 4,
      },
      {
        lecture_id: "H020-3-1654-01",
        day_of_week: "화",
        period: 5,
      },
      {
        lecture_id: "H020-3-1654-01",
        day_of_week: "목",
        period: 6,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("schedules");
  },
};
