"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("lectures", [
      {
        grade_semester_id: 1,
        lecture_id: 1,
        day_of_week: "mon",
        period: 3,
        professor_id: 1,
        lecture_name: "머신러닝",
        lecture_room: "새빛관 203호",
        is_major: true,
        credit_point: 3,
      },
      {
        grade_semester_id: 1,
        lecture_id: 1,
        day_of_week: "wed",
        period: 4,
        professor_id: 1,
        lecture_name: "머신러닝",
        lecture_room: "새빛관 203호",
        is_major: true,
        credit_point: 3,
      },
      {
        grade_semester_id: 1,
        lecture_id: 2,
        day_of_week: "tue",
        period: 5,
        professor_id: 2,
        lecture_name: "컴퓨터 네트워크",
        lecture_room: "새빛관 102호",
        is_major: true,
        credit_point: 3,
      },
      {
        grade_semester_id: 1,
        lecture_id: 2,
        day_of_week: "thur",
        period: 6,
        professor_id: 2,
        lecture_name: "컴퓨터 네트워크",
        lecture_room: "새빛관 102호",
        is_major: true,
        credit_point: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("lectures");
  },
};
