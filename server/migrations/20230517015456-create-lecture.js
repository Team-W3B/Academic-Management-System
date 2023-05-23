"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Lectures", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      day_of_week: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      period: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      lecture_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      lecture_room: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      is_major: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      credit_point: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      grade_semester_id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      professor_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
    });

    await queryInterface.addConstraint("Lectures", {
      fields: ["grade_semester_id"],
      type: "foreign key",
      references: {
        table: "Grade_Semesters",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addConstraint("Lectures", {
      fields: ["professor_id"],
      type: "foreign key",
      references: {
        table: "Professors",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    // const indexes = await queryInterface.showIndex("lectures");
    // console.log(indexes);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Lectures");
  },
};
