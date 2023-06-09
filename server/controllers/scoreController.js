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

async function queryScore(userID) {
  const scoreQUERY = `
    SELECT
      Student_lectures.score AS score_grade,
      Student_lectures.is_retake AS score_retake,
      Lectures.grade_semester AS score_semester,
      Lectures.major AS score_isMajor,
      Lectures.lecture_name AS score_lec,
      Lectures.credit_point AS score_duration,
      Departments.department_name AS score_department
    FROM
      Student_lectures
      LEFT JOIN Lectures ON Student_Lectures.lecture_id = Lectures.id
      LEFT JOIN Professors ON Lectures.professor_id = Professors.id
      LEFT JOIN Departments ON Professors.department_id = Departments.id
    WHERE
      Student_lectures.student_id = :userID
    ORDER BY
      score_semester
  `;

  let data = await sequelize.query(scoreQUERY, {
    type: QueryTypes.SELECT,
    replacements: {
      userID: userID,
    },
  });

  let score = [
    {
      score_semester: "1-1",
      score_contents: [],
    },
    {
      score_semester: "1-2",
      score_contents: [],
    },
    {
      score_semester: "2-1",
      score_contents: [],
    },
    {
      score_semester: "2-2",
      score_contents: [],
    },
    {
      score_semester: "3-1",
      score_contents: [],
    },
    {
      score_semester: "3-2",
      score_contents: [],
    },
    {
      score_semester: "4-1",
      score_contents: [],
    },
    {
      score_semester: "4-2",
      score_contents: [],
    },
  ];

  let preSemester = null;
  let id = -1;
  await data.forEach((element) => {
    if (element.score_semester != preSemester) id++;

    score[id].score_contents.push({
      score_isMajor: element.score_isMajor,
      score_lec: element.score_lec,
      score_department: element.score_department,
      score_duration: element.score_duration,
      score_grade: element.score_grade,
      score_retake: element.score_retake,
    });

    preSemester = element.score_semester;
  });

  return score;
}

exports.scoreData = async (req, res) => {
  // 로그인한 학번을 세션에서 가져옴
  //let userID = await getUserID(req);
  try {
    // 학생 ID를 쿼리스트링에서 가져옴
    const userID = req.query.score_ID;

    const data = await queryScore(userID);
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    if (!userID) res.status(401).send();
    else res.status(500).send();
  }
};
