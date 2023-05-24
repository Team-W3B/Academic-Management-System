const model = require("../models");
const { Sequelize } = require("sequelize");

exports.homeForm = async (req, res) => {
  try {
    // 로그인한 학번을 세션에서 가져옴
    let userId = req.session.userID;
    //let userId = 2018202043;

    // ID 값을 사용하여 학생이 수강하고 있는 모든 강의 정보를 조회
    let lectures = await model.Student_Lecture.findAll({
      where: {
        student_id: userId,
      },
      attributes: ["lecture_day_of_week", "lecture_period"],
      include: {
        model: model.Lecture,
        where: {
          id: Sequelize.col("Student_Lecture.lecture_id"),
        },
        attributes: ["lecture_name", "lecture_room"],
        include: {
          model: model.Professor,
          where: {
            id: Sequelize.col("Lecture.professor_id"),
          },
          attributes: ["name"],
        },
      },
    });

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

    let lectureData = {};
    var id = 0;

    const dayOrder = {
      mon: 1,
      tue: 2,
      wed: 3,
      thu: 4,
      fri: 5,
      sat: 6,
      sun: 7,
    };

    let sortedLectures = lectures.sort((a, b) => {
      const dayA = dayOrder[a.lecture_day_of_week];
      const dayB = dayOrder[b.lecture_day_of_week];

      //요일 정렬
      if (dayA < dayB) {
        return -1;
      } else if (dayA > dayB) {
        return 1;
      } else {
        // 동일한 요일 내에서 period를 비교하여 정렬
        if (a.lecture_period < b.lecture_period) {
          return -1;
        } else if (a.lecture_period > b.lecture_period) {
          return 1;
        } else {
          return 0;
        }
      }
    });

    //정렬한 데이터를 기반으로 Json 배열 생성
    sortedLectures.forEach((lecture) => {
      let lecture_day_of_week = lecture.lecture_day_of_week;
      let lectureInfo = {
        id: id++,
        home_lec: lecture.Lecture.lecture_name,
        home_lec_class: lecture.Lecture.lecture_room,
        home_prof: lecture.Lecture.Professor.name,
        home_lectime: lecture.lecture_period,
      };

      if (!lectureData[lecture_day_of_week]) {
        lectureData[lecture_day_of_week] = [];
        id = 0;
      }
      lectureData[lecture_day_of_week].push(lectureInfo);
    });

    // 클라이언트에게 JSON 파일 Response
    res.status(200).json(lectureData);
  } catch (error) {
    console.log("hello here is home 500");
    console.error(error);
    res.status(500).send();
  }
};
