"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("lectures", [
      {
        id: "H020-4-8483-01",
        lecture_name: "머신러닝",
        lecture_room: "새빛관 203호",
        major: "전공",
        credit_point: 3,
        grade_semester: "202301",
        professor_id: 1,
      },
      {
        id: "H020-4-1654-01",
        lecture_name: "컴퓨터 네트워크",
        lecture_room: "새빛관 102호",
        major: "전공",
        credit_point: 3,
        grade_semester: "202301",
        professor_id: 2,
      },
      {
        id: "H020-3-1654-05",
        lecture_name: "인공지능",
        lecture_room: "새빛관 102호",
        major: "전공",
        credit_point: 3,
        grade_semester: "202202",
        professor_id: 2,
      },
      {
        id: "H020-3-1654-06",
        lecture_name: "인공지능",
        lecture_room: "새빛관 102호",
        major: "전공",
        credit_point: 3,
        grade_semester: "202202",
        professor_id: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("lectures");
  },
};
