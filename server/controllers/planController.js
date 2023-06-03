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

async function querySearch(userID, grade_semester, isMyLecture, lecture) {
  let searchQUERY = `
    SELECT
      planOut_classifier,
      planOut_reg_num,
      planOut_lec,
      planOut_credit,
      planOut_prof,
      GROUP_CONCAT(planOut_period ORDER BY FIELD(planOut_day, '월', '화', '수', '목', '금', '토')) AS planOut_lectime,
      planOut_type,
      planOut_left
      FROM
          (
          SELECT
            Lectures.major AS planOut_classifier,
            Lectures.id AS planOut_reg_num,
            Lectures.lecture_name AS planOut_lec,
            Lectures.credit_point AS planOut_credit,
            Professors.name AS planOut_prof,
            CONCAT(Schedules.day_of_week, GROUP_CONCAT(Schedules.period ORDER BY Schedules.period SEPARATOR '')) AS planOut_period,
			      Schedules.day_of_week AS planOut_day,
            Plans.lectureType AS planOut_type,
            Plans.leftover AS planOut_left
          FROM
            Lectures
            LEFT JOIN Professors ON Lectures.professor_id = Professors.id
            LEFT JOIN Schedules ON Lectures.id = Schedules.lecture_id
            LEFT JOIN Plans ON Lectures.id = Plans.lecture_id
            LEFT JOIN Student_Lectures ON Lectures.id = Student_Lectures.lecture_id
          WHERE
            Lectures.grade_semester = :grade_semester and Lectures.lecture_name = :lecture`;

  if (isMyLecture)
    searchQUERY += `and Student_Lectures.lecture_id = Lectures.id and Student_Lectures.student_id = :userID `;

  searchQUERY += `
          GROUP BY
            planOut_classifier,
            planOut_reg_num,
            planOut_lec,
            planOut_credit,
            planOut_prof,
            planOut_type,
            planOut_left,
            Schedules.day_of_week
          ORDER BY
            FIELD(Schedules.day_of_week, '월', '화', '수', '목', '금', '토')
          ) AS InnerQuery
      GROUP BY
          planOut_classifier,
          planOut_reg_num,
          planOut_lec,
          planOut_credit,
          planOut_prof,
          planOut_type,
          planOut_left;
    `;

  const data = await sequelize.query(searchQUERY, {
    type: QueryTypes.SELECT,
    replacements: {
      userID: userID,
      grade_semester: grade_semester,
      lecture: lecture,
    },
  });

  return data;
}

async function querybasicINFO(lectureID) {
  let basicInfoQUERY = `
    SELECT
      planDetail_lec,
      GROUP_CONCAT(planOut_period ORDER BY FIELD(planOut_day, '월', '화', '수', '목', '금', '토')) AS planOut_lectime,
      planDetail_semester,
      PlanDetail_reg_num,
      planOut_credit,
      PlanDetail_num_of_student,
      PlanDetail_assist,
      PlanDetail_prof,
      PlanDetail_email,
      PlanDetail_tel
    FROM
      (
      SELECT
        Lectures.lecture_name AS planDetail_lec,
        CONCAT(Schedules.day_of_week, GROUP_CONCAT(Schedules.period ORDER BY Schedules.period SEPARATOR '')) AS planOut_period,
        Schedules.day_of_week AS planOut_day,
        Lectures.grade_semester AS planDetail_semester,
        Lectures.id AS PlanDetail_reg_num,
        Lectures.credit_point AS planOut_credit,
        Plans.leftover AS PlanDetail_num_of_student,
        Plans.assistant AS PlanDetail_assist,
        Professors.name AS PlanDetail_prof,
        Professors.email AS PlanDetail_email
        Professors.tel AS PlanDetail_tel
      FROM
        Lectures
        LEFT JOIN Professors ON Lectures.professor_id = Professors.id
        LEFT JOIN Schedules ON Lectures.id = Schedules.lecture_id
        LEFT JOIN Plans ON Lectures.id = Plans.lecture_id
        LEFT JOIN Student_Lectures ON Lectures.id = Student_Lectures.lecture_id
      WHERE
        Lectures.id = :lectureID
      GROUP BY
        planOut_classifier,
        planOut_reg_num,
        planOut_lec,
        planOut_credit,
        planOut_prof,
        planOut_type,
        planOut_left,
        Schedules.day_of_week
      ORDER BY
        FIELD(Schedules.day_of_week, '월', '화', '수', '목', '금', '토')
      ) AS InnerQuery
    GROUP BY
      planDetail_lec,
      planDetail_semester,
      PlanDetail_reg_num,
      planOut_credit,
      PlanDetail_num_of_student,
      PlanDetail_assist,
      PlanDetail_prof,
      PlanDetail_email,
      PlanDetail_tel
  `;

  const data = await sequelize.query(basicInfoQUERY, {
    type: QueryTypes.SELECT,
    replacements: {
      lectureID: lectureID,
    },
  });

  let basicINFO = { basic_info: {} };

  basicINFO.basic_info = data[0];

  return data;
}

