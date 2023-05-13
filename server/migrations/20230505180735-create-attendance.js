"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "attendances",
      {
        student_id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
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
        week: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        round: {
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
    await queryInterface.dropTable("attendances");
  },
};
