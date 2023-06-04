"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Schedules", {
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
      lecture_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
    });

    await queryInterface.addConstraint("Schedules", {
      fields: ["lecture_id"],
      type: "foreign key",
      references: {
        table: "lectures",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Schedules");
  },
};
