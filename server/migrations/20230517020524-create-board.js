"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Boards", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
      professor_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      lecture_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      lecture_day_of_week: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      lecture_period: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      lecture_grade_semester_id: {
        allowNull: false,
        primaryKey: true,
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
      fields: ["professor_id"],
      type: "foreign key",
      references: {
        table: "Professors",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addConstraint("Boards", {
      name: "FK_Boards",
      fields: [
        "lecture_id",
        "lecture_day_of_week",
        "lecture_period",
        "lecture_grade_semester_id",
      ],
      type: "foreign key",
      references: {
        table: "Lectures",
        fields: ["id", "day_of_week", "period", "grade_semester_id"],
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Boards");
  },
};
