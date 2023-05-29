const model = require("../models");
const { QueryTypes } = require("sequelize");
const { sequelize } = require("../models/index");

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
    let lecture_day_of_week = lecture.day_of_week;

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
  try {
    // 로그인한 학번을 세션에서 가져옴
    let userId = req.session.userID;
    //let userId = 2018202043;
    console.log(userId);

    // ID 값을 사용하여 학생이 수강하고 있는 모든 강의 정보를 조회하는 쿼리문
    const query = `
    SELECT
      Professors.name,
      Lectures.lecture_name,
      Lectures.lecture_room,
      Schedules.day_of_week,
      Schedules.period
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
    `;
    // 쿼리 실행
    const lectures = await sequelize.query(query, {
      type: QueryTypes.SELECT,
      replacements: { studentId: userId },
    });

    let sortedLectures = sortedData(lectures);
    res.status(200).json(mappingWithId(sortedLectures));
  } catch (error) {
    console.error(error);
    if (!req.session.userID) res.status(401).send();
    else res.status(500).send();
  }
};

exports.homeDetail = async (req, res) => {
  try {
    // 로그인한 학번을 세션에서 가져옴
    let userID = req.session.userID;
    //let userID = 2018202043;

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

    console.log(lecDetail);
    res.status(200).send(lecDetail);
  } catch (error) {
    if (!req.session.userID) res.status(401).send();
    else res.status(500).send();
  }
};
