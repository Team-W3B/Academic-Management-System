"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Lectures", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      day_of_week: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      period: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      lecture_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      lecture_room: {
        allowNull: false,
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
      grade_semester_id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      professor_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Lectures");
  },
};
