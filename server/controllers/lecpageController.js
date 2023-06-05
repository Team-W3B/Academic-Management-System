const model = require("../models");
const { QueryTypes } = require("sequelize");
const { sequelize } = require("../models/index");
const fsPromises = require("fs").promises;
const path = require("path");

async function getUserID(req) {
  // request 헤더에서 sessionID 가져오기
  const cookies = req.headers.cookie.split("; ");
  const loginSessionCookie = cookies.find((cookie) =>
    cookie.startsWith("loginSession=")
  );
  const sessionID = loginSessionCookie
    ? loginSessionCookie.split("=")[1]
    : null;

  const tmp = sessionID.substring(sessionID.indexOf("s%3A") + 4);
  const replacedSessionID = tmp.substring(0, tmp.indexOf("."));

  // 세션 파일 경로 생성
  const sessionFilePath = path.join(
    __dirname,
    "../",
    "sessions",
    `${replacedSessionID}.json`
  );

  // 세션 파일 읽기 및 처리 로직 작성
  try {
    const data = await fsPromises.readFile(sessionFilePath, "utf8");
    const session = JSON.parse(data);
    return session.userID;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// 게시판에 대한 쿼리문 함수
async function queryBoard(userID, lecName, boardType, isLimit) {
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

// 게시글에 대한 쿼리문 함수
async function queryPost(userID, lecName, boardType, index) {
  // DB에서 게시글 제목, 작성일, 내용, 제출기한(존재하면), 파일(존재하면), 파일 사이즈(존재하면) SELECT
  let query = `
    SELECT
      Boards.title AS lecDetail_title,
      Boards.write_date AS lecDetail_date,
      Boards.content AS lecDetail_content,
      CONCAT(DATE_FORMAT(Boards.write_date, "%Y-%m-%d"), ' ~ ', DATE_FORMAT(Boards.deadline, "%Y-%m-%d")) AS lecDetail_duration,
      Boards.file_name AS lecDetail_fileName,
      Boards.file AS lecDetail_file,
      Boards.file_size AS lecDetail_fileSize
    FROM
      Student_Lectures
      LEFT JOIN Lectures ON Student_Lectures.lecture_id = Lectures.id
      LEFT JOIN Boards ON (Student_Lectures.student_id = Boards.sl_student_id and Student_Lectures.lecture_id = Boards.sl_lecture_id)
    WHERE
      Student_Lectures.student_id = :userID and Lectures.lecture_name = :lecName and Boards.board_type_id = :boardType and Boards.id = :index
    `;

  const data = await sequelize.query(query, {
    type: QueryTypes.SELECT,
    replacements: {
      userID: userID,
      lecName: lecName,
      boardType: boardType,
      index: index,
    },
  });

  return data;
}

// 과제 제출에 대한 쿼리문 함수
async function queryAssSent(body, userID, lecName, index) {
  let content = body.lecDetail_content;
  let fileName = body.lecDetail_fileName;
  let file = body.lecDetail_file;
  let fileSize = body.lecDetail_fileSize;

  // DB에서 강의명으로 강의 아이디를 가져옴
  const lecture = await model.Lecture.findOne({
    where: { lecture_name: lecName },
    attributes: ["id"],
  });

  // DB에서
  let query = `
    INSERT INTO Assignments
      (id, ass_student_id, ass_lecture_id, content, file_name, file_size, file)
    VALUES
      (:index, :userID, :lectureID, :content, :fileName, :fileSize, :file)
    `;

  await sequelize.query(query, {
    type: QueryTypes.INSERT,
    replacements: {
      index: index,
      userID: userID,
      lectureID: lecture.id,
      content: content,
      fileName: fileName,
      fileSize: fileSize,
      file: file,
    },
  });
}

// 주차와 출석 여부를 저장하는 객체를 생성하는 함수
function createObj(id) {
  return { lecPage_check_id: id };
}

exports.lecHeader = async (req, res) => {
  // 로그인한 학번을 세션에서 가져옴
  //let userID = await getUserID(req);
  try {
    // 강의명과 ID를 쿼리스트링에서 가져옴
    let lecName = req.query.lecture;

    let userID = req.query.userID;

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

    res.status(200).send(lecHead);
  } catch (error) {
    console.error(error);
    if (!userID) res.status(401).send();
    else res.status(500).send();
  }
};

exports.lecNotice = async (req, res) => {
  // 로그인한 학번을 세션에서 가져옴
  //let userID = await getUserID(req);
  try {
    // 강의명과 ID를 쿼리스트링에서 가져옴
    let lecName = req.query.lecture;
    let userID = req.query.userID;

    //공지사항 5개를 DB에서 추출
    let lecNotice = queryBoard(userID, lecName, 1, true);

    res.status(200).send(lecNotice);
  } catch (error) {
    console.error(error);
    if (!userID) res.status(401).send();
    else res.status(500).send();
  }
};

exports.lecFile = async (req, res) => {
  // 로그인한 학번을 세션에서 가져옴
  //let userID = await getUserID(req);
  try {
    // 강의명과 ID를 쿼리스트링에서 가져옴
    let lecName = req.query.lecture;
    let userID = req.query.userID;

    //자료실 글 5개를 DB에서 추출
    let lecFile = queryBoard(userID, lecName, 2, true);

    //console.log(lecFile);
    res.status(200).send(lecFile);
  } catch (error) {
    console.error(error);
    if (!userID) res.status(401).send();
    else res.status(500).send();
  }
};

exports.lecLecture = async (req, res) => {
  // 로그인한 학번을 세션에서 가져옴
  //let userID = await getUserID(req);

  try {
    // 강의명과 ID를 쿼리스트링에서 가져옴
    let lecName = req.query.lecture;
    let userID = req.query.userID;

    //강의실 글 5개를 DB에서 추출
    let lecLec = queryBoard(userID, lecName, 3, true);

    res.status(200).send(lecLec);
  } catch (error) {
    console.error(error);
    if (!userID) res.status(401).send();
    else res.status(500).send();
  }
};

exports.lecAssignment = async (req, res) => {
  // 로그인한 학번을 세션에서 가져옴
  //let userID = await getUserID(req);
  try {
    // 강의명과 ID를 쿼리스트링에서 가져옴
    let lecName = req.query.lecture;
    let userID = req.query.userID;

    //과제 글 5개를 DB에서 추출
    let lecAss = queryBoard(userID, lecName, 4, true);

    res.status(200).send(lecAss);
  } catch (error) {
    console.error(error);
    if (!userID) res.status(401).send();
    else res.status(500).send();
  }
};

exports.attendence = async (req, res) => {
  // 로그인한 학번을 세션에서 가져옴
  //let userID = await getUserID(req);
  try {
    // 강의명과 ID를 쿼리스트링에서 가져옴
    let lecName = req.query.lecture;
    let userID = req.query.userID;

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

    // 데이터를 출석부 데이터에 맞게 변환
    const data = lecAttendance.reduce((acc, cur) => {
      const item =
        acc.find((x) => x.lecPage_check_id === cur.week) || createObj(cur.week);
      switch (cur.round) {
        case 1:
          item.first = cur.check;
          break;
        case 2:
          item.second = cur.check;
          break;
        case 3:
          item.third = cur.check;
          break;
        case 4:
          item.fourth = cur.check;
          break;
        default:
          break;
      }
      if (!acc.includes(item)) acc.push(item);
      return acc;
    }, []);

    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    if (!userID) res.status(401).send();
    else res.status(500).send();
  }
};

exports.notice = async (req, res) => {
  // 로그인한 학번을 세션에서 가져옴
  //let userID = await getUserID(req);
  try {
    // 강의명과 ID를 쿼리스트링에서 가져옴
    let lecName = req.query.lecture;
    let userID = req.query.userID;

    //공지사항 5개를 DB에서 추출
    let lecNotice = queryBoard(userID, lecName, 1, false);

    res.status(200).send(lecNotice);
  } catch (error) {
    console.error(error);
    if (!userID) res.status(401).send();
    else res.status(500).send();
  }
};

exports.file = async (req, res) => {
  // 로그인한 학번을 세션에서 가져옴
  //let userID = await getUserID(req);
  try {
    // 강의명과 ID를 쿼리스트링에서 가져옴
    let lecName = req.query.lecture;
    let userID = req.query.userID;

    //자료실 글 5개를 DB에서 추출
    let lecFile = queryBoard(userID, lecName, 2, false);

    res.status(200).send(lecFile);
  } catch (error) {
    console.error(error);
    if (!userID) res.status(401).send();
    else res.status(500).send();
  }
};

exports.lecture = async (req, res) => {
  // 로그인한 학번을 세션에서 가져옴
  //let userID = await getUserID(req);
  try {
    // 강의명과 ID를 쿼리스트링에서 가져옴
    let lecName = req.query.lecture;
    let userID = req.query.userID;

    //강의실 글 5개를 DB에서 추출
    let lecLec = queryBoard(userID, lecName, 3, false);

    res.status(200).send(lecLec);
  } catch (error) {
    console.error(error);
    if (!userID) res.status(401).send();
    else res.status(500).send();
  }
};

exports.assignment = async (req, res) => {
  // 로그인한 학번을 세션에서 가져옴
  //let userID = await getUserID(req);
  try {
    // 강의명과 ID를 쿼리스트링에서 가져옴
    let lecName = req.query.lecture;
    let userID = req.query.userID;

    //과제 글 5개를 DB에서 추출
    let lecAss = queryBoard(userID, lecName, 4, false);

    res.status(200).send(lecAss);
  } catch (error) {
    console.error(error);
    if (!userID) res.status(401).send();
    else res.status(500).send();
  }
};

exports.noticeDetail = async (req, res) => {
  // 로그인한 학번을 세션에서 가져옴
  //let userID = await getUserID(req);
  try {
    // 강의명과 ID를 쿼리스트링에서 가져옴
    let lecName = req.query.lecture;
    let userID = req.query.userID;
    let index = req.query.index;

    res.status(200).send(queryPost(userID, lecName, 1, index));
  } catch (error) {
    console.error(error);
    if (!userID) res.status(401).send();
    else res.status(500).send();
  }
};

exports.fileDetail = async (req, res) => {
  // 로그인한 학번을 세션에서 가져옴
  //let userID = await getUserID(req);
  try {
    // 강의명과 ID를 쿼리스트링에서 가져옴
    let lecName = req.query.lecture;
    let userID = req.query.userID;
    let index = req.query.index;

    res.status(200).send(queryPost(userID, lecName, 2, index));
  } catch (error) {
    console.error(error);
    if (!userID) res.status(401).send();
    else res.status(500).send();
  }
};

exports.lectureDetail = async (req, res) => {
  // 로그인한 학번을 세션에서 가져옴
  //let userID = await getUserID(req);
  try {
    // 강의명과 ID를 쿼리스트링에서 가져옴
    let lecName = req.query.lecture;
    let userID = req.query.userID;
    let index = req.query.index;

    res.status(200).send(queryPost(userID, lecName, 3, index));
  } catch (error) {
    console.error(error);
    if (!userID) res.status(401).send();
    else res.status(500).send();
  }
};

exports.assignmentDetail = async (req, res) => {
  // 로그인한 학번을 세션에서 가져옴
  //let userID = await getUserID(req);
  try {
    // 강의명과 ID를 쿼리스트링에서 가져옴
    let lecName = req.query.lecture;
    let userID = req.query.userID;
    let index = req.query.index;

    res.status(200).send(queryPost(userID, lecName, 4, index));
  } catch (error) {
    console.error(error);
    if (!userID) res.status(401).send();
    else res.status(500).send();
  }
};

exports.assignmentSent = async (req, res) => {
  // 로그인한 학번을 세션에서 가져옴
  //let userID = await getUserID(req);
  try {
    // 강의명과 ID를 쿼리스트링에서 가져옴
    let lecName = req.query.lecture;
    let userID = req.query.userID;
    let index = req.query.index;

    await queryAssSent(req.body, userID, lecName, index);

    res.status(200).send();
  } catch (error) {
    console.error(error);
    if (!userID) res.status(401).send();
    else res.status(500).send();
  }
};
