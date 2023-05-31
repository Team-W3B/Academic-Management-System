const model = require("../models");

async function queryResult(userID, lecName, boardType, isLimit) {
  // DB에서 게시판의 제목, 날짜 꺼냄
  let query = `
    SELECT
      Boards.title AS lecPage_title,
      Boards.write_date AS lecPage_date
    FROM
      Student_Lectures
      LEFT JOIN Lectures ON Student_Lectures.lecture_id = Lectures.id
      LEFT JOIN Boards ON (Student_Lectures.student_id = Boards.sl_student_id and Student_Lectures.lecture_id = Boards.sl_lecture_id)
    WHERE
      Student_Lectures.student_id = :userID and Lectures.lecture_name = :lecName and Boards.board_type_id = :boardType 
    ORDER BY lecPage_date
    `;

  if (isLimit) query += `LIMIT 5`;

  const data = await sequelize.query(query, {
    type: QueryTypes.SELECT,
    replacements: { userID: userID, lecName: lecName, boardType: boardType },
  });

  return data;
}

exports.lecHeader = async (req, res) => {
  try {
    // 로그인한 학번을 세션에서 가져옴
    let userID = req.session.userID;
    //let userID = 2018202043;

    // 강의명을 쿼리스트링에서 가져옴
    let lecName = req.query.name;
    //let lecName = "머신러닝";
    //let lecName = "컴퓨터 네트워크";

    // DB에서 강의 제목, 강의실 이름, 교수님 이름, 강의 시간을 꺼내줌
    const query = `
    SELECT
      Professors.name AS lecPage_prof,
      Lectures.lecture_name AS lecPage_lecture,
      Lectures.lecture_room AS lecPage_class,
      GROUP_CONCAT(Schedules.period order by Schedules.period SEPARATOR ', ') AS lecPage_time
    FROM
      Student_Lectures
      LEFT JOIN Lectures ON Lectures.id = Student_Lectures.lecture_id
      LEFT JOIN Professors ON Lectures.professor_id = Professors.id
      LEFT JOIN Schedules ON Lectures.id = Schedules.lecture_id
    WHERE
      Student_Lectures.student_id = :studentId and Lectures.lecture_name = :lectureName
    `;

    // 쿼리 실행
    const lecHead = await sequelize.query(query, {
      type: QueryTypes.SELECT,
      replacements: { studentId: userID, lectureName: lecName },
    });

    //console.log(lecHead);
    res.status(200).send(lecHead);
  } catch (error) {
    if (!req.session.userID) res.status(401).send();
    else res.status(500).send();
  }
};

exports.lecNotice = async (req, res) => {
  try {
    // 로그인한 학번을 세션에서 가져옴
    let userID = req.session.userID;
    //let userID = 2018202043;

    // 강의명을 쿼리스트링에서 가져옴
    let lecName = req.query.name;
    //let lecName = "머신러닝";
    //let lecName = "컴퓨터 네트워크";

    //공지사항 5개를 DB에서 추출
    let lecNotice = queryResult(userID, lecName, 1, true);

    //console.log(lecNotice);
    res.status(200).send(lecNotice);
  } catch (error) {
    if (!req.session.userID) res.status(401).send();
    else res.status(500).send();
  }
};

exports.lecFile = async (req, res) => {
  try {
    // 로그인한 학번을 세션에서 가져옴
    let userID = req.session.userID;
    //let userID = 2018202043;

    // 강의명을 쿼리스트링에서 가져옴
    let lecName = req.query.name;
    //let lecName = "머신러닝";
    //let lecName = "컴퓨터 네트워크";

    //자료실 글 5개를 DB에서 추출
    let lecFile = queryResult(userID, lecName, 2, true);

    //console.log(lecFile);
    res.status(200).send(lecFile);
  } catch (error) {
    if (!req.session.userID) res.status(401).send();
    else res.status(500).send();
  }
};

exports.lecLecture = async (req, res) => {
  try {
    // 로그인한 학번을 세션에서 가져옴
    let userID = req.session.userID;
    //let userID = 2018202043;

    // 강의명을 쿼리스트링에서 가져옴
    let lecName = req.query.name;
    //let lecName = "머신러닝";
    //let lecName = "컴퓨터 네트워크";

    //강의실 글 5개를 DB에서 추출
    let lecLec = queryResult(userID, lecName, 3, true);

    //console.log(lecLec);
    res.status(200).send(lecLec);
  } catch (error) {
    if (!req.session.userID) res.status(401).send();
    else res.status(500).send();
  }
};

