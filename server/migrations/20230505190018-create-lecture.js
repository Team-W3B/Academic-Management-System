"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("lectures", {
      grade_semester_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      lecture_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      day_of_week: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.CHAR,
      },
      period: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      professor_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      lecture_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      lecture_room: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      is_major: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      credit_point: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("lectures");
  },
};
