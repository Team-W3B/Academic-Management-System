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

async function queryEnrollSearch(major, department, lecture) {
  const query = `
    SELECT
      Lectures.major AS reg_majCheck,
      Lectures.id AS reg_num,
      Lectures.lecture_name AS reg_lec,
      Lectures.credit_point AS reg_score,
      Professors.name AS reg_prof,
      Plans.lectureType AS reg_type,
      Plans.leftover - COUNT(Carts.lecture_id) AS reg_spare_num
    FROM
      Lectures
      LEFT JOIN Professors ON Lectures.professor_id = Professors.id
      LEFT JOIN Schedules ON Lectures.id = Schedules.lecture_id
      LEFT JOIN Plans ON Lectures.id = Plans.lecture_id
      LEFT JOIN Carts ON Lectures.id = Carts.lecture_id
      LEFT JOIN Departments ON Professors.department_id = Departments.id
    WHERE
      Lectures.major = :major and Departments.department_name = :department and Lectures.lecture_name = :lecture and Carts.lecture_id = Lectures.id
	  GROUP BY
		  Lectures.id;
  `;
}

exports.enrollSearch = async (req, res) => {
  // 로그인한 학번을 세션에서 가져옴
  //let userID = await getUserID(req);
  try {
    const major = req.query.reg_majCheck;
    const department = req.query.reg_major;
    const lecture = req.query.reg_lec;

    let data = await queryEnrollSearch(major, department, lecture);
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    if (!userID) res.status(401).send();
    else res.status(500).send();
  }
};

exports.enrollResponse = async (req, res) => {
  // 로그인한 학번을 세션에서 가져옴
  //let userID = await getUserID(req);
  try {
    // ID, 학년학기, 수강여부, 강의명을 쿼리스트링에서 가져옴
    let userID = req.query.userID;
    const grade_semester = req.query.planSearch_semester;
    const isMyLecture = req.query.planSearch_check_lec;
    const lecture = req.query.planSearch_lec;

    let data = await querySearch(userID, grade_semester, isMyLecture, lecture);
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    if (!userID) res.status(401).send();
    else res.status(500).send();
  }
};

exports.enrollRequest = async (req, res) => {
  // 로그인한 학번을 세션에서 가져옴
  //let userID = await getUserID(req);
  try {
    // ID, 학년학기, 수강여부, 강의명을 쿼리스트링에서 가져옴
    let userID = req.query.userID;
    const grade_semester = req.query.planSearch_semester;
    const isMyLecture = req.query.planSearch_check_lec;
    const lecture = req.query.planSearch_lec;

    let data = await querySearch(userID, grade_semester, isMyLecture, lecture);
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    if (!userID) res.status(401).send();
    else res.status(500).send();
  }
};

exports.enrollDelete = async (req, res) => {
  // 로그인한 학번을 세션에서 가져옴
  //let userID = await getUserID(req);
  try {
    // ID, 학년학기, 수강여부, 강의명을 쿼리스트링에서 가져옴
    let userID = req.query.userID;
    const grade_semester = req.query.planSearch_semester;
    const isMyLecture = req.query.planSearch_check_lec;
    const lecture = req.query.planSearch_lec;

    let data = await querySearch(userID, grade_semester, isMyLecture, lecture);
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    if (!userID) res.status(401).send();
    else res.status(500).send();
  }
};

exports.enrollApply = async (req, res) => {
  // 로그인한 학번을 세션에서 가져옴
  //let userID = await getUserID(req);
  try {
    // ID, 학년학기, 수강여부, 강의명을 쿼리스트링에서 가져옴
    let userID = req.query.userID;
    const grade_semester = req.query.planSearch_semester;
    const isMyLecture = req.query.planSearch_check_lec;
    const lecture = req.query.planSearch_lec;

    let data = await querySearch(userID, grade_semester, isMyLecture, lecture);
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    if (!userID) res.status(401).send();
    else res.status(500).send();
  }
};
