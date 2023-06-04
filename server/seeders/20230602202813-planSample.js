"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Plans", [
      {
        lecture_id: "H020-4-8483-01",
        lectureType: "영어 50%",
        leftover: 16,
        assistant: "김현진 조교",
        outline:
          "본 과정은 머신러닝에 관한 일반적인 입문 과정으로, 머신러닝의 기본 개념, methods, 실무활용 예 및 최근 기술동향 등을 소개한다.",
        percent_attendance: 10,
        percent_midterm: 30,
        percent_finalterm: 30,
        percent_assignment: 30,
        percent_attitude: 0,
        percent_quiz: 0,
        percent_etc: 0,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
