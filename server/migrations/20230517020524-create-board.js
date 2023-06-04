"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Boards", {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      write_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deadline: {
        type: Sequelize.DATE,
      },
      content: {
        type: Sequelize.TEXT,
      },
      file_name: {
        type: Sequelize.STRING,
      },
      file_size: {
        type: Sequelize.INTEGER,
      },
      file: {
        type: Sequelize.BLOB,
      },
      board_type_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sl_student_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      sl_lecture_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });

    await queryInterface.addConstraint("Boards", {
      fields: ["board_type_id"],
      type: "foreign key",
      references: {
        table: "Board_Types",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addConstraint("Boards", {
      name: "FK_Boards",
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
    await queryInterface.dropTable("Boards");
  },
};
