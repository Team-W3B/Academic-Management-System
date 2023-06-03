"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Weekplans", {
      plan_lecture_id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      week: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      content: {
        type: Sequelize.STRING,
      },
      operation: {
        type: Sequelize.STRING,
      },
    });

    await queryInterface.addConstraint("Weekplans", {
      fields: ["plan_lecture_id"],
      type: "foreign key",
      references: {
        table: "Plans",
        field: "lecture_id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Weekplans");
  },
};
