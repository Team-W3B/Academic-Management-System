"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Departments", {
      department_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      college_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      department_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Departments");
  },
};
