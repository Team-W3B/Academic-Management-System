"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Professors",
      {
        professor_id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        member_type: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        college_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        department_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        grade_semester_id: {
          allowNull: false,
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
          allowNull: true,
          type: Sequelize.STRING,
        },
        email: {
          allowNull: true,
          type: Sequelize.STRING,
        },
      },
      {
        id: false,
        timestamps: false,
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Professors");
  },
};
