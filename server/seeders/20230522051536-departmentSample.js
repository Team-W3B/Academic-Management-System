"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("departments", [
      {
        id: 1,
        department_name: "컴퓨터정보공학부",
      },
      {
        id: 2,
        department_name: "소프트웨어학부",
      },
      {
        id: 3,
        department_name: "정보융합학부",
      },
      {
        id: 4,
        department_name: "전자공학과",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("departments");
  },
};