exports.lecAssignment = async (req, res) => {
  try {
    // 로그인한 학번을 세션에서 가져옴
    let userID = req.session.userID;
    //let userID = 2018202043;

    // 강의명을 쿼리스트링에서 가져옴
    let lecName = req.query.name;
    //let lecName = "머신러닝";
    //let lecName = "컴퓨터 네트워크";

    //과제 글 5개를 DB에서 추출
    let lecAss = queryResult(userID, lecName, 4, true);

    //console.log(lecAss);
    res.status(200).send(lecAss);
  } catch (error) {
    if (!req.session.userID) res.status(401).send();
    else res.status(500).send();
  }
};

exports.attendence = async (req, res) => {
  try {
    // 로그인한 학번을 세션에서 가져옴
    let userID = req.session.userID;
    //let userID = 2018202043;

    // 강의명을 쿼리스트링에서 가져옴
    let lecName = req.query.name;
    //let lecName = "머신러닝";
    //let lecName = "컴퓨터 네트워크";

    // DB에서 강의 제목, 강의실 이름, 교수님 이름, 강의 시간을 꺼내줌
    const query = `
    SELECT
      Attendances.week AS lecPage_check_id,
      Attendances.round AS round,
      Attendances.check AS lecPage_check
    FROM
      Student_Lectures
      LEFT JOIN Lectures ON Lectures.id = Student_Lectures.lecture_id
      LEFT JOIN Attendances ON Student_Lectures.student_id = Attendances.sl_student_id and Student_Lectures.lecture_id = Attendances.sl_lecture_id
    WHERE
      Student_Lectures.student_id = :studentID and Lectures.lecture_name = :lectureName
    ORDER BY Attendances.week ASC, Attendances.round ASC;
    `;

    // 쿼리 실행
    const lecAttendance = await sequelize.query(query, {
      type: QueryTypes.SELECT,
      replacements: { studentID: userID, lectureName: lecName },
    });

    //console.log(lecDetail);
    res.status(200).send(mappingFunc(lecAttendance));
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
    let lecName = req.query.name;
    //let lecName = "머신러닝";
    //let lecName = "컴퓨터 네트워크";

    //공지사항 5개를 DB에서 추출
    let lecNotice = queryResult(userID, lecName, 1, false);

    //console.log(lecNotice);
    res.status(200).send(lecNotice);
  } catch (error) {
    if (!req.session.userID) res.status(401).send();
    else res.status(500).send();
  }
};

exports.file = async (req, res) => {
  try {
    // 로그인한 학번을 세션에서 가져옴
    let userID = req.session.userID;
    //let userID = 2018202043;

    // 강의명을 쿼리스트링에서 가져옴
    let lecName = req.query.name;
    //let lecName = "머신러닝";
    //let lecName = "컴퓨터 네트워크";

    //자료실 글 5개를 DB에서 추출
    let lecFile = queryResult(userID, lecName, 2, false);

    //console.log(lecFile);
    res.status(200).send(lecFile);
  } catch (error) {
    if (!req.session.userID) res.status(401).send();
    else res.status(500).send();
  }
};

exports.lecture = async (req, res) => {
  try {
    // 로그인한 학번을 세션에서 가져옴
    let userID = req.session.userID;
    //let userID = 2018202043;

    // 강의명을 쿼리스트링에서 가져옴
    let lecName = req.query.name;
    //let lecName = "머신러닝";
    //let lecName = "컴퓨터 네트워크";

    //강의실 글 5개를 DB에서 추출
    let lecLec = queryResult(userID, lecName, 3, false);

    //console.log(lecLec);
    res.status(200).send(lecLec);
  } catch (error) {
    if (!req.session.userID) res.status(401).send();
    else res.status(500).send();
  }
};

exports.assignment = async (req, res) => {
  try {
    // 로그인한 학번을 세션에서 가져옴
    let userID = req.session.userID;
    //let userID = 2018202043;

    // 강의명을 쿼리스트링에서 가져옴
    let lecName = req.query.name;
    //let lecName = "머신러닝";
    //let lecName = "컴퓨터 네트워크";

    //과제 글 5개를 DB에서 추출
    let lecAss = queryResult(userID, lecName, 4, false);

    //console.log(lecAss);
    res.status(200).send(lecAss);
  } catch (error) {
    if (!req.session.userID) res.status(401).send();
    else res.status(500).send();
  }
};
