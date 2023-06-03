"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("WeekPlans", [
      {
        plan_lecture_id: "H020-4-8483-01",
        week: 1,
        content: "Introduction",
        operation: "Test1입니다.",
      },
      {
        plan_lecture_id: "H020-4-8483-01",
        week: 2,
        content: "AAAA",
        operation: "Test2입니다.",
      },
      {
        plan_lecture_id: "H020-4-8483-01",
        week: 3,
        content: "BBBB",
        operation: "Test3입니다.",
      },
      {
        plan_lecture_id: "H020-4-8483-01",
        week: 4,
        content: "CCCC",
        operation: "Test4입니다.",
      },
      {
        plan_lecture_id: "H020-4-8483-01",
        week: 5,
        content: "DDDD",
        operation: "Test5입니다.",
      },
      {
        plan_lecture_id: "H020-4-8483-01",
        week: 6,
        content: "Introduction",
        operation: "Test6입니다.",
      },
      {
        plan_lecture_id: "H020-4-8483-01",
        week: 7,
        content: "Introduction",
        operation: "Test7입니다.",
      },
      {
        plan_lecture_id: "H020-4-8483-01",
        week: 8,
        content: "Introduction",
        operation: "Test8입니다.",
      },
      {
        plan_lecture_id: "H020-4-8483-01",
        week: 9,
        content: "Introduction",
        operation: "Test9입니다.",
      },
      {
        plan_lecture_id: "H020-4-8483-01",
        week: 10,
        content: "Introduction",
        operation: "Test10입니다.",
      },
      {
        plan_lecture_id: "H020-4-8483-01",
        week: 11,
        content: "Introduction",
        operation: "Test11입니다.",
      },
      {
        plan_lecture_id: "H020-4-8483-01",
        week: 12,
        content: "Introduction",
        operation: "Test12입니다.",
      },
      {
        plan_lecture_id: "H020-4-8483-01",
        week: 13,
        content: "Introduction",
        operation: "Test13입니다.",
      },
      {
        plan_lecture_id: "H020-4-8483-01",
        week: 14,
        content: "Introduction",
        operation: "Test14입니다.",
      },
      {
        plan_lecture_id: "H020-4-8483-01",
        week: 15,
        content: "Introduction",
        operation: "Test15입니다.",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
