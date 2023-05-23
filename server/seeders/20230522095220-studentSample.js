"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("students", [
      {
        id: 2018202043,
        member_type: "학생",
        department_college_id: 1,
        department_id: 1,
        grade_semester_id: 1,
        passwd: "$2b$10$RF9wwrFEJQ606L8Lhxw30eTaTLS39LBF7w3ob/v3jdF8UZXUA03zG",
        name: "김경범",
        birth: "2000-01-01",
        tel: "01012345678",
        email: "kwangwoon@naver.com",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("students");
  },
};
