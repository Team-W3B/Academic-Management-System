"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Carts", [
      {
        student_id: 2016644974,
        lecture_id: "H020-4-8483-01", // 머신 러닝
      },
      {
        student_id: 2016644974,
        lecture_id: "H020-4-1654-01", // 컴퓨터 네트워크
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

