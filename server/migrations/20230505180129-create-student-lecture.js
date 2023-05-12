"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "student_lectures",
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
          type: Sequelize.STRING,
        },
        period: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        is_retake: {
          allowNull: false,
          type: Sequelize.BOOLEAN,
        },
        attendance: {
          allowNull: true,
          type: Sequelize.INTEGER,
        },
        assignment: {
          allowNull: true,
          type: Sequelize.INTEGER,
        },
        midterm_exam: {
          allowNull: true,
          type: Sequelize.INTEGER,
        },
        final_exam: {
          allowNull: true,
          type: Sequelize.INTEGER,
        },
        total: {
          allowNull: true,
          type: Sequelize.INTEGER,
        },
        score: {
          allowNull: true,
          type: Sequelize.CHAR,
        },
      },
      {
        id: false,
        timestamps: false,
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("student_lectures");
  },
};
