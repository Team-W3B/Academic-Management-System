"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Member_Types",
      {
        member_type_id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        member_type: {
          allowNull: false,
          type: Sequelize.STRING,
        },
      },
      {
        timestamps: false,
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Member_Types");
  },
};
