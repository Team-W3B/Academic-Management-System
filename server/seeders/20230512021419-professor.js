"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("professors", [
      {
        professor_id: 1,
        member_type: "교수",
        college_id: 1,
        department_id: 1,
        grade_semester_id: 1,
        passwd: "123asd!@",
        name: "박철수",
        birth: "2000-01-01",
        tel: "010-1234-5678",
        email: "kwangwoon@naver.com",
      },
      {
        professor_id: 2,
        member_type: "교수",
        college_id: 1,
        department_id: 1,
        grade_semester_id: 1,
        passwd: "123asd!@",
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
