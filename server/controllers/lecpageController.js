const model = require("../models");

function boardQuery(board_type) {
  return;
}

exports.lecHeader = async (req, res) => {
  try {
    // 로그인한 학번을 세션에서 가져옴
    let userID = req.session.userID;
    //let userID = 2018202043;

    // 강의명을 쿼리스트링에서 가져옴
    //let lecName = req.query.name;

    // DB에서 강의 제목, 강의실 이름, 교수님 이름, 강의 시간을 꺼내줌
    const query = `
    SELECT
      Professors.name AS lecPage_prof,
      Lectures.lecture_name AS lecPage_lecture,
      Lectures.lecture_room AS lecPage_class,
      Schedules.period AS lecPage_time
    FROM
      Student_Lectures
      LEFT JOIN Lectures ON Lectures.id = Student_Lectures.lecture_id
      LEFT JOIN Professors ON Lectures.professor_id = Professors.id
      LEFT JOIN Schedules ON Lectures.id = Schedules.lecture_id
    WHERE
      Student_Lectures.student_id = :studentId and Lectures.lecture_name = :lectureName
    `;

    // const query = `
    // SELECT
    //   Professors.name AS lecPage_prof,
    //   Lectures.lecture_name AS lecPage_lecture,
    //   Lectures.lecture_room AS lecPage_class,
    //   GROUP_CONCAT(Schedules.period SEPARATOR ', ') AS merged_time
    // FROM
    //   Student_Lectures
    //   LEFT JOIN Lectures ON Lectures.id = Student_Lectures.lecture_id
    //   LEFT JOIN Professors ON Lectures.professor_id = Professors.id
    //   LEFT JOIN Schedules ON Lectures.id = Schedules.lecture_id
    // WHERE
    //   Student_Lectures.student_id = 2018202043 AND Lectures.lecture_name = "컴퓨터 네트워크"
    // GROUP BY
    //   lecPage_prof, lecPage_lecture, lecPage_class;`;

    // 쿼리 실행
    const lecHead = await sequelize.query(query, {
      type: QueryTypes.SELECT,
      replacements: { studentId: userID, lectureName: lecName },
    });

    console.log(lecDetail);
    res.status(200).send(lecDetail);
  } catch (error) {
    if (!req.session.userID) res.status(401).send();
    else res.status(500).send();
  }
};

exports.notice = async (req, res) => {
  try {
    // 로그인한 학번을 세션에서 가져옴
    let userID = req.session.userID;
    //let userID = 2018202043;

    // 강의명을 쿼리스트링에서 가져옴
    //let lecName = req.query.name;

    // DB에서 공지사항 제목, 공지사항 날짜 꺼냄
    const query = `
    SELECT
      Boards.title AS lecPage_title,
      Boards.write_date AS lecPage_date
    FROM
      Student_Lectures
      LEFT JOIN Lectures ON Student_Lectures.lecture_id = Lectures.id
      LEFT JOIN Boards ON (Student_Lectures.student_id = Boards.sl_student_id and Student_Lectures.lecture_id = Boards.sl_lecture_id)
    WHERE
      Student_Lectures.student_id = :studentId and Lectures.lecture_name = :lectureName and Boards.board_type_id = 1 
    `;

    // 쿼리 실행
    const lecHead = await sequelize.query(query, {
      type: QueryTypes.SELECT,
      replacements: { studentId: userID, lectureName: lecName },
    });

    console.log(lecHead);
    res.status(200).send(lecHead);
  } catch (error) {
    if (!req.session.userID) res.status(401).send();
    else res.status(500).send();
  }
};

exports.file = async (req, res) => {
  try {
  } catch (error) {}
};

exports.lecture = async (req, res) => {
  try {
  } catch (error) {}
};

exports.assignment = async (req, res) => {
  try {
  } catch (error) {}
};

exports.attendence = async (req, res) => {
  try {
  } catch (error) {}
};
