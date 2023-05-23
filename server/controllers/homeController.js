const model = require("../models");
const { Sequelize } = require("sequelize");

exports.homeForm = async (req, res) => {
  try {
    // 로그인한 학번을 세션에서 가져옴
    let userId = req.session.userID;
    console.log(userId);
    console.log("hello here is home 200");

    // // ID 값을 사용하여 학생이 수강하고 있는 모든 강의 정보를 조회
    let lectures = await model.Student_Lecture.findAll({
      where: {
        student_id: userId,
      },
      attributes: ["lecture_day_of_week", "lecture_period"],
      include: {
        model: model.Lecture,
        where: {
          id: model.Student_Lecture.lecture_id,
        },
        attributes: ["lecture_name", "lecture_room"],
        include: {
          model: model.Professor,
          where: {
            id: model.Lecture.professor_id,
          },
          attributes: ["name"],
        },
      },
    });

    if (!lectures) {
      // 교수님이 강의 중인 강의 목록에서 전달
      lectures = await model.Lecture.findAll({
        where: {
          professor_id: userId,
        },
        attributes: ["day_of_week", "period", "lecture_name", "lecture_room"],
        include: [
          {
            model: model.Professor,
            attributes: ["name"],
            where: {
              id: userId,
            },
          },
        ],
      });
    }

    let lectureData = {};
    var id = 0;

    //시간표 요일별 정렬
    lectures.forEach((lecture) => {
      let lecture_day_of_week = lecture.day_of_week;
      let lectureInfo = {
        id: id++,
        lecture_name: lecture.lecture_name,
        lecture_room: lecture.lecture_room,
        professor: lecture.professor.name,
        period: lecture.period,
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
