"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Attendances", {
      week: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      round: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      student_lecture_student_id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Attendances");
  },
};
