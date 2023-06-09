"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Lectures", {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      lecture_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      lecture_room: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      major: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      credit_point: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      grade_semester: {
        allowNull: false,
        autoIncrement: false,
        type: Sequelize.STRING,
      },
      professor_id: {
        allowNull: false,
        autoIncrement: false,
        type: Sequelize.INTEGER,
      },
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
