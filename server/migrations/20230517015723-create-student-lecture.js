"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Student_Lectures", {
      is_retake: {
        type: Sequelize.BOOLEAN,
      },
      attendance: {
        type: Sequelize.INTEGER,
      },
      assignment: {
        type: Sequelize.INTEGER,
      },
      midterm_exam: {
        type: Sequelize.INTEGER,
      },
      final_exam: {
        type: Sequelize.INTEGER,
      },
      total: {
        type: Sequelize.INTEGER,
      },
      score: {
        type: Sequelize.STRING,
      },
      student_id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      lecture_id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      lecture_day_of_week: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      lecture_period: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      lecture_grade_semester_id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
    });

    await queryInterface.addConstraint("Student_Lectures", {
      fields: ["student_id"],
      type: "foreign key",
      references: {
        table: "Students",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addConstraint("Student_Lectures", {
      name: "FK_StudentLectures",
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

    // await queryInterface.addConstraint("Student_Lectures", {
    //   fields: ["lecture_id"],
    //   type: "foreign key",
    //   references: {
    //     table: "Lectures",
    //     field: "id",
    //   },
    //   onDelete: "cascade",
    //   onUpdate: "cascade",
    // });

    // await queryInterface.addConstraint("Student_Lectures", {
    //   fields: ["lecture_day_of_week"],
    //   type: "foreign key",
    //   references: {
    //     table: "Lectures",
    //     field: "day_of_week",
    //   },
    //   onDelete: "cascade",
    //   onUpdate: "cascade",
    // });

    // await queryInterface.addConstraint("Student_Lectures", {
    //   fields: ["lecture_period"],
    //   type: "foreign key",
    //   references: {
    //     table: "Lectures",
    //     field: "period",
    //   },
    //   onDelete: "cascade",
    //   onUpdate: "cascade",
    // });

    // await queryInterface.addConstraint("Student_Lectures", {
    //   fields: ["lecture_grade_semester_id"],
    //   type: "foreign key",
    //   references: {
    //     table: "Lectures",
    //     field: "grade_semester_id",
    //   },
    //   onDelete: "cascade",
    //   onUpdate: "cascade",
    // });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Student_Lectures");
  },
};
