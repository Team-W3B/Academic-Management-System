"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("colleges", [
      {
        id: 1,
        college_name: "소프트웨어융합대학",
      },
      {
        id: 2,
        college_name: "전자정보공과대학",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("colleges");
  },
};
