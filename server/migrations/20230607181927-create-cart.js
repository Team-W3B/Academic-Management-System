"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Carts", {
      student_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      lecture_id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
    });

    await queryInterface.addConstraint("Carts", {
      fields: ["student_id"],
      type: "foreign key",
      references: {
        table: "Students",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addConstraint("Carts", {
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
    await queryInterface.dropTable("Carts");
  },
};

