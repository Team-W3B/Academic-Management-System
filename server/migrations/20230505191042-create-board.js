"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("boards", {
      board_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      board_type_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      professor_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      lecture_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      grade_semester_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      write_date: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      content: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      file_name: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      file_size: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      file: {
        allowNull: true,
        type: Sequelize.BLOB,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("boards");
  },
};
