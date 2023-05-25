"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Grade_Semesters",
      {
        grade_semester_id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        grade: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        semester: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
      },
      {
        id: false,
        timestamps: false,
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Grade_Semesters");
  },
};
