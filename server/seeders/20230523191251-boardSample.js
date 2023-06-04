"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("boards", [
      //공지사항 게시판
      {
        id: 1,
        title: "강의자료 다운로드",
        write_date: "2023-03-05",
        content:
          "강의자료는 bcml.kw.ac.kr의 Board 메뉴에서 다운 받을 수 있습니다.",
        board_type_id: 1,
        sl_student_id: 2018202043,
        sl_lecture_id: 1,
      },
      {
        id: 2,
        title: "3월 29일 수업 공지",
        write_date: "2023-03-22",
        content:
          "다음주 3월 29일 수요일 수업시간 내에 1차 과제 설명 및 파이썬 튜토리얼 시간을 갖도록 하겠습니다.",
        board_type_id: 1,
        sl_student_id: 2018202043,
        sl_lecture_id: 1,
      },
      //자료실 게시판
      {
        id: 3,
        title: "Python Tutorial",
        write_date: "2023-03-24",
        content:
          "이번 머신러닝 과제가 나오기 앞서 python tutorial 인강을 올려두었으니 기한내에 수강하시고, 과제 진행하시는데 참고하시길 바랍니다.",
        board_type_id: 2,
        sl_student_id: 2018202043,
        sl_lecture_id: 1,
      },
      {
        id: 4,
        title: "1주차 강의자료",
        write_date: "2023-03-05",
        content: "1주차 강의자료 입니다.",
        board_type_id: 2,
        sl_student_id: 2018202043,
        sl_lecture_id: 1,
      },
      //강의 게시판
      {
        id: 5,
        title: "1주차 강의",
        write_date: "2023-03-05",
        deadline: "2023-06-20",
        board_type_id: 3,
        sl_student_id: 2018202043,
        sl_lecture_id: 1,
      },
      {
        id: 6,
        title: "2주차 강의",
        write_date: "2023-03-12",
        deadline: "2023-06-20",
        board_type_id: 3,
        sl_student_id: 2018202043,
        sl_lecture_id: 1,
      },
      //과제 게시판
      {
        id: 7,
        title: "머신러닝과제01",
        write_date: "2023-03-05",
        deadline: "2023-06-16",
        content: "과제1 테스트 데이터입니다.",
        board_type_id: 4,
        sl_student_id: 2018202043,
        sl_lecture_id: 1,
      },
      {
        id: 8,
        title: "머신러닝과제02",
        write_date: "2023-03-24",
        deadline: "2023-06-18",
        content: "과제2 테스트 데이터입니다.",
        board_type_id: 4,
        sl_student_id: 2018202043,
        sl_lecture_id: 1,
      },
      {
        id: 9,
        title: "머신러닝과제03",
        write_date: "2023-03-25",
        deadline: "2023-06-18",
        content: "과제3 테스트 데이터입니다.",
        board_type_id: 4,
        sl_student_id: 2018202043,
        sl_lecture_id: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("boards");
  },
};