async function querydetailINFO(lectureID) {
  const outlineQUERY = `
    SELECT
      Plans.outline AS planDetail_outline
    FROM
      Plans
    WHERE
      Plans.lecture_id = :lectureID
  `;

  const percentageQUERY = `
    SELECT
      Plans.percent_attendance AS attendance,
      Plans.percent_midterm AS midterm,
      Plans.percent_finalterm AS finterm,
      Plans.percent_assignment AS ass,
      Plans.percent_attitude AS attitude,
      Plans.percent_quiz AS quiz,
      Plans.percent_etc AS etc
    FROM
      Plans
    WHERE
      Plans.lecture_id = :lectureID
  `;

  const weekPlanQUERY = `
    SELECT
      WeekPlans.week AS week,
      WeekPlans.content AS content,
      WeekPlans.operation AS operation
    FROM
      WeekPlans
    WHERE
      WeekPlans.plan_lecture_id = :lectureID
  `;

  let outline = await sequelize.query(outlineQUERY, {
    type: QueryTypes.SELECT,
    replacements: {
      lectureID: lectureID,
    },
  });

  let percentage = await sequelize.query(percentageQUERY, {
    type: QueryTypes.SELECT,
    replacements: {
      lectureID: lectureID,
    },
  });

  let weekPlan = await sequelize.query(weekPlanQUERY, {
    type: QueryTypes.SELECT,
    replacements: {
      lectureID: lectureID,
    },
  });

  let data = {
    detail_info: {
      planDetail_outline: {},
      planDetail_eval_rate: {},
      planDetail_15weeks: [],
    },
  };

  data.detail_info.planDetail_outline = outline[0];
  data.detail_info.planDetail_eval_rate = percentage[0];
  data.detail_info.planDetail_15weeks = weekPlan;

  return data;
}

// function addID(data) {
//   let id = 1;

//   data.forEach(element => {
//     element.id = id++
//   });
// }

exports.planSearch = async (req, res) => {
  // 로그인한 학번을 세션에서 가져옴
  let userID = await getUserID(req);
  try {
    const grade_semester = req.query.planSearch_semester;
    const isMyLecture = req.query.planSearch_check_lec;
    const lecture = req.query.planSearch_lec;

    let data = await querySearch(userID, grade_semester, isMyLecture, lecture);
    req.status(200).send(data);
  } catch (error) {
    console.error(error);
    if (!userID) res.status(401).send();
    else res.status(500).send();
  }
};

exports.planDetail = async (req, res) => {
  // 로그인한 학번을 세션에서 가져옴
  let userID = await getUserID(req);
  try {
    const lectureID = req.query.planDetail_regNum;

    let basicINFO = await querybasicINFO(lectureID);
    let detailINFO = await querydetailINFO(lectureID);

    let planDetail = {};
    planDetail.push(basicINFO);
    planDetail.push(detailINFO);

    res.status(200).send(planDetail);
  } catch (error) {
    if (!userID) res.status(401).send();
    else res.status(500).send();
  }
};
