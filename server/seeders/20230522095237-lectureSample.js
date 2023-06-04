"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("lectures", [
      {
        id: 1,
        lecture_name: "머신러닝",
        lecture_room: "새빛관 203호",
        is_major: true,
        credit_point: 3,
        grade_semester: "1학년 1학기",
        professor_id: 1,
      },
      {
        id: 2,
        lecture_name: "컴퓨터 네트워크",
        lecture_room: "새빛관 102호",
        is_major: true,
        credit_point: 3,
        grade_semester: "1학년 1학기",
        professor_id: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("lectures");
  },
};
