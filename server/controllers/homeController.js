const model = require("../models");
const { QueryTypes } = require("sequelize");
const { sequelize } = require("../models/index");
const fsPromises = require("fs").promises;
const path = require("path");

async function getUserID(req) {
  // request 헤더에서 sessionID 가져오기
  const sessionID = req.headers.cookie.split("=")[1];

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

function sortedData(lectures) {
  lectures.sort((a, b) => {
    const periodA = a.period;
    const periodB = b.period;

    // period가 빠른 순으로 정렬
    if (periodA < periodB) {
      return -1;
    } else if (periodA > periodB) {
      return 1;
    } else {
      return 0;
    }
  });

  //정렬된 강의목록 return
  return lectures;
}

function mappingToKor(day_of_week) {
  switch (day_of_week) {
    case "월":
      return "mon";
    case "화":
      return "tue";
    case "수":
      return "wed";
    case "목":
      return "thur";
    case "금":
      return "fri";
    case "토":
      return "sat";
    case "일":
      return "sun";
  }
}

function mappingWithId(sortedLectures) {
  var id = 0;

  let lectureData = {
    mon: [],
    tue: [],
    wed: [],
    thur: [],
    fri: [],
  };

  //정렬한 데이터를 기반으로 Json 배열 생성
  sortedLectures.forEach((lecture) => {
    let lecture_day_of_week = mappingToKor(lecture.day_of_week);

    let lectureInfo = {
      id: 0,
      home_lec: lecture.lecture_name,
      home_lec_class: lecture.lecture_room,
      home_prof: lecture.name,
      home_lectime: lecture.period,
    };

    if (lectureData[lecture_day_of_week].length != 0)
      lectureInfo.id = lectureData[lecture_day_of_week].at(-1).id + 1;

    lectureData[lecture_day_of_week].push(lectureInfo);
  });

  return lectureData;
}

exports.homeForm = async (req, res) => {
  // 로그인한 학번을 세션에서 가져옴
  //let userID = await getUserID(req);
  let userID = 2018202043;
  try {
    // ID 값을 사용하여 학생이 수강하고 있는 모든 강의 정보를 조회하는 쿼리문
    const query = `
    SELECT
      Professors.name,
      Lectures.lecture_name,
      Lectures.lecture_room,
      Schedules.day_of_week,
      GROUP_CONCAT(Schedules.period ORDER BY Schedules.period SEPARATOR ', ') AS period
    FROM
      Student_Lectures
    LEFT JOIN
      Professors ON Student_Lectures.professor_id = Professors.id
    LEFT JOIN 
      Lectures ON Student_Lectures.lecture_id = Lectures.id
    LEFT JOIN 
      Schedules ON Schedules.lecture_id = Lectures.id
    WHERE
      Student_Lectures.student_id = :studentId
    GROUP BY
      Professors.name, Lectures.lecture_name, Lectures.lecture_room, Schedules.day_of_week;
    `;

    // 쿼리 실행
    const lectures = await sequelize.query(query, {
      type: QueryTypes.SELECT,
      replacements: { studentId: userID },
    });

    let sortedLectures = sortedData(lectures);
    res.status(200).json(mappingWithId(sortedLectures));
  } catch (error) {
    console.error(error);
    if (!userID) res.status(401).send();
    else res.status(500).send();
  }
};

exports.homeDetail = async (req, res) => {
  // 로그인한 학번을 세션에서 가져옴
  //let userID = await getUserID(req);
  let userID = 2018202043;
  try {
    // DB에서 강의명, 강의 남은 개수, 총 강의 수, 강의 기간, 과제 남은 수, 총 과제 수, 과제 기간
    const query = `
    SELECT
      Lectures.lecture_name AS name,
      count(case when Boards.board_type_id = 3 and Boards.deadline > NOW() then 1 end) AS lec_left_total,
      count(case when Boards.board_type_id = 3 and Boards.deadline = (SELECT MIN(deadline) FROM Boards WHERE board_type_id = 3 AND deadline > NOW()) then 1 end) AS lec_left_prior,
      DATEDIFF(min(case when Boards.board_type_id = 3 and Boards.deadline > NOW() then Boards.deadline end), NOW()) AS lec_left_duration,
      count(case when Boards.board_type_id = 4 and Boards.deadline > NOW() then 1 end) AS ass_left_total,
      count(case when Boards.board_type_id = 4 and Boards.deadline = (SELECT MIN(deadline) FROM Boards WHERE board_type_id = 4 AND deadline > NOW()) then 1 end) AS ass_left_prior,
      DATEDIFF(min(case when Boards.board_type_id = 4 and Boards.deadline > NOW() then Boards.deadline end), NOW()) AS ass_left_duration
    FROM
      Student_Lectures
      LEFT JOIN Lectures ON Lectures.id = Student_Lectures.lecture_id
      LEFT JOIN Boards ON Student_Lectures.student_id = Boards.sl_student_id and Student_Lectures.lecture_id = Boards.sl_lecture_id
    WHERE
      Student_Lectures.student_id = :studentId
    GROUP BY
      Lectures.lecture_name;
    `;

    // 쿼리 실행
    const lecDetail = await sequelize.query(query, {
      type: QueryTypes.SELECT,
      replacements: { studentId: userID },
    });

    res.status(200).send(lecDetail);
  } catch (error) {
    console.error(error);
    if (!userID) res.status(401).send();
    else res.status(500).send();
  }
};

