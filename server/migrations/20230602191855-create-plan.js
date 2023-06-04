"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Plans", {
      lecture_id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      lectureType: {
        type: Sequelize.STRING,
      },
      leftover: {
        type: Sequelize.INTEGER,
      },
      assistant: {
        type: Sequelize.STRING,
      },
      outline: {
        type: Sequelize.TEXT,
      },
      percent_attendance: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      percent_midterm: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      percent_finalterm: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      percent_assignment: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      percent_attitude: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      percent_quiz: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      percent_etc: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
    });

    await queryInterface.addConstraint("Plans", {
      fields: ["lecture_id"],
      type: "foreign key",
      references: {
        table: "Lectures",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Plans");
  },
};
