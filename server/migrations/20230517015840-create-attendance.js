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
      student_lecture_student_id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      student_lecture_lecture_id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      student_lecture_lecture_day_of_week: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      student_lecture_lecture_period: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      student_lecture_lecture_grade_semester_id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      student_lecture_lecture_professor_id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
    });

    await queryInterface.addConstraint("Attendances", {
      name: "FK_Attendances",
      fields: [
        "student_lecture_student_id",
        "student_lecture_lecture_id",
        "student_lecture_lecture_day_of_week",
        "student_lecture_lecture_period",
        "student_lecture_lecture_grade_semester_id",
        "student_lecture_lecture_professor_id",
      ],
      type: "foreign key",
      references: {
        table: "Student_Lectures",
        fields: [
          "student_id",
          "lecture_id",
          "lecture_day_of_week",
          "lecture_period",
          "lecture_grade_semester_id",
          "lecture_professor_id",
        ],
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Attendances");
  },
};
