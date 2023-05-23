"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("professors", [
      {
        id: 1,
        member_type: "교수",
        department_college_id: 1,
        department_id: 1,
        grade_semester_id: 1,
        passwd: "$2b$10$RF9wwrFEJQ606L8Lhxw30eTaTLS39LBF7w3ob/v3jdF8UZXUA03zG",
        name: "박철수",
        birth: "2000-01-01",
        tel: "010-1234-5678",
        email: "kwangwoon@naver.com",
      },
      {
        id: 2,
        member_type: "교수",
        department_college_id: 1,
        department_id: 1,
        grade_semester_id: 1,
        passwd: "$2b$10$RF9wwrFEJQ606L8Lhxw30eTaTLS39LBF7w3ob/v3jdF8UZXUA03zG",
        name: "이혁준",
        birth: "2000-01-01",
        tel: "010-1234-5678",
        email: "kwangwoon@naver.com",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("professors");
  },
};
