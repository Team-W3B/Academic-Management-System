"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("board_types", [
      {
        board_type_id: 1,
        board_type: "공지사항",
      },
      {
        board_type_id: 2,
        board_type: "자료실",
      },
      {
        board_type_id: 3,
        board_type: "온라인강의리스트",
      },
      {
        board_type_id: 4,
        board_type: "과제",
      },
      {
        board_type_id: 5,
        board_type: "강의계획서",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("board_types");
  },
};
