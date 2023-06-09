"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("attendances", [
      {
        week: 1,
        round: 1,
        sl_student_id: 2018202043,
        sl_lecture_id: "H020-4-8483-01",
        check: "출석",
      },
      {
        week: 1,
        round: 2,
        sl_student_id: 2018202043,
        sl_lecture_id: "H020-4-8483-01",
        check: "출석",
      },
      {
        week: 2,
        round: 1,
        sl_student_id: 2018202043,
        sl_lecture_id: "H020-4-8483-01",
        check: "결석",
      },
      {
        week: 2,
        round: 2,
        sl_student_id: 2018202043,
        sl_lecture_id: "H020-4-8483-01",
        check: "공결",
      },
      {
        week: 1,
        round: 1,
        sl_student_id: 2018202043,
        sl_lecture_id: "H020-4-1654-01",
        check: "출석",
      },
      {
        week: 1,
        round: 2,
        sl_student_id: 2018202043,
        sl_lecture_id: "H020-4-1654-01",
        check: "지각",
      },
      {
        week: 2,
        round: 1,
        sl_student_id: 2018202043,
        sl_lecture_id: "H020-4-1654-01",
        check: "공결",
      },
      {
        week: 2,
        round: 2,
        sl_student_id: 2018202043,
        sl_lecture_id: "H020-4-1654-01",
        check: "결석",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("attendances");
  },
};

