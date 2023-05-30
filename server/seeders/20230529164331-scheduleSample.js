"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("schedules", [
      {
        lecture_id: 1,
        day_of_week: "mon",
        period: 3,
      },
      {
        lecture_id: 1,
        day_of_week: "wed",
        period: 4,
      },
      {
        lecture_id: 2,
        day_of_week: "tue",
        period: 5,
      },
      {
        lecture_id: 2,
        day_of_week: "thur",
        period: 6,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("schedules");
  },
};
