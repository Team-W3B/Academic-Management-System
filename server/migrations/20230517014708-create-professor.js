"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Professors", {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      passwd: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      birth: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      tel: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      department_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });

    await queryInterface.addConstraint("Professors", {
      fields: ["department_id"],
      type: "foreign key",
      references: {
        table: "Departments",
        fields: ["id"],
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Professors");
  },
};
