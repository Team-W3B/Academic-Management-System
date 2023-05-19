"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Boards", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      write_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      content: {
        type: Sequelize.TEXT,
      },
      file_name: {
        type: Sequelize.STRING,
      },
      file_size: {
        type: Sequelize.INTEGER,
      },
      file: {
        type: Sequelize.BLOB,
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
      lecture_day_of_week: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      lecture_period: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      lecture_grade_semester_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Boards");
  },
};
