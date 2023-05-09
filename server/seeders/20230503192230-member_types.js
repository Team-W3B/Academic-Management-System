"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("member_types", [
      {
        member_type_id: 1,
        member_type: "학생",
      },
      {
        member_type_id: 12345,
        member_type: "교수",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("member_types");
  },
};
