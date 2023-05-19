"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Students", {
      id: {
        allowNull: false,
        autoIncrement: false,
        unique: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      passwd: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      member_type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      birth: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      tel: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      department_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      department_college_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      grade_semester_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Students");
  },
};
