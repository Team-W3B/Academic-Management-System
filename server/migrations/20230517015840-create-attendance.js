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
      sl_student_id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sl_lecture_id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
    });

    await queryInterface.addConstraint("Attendances", {
      name: "FK_Attendances",
      fields: ["sl_student_id", "sl_lecture_id"],
      type: "foreign key",
      references: {
        table: "Student_Lectures",
        fields: ["student_id", "lecture_id"],
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Attendances");
  },
};
