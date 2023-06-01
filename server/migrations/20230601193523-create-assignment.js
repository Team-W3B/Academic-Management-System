"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Assignments", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ass_student_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ass_lecture_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      write_date: {
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
        type: Sequelize.DATE,
      },
      content: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      file_name: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      file_size: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      file: {
        allowNull: true,
        type: Sequelize.BLOB,
      },
    });

    await queryInterface.addConstraint("Assignments", {
      fields: ["ass_student_id"],
      type: "foreign key",
      references: {
        table: "Student_Lectures",
        field: "student_id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addConstraint("Assignments", {
      fields: ["ass_lecture_id"],
      type: "foreign key",
      references: {
        table: "Student_Lectures",
        field: "lecture_id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Assignments");
  },
};
