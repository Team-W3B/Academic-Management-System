"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("departments", [
      {
        department_id: 1,
        college_id: 1,
        department_name: "컴퓨터정보공학부",
      },
      {
        department_id: 2,
        college_id: 1,
        department_name: "소프트웨어학부",
      },
      {
        department_id: 3,
        college_id: 1,
        department_name: "정보융합학부",
      },
      {
        department_id: 1,
        college_id: 2,
        department_name: "전자공학과",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("departments");
  },
};
