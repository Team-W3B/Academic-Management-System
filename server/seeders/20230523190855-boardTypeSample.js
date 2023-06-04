"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("board_types", [
      {
        id: 1,
        board_type: "공지사항",
      },
      {
        id: 2,
        board_type: "자료실",
      },
      {
        id: 3,
        board_type: "온라인 강의 리스트",
      },
      {
        id: 4,
        board_type: "과제",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("board_types");
  },
};
