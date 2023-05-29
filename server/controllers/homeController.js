const model = require("../models");
const { QueryTypes } = require("sequelize");
const { sequelize } = require("../models/index");

function sortedData(lectures) {
  lectures.sort((a, b) => {
    const periodA = a.lecture_period;
    const periodB = b.lecture_period;

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
    let lecture_day_of_week = lecture.lecture_day_of_week;

    let lectureInfo = {
      id: 0,
      home_lec: lecture.lecture_name,
      home_lec_class: lecture.lecture_room,
      home_prof: lecture.professor_name,
      home_lectime: lecture.lecture_period,
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
    console.log(req.session);
    console.log(userId);

    // ID 값을 사용하여 학생이 수강하고 있는 모든 강의 정보를 조회
    // let lectures = await model.Student_Lecture.findAll({
    //   raw: true,
    //   where: {
    //     student_id: userId,
    //   },
    //   attributes: ["lecture_day_of_week", "lecture_period"],
    //   include: [
    //     {
    //       model: model.Lecture,
    //       required: false,
    //       // where: {
    //       //   professor_id: Sequelize.col("Student_Lecture.lecture_professor_id"),
    //       //   id: Sequelize.col("Student_Lecture.lecture_id"),
    //       //   day_of_week: Sequelize.col("Student_Lecture.lecture_day_of_week"),
    //       //   period: Sequelize.col("Student_Lecture.lecture_period"),
    //       //   grade_semester_id: Sequelize.col(
    //       //     "Student_Lecture.lecture_grade_semester_id"
    //       //   ),
    //       // },
    //       where: Sequelize.and(
    //         {
    //           professor_id: Sequelize.col(
    //             "Student_Lecture.lecture_professor_id"
    //           ),
    //         },
    //         { id: Sequelize.col("Student_Lecture.lecture_id") },
    //         {
    //           day_of_week: Sequelize.col("Student_Lecture.lecture_day_of_week"),
    //         },
    //         { period: Sequelize.col("Student_Lecture.lecture_period") },
    //         {
    //           grade_semester_id: Sequelize.col(
    //             "Student_Lecture.lecture_grade_semester_id"
    //           ),
    //         }
    //       ),
    //       attributes: ["lecture_name", "lecture_room", "day_of_week", "period"],
    //       include: {
    //         model: model.Professor,
    //         required: false,
    //         where: {
    //           id: Sequelize.col("Lecture.professor_id"),
    //         },
    //         attributes: ["name"],
    //       },
    //     },
    //   ],
    // });
    // ID 값을 사용하여 학생이 수강하고 있는 모든 강의 정보를 조회하는 쿼리문
    const query = `
    SELECT
      SL.lecture_day_of_week,
      SL.lecture_period,
      L.lecture_name,
      L.lecture_room,
      P.name AS professor_name
    FROM
      Student_Lectures AS SL
      LEFT JOIN Lectures AS L ON SL.lecture_id = L.id AND SL.lecture_professor_id = L.professor_id AND SL.lecture_day_of_week = L.day_of_week AND SL.lecture_period = L.period AND SL.lecture_grade_semester_id = L.grade_semester_id
      LEFT JOIN Professors AS P ON L.professor_id = P.id
    WHERE
      SL.student_id = :studentId
    `;
    // 쿼리 실행
    const lectures = await sequelize.query(query, {
      type: QueryTypes.SELECT,
      replacements: { studentId: userId },
    });

    console.log(lectures.length);
    console.log(lectures);

    // if (!lectures) {
    //   // 교수님이 강의 중인 강의 목록에서 전달
    //   lectures = await model.Lecture.findAll({
    //     where: {
    //       professor_id: userId,
    //     },
    //     attributes: ["day_of_week", "period", "lecture_name", "lecture_room"],
    //     include: [
    //       {
    //         model: model.Professor,
    //         attributes: ["name"],
    //         where: {
    //           id: userId,
    //         },
    //       },
    //     ],
    //   });
    // }
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

    // DB에서 강의명, 강의 남은 개수, 총 강의 수, 강의 기간, 과제 남은 수, 총 과제 수, 과제 기간
    const query = `
    SELECT
      L.lecture_name,
    FROM
      Student_Lectures AS SL
      LEFT JOIN Lectures AS L ON SL.lecture_id = L.id AND SL.lecture_professor_id = L.professor_id AND SL.lecture_day_of_week = L.day_of_week AND SL.lecture_period = L.period AND SL.lecture_grade_semester_id = L.grade_semester_id
    WHERE
      SL.student_id = :studentId
    `;

    // 쿼리 실행
    const lecDetail = await sequelize.query(query, {
      type: QueryTypes.SELECT,
      replacements: { studentId: userID },
    });
  } catch (error) {
    if (!req.session.userID) res.status(401).send();
    else res.status(500).send();
  }
};
