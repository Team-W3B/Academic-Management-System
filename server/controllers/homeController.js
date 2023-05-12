var model = require("../models");
const { Sequelize } = require("sequelize");

exports.homeForm = async (req, res) => {
  try {
    // 로그인한 학번을 세션에서 가져옴
    const userId = req.session.userId;

    // ID 값을 사용하여 학생이 수강하고 있는 모든 강의 정보를 조회
    const lectures = await model.student_lecture.findAll({
      include: [
        {
          model: model.lecture,
          attributes: ["lecture_name", "lecture_room"],
          where: {
            lecture_id: Sequelize.col("student_lecture.lecture_id"),
          },
        },
        {
          model: model.professor,
          attributes: ["name"],
          where: {
            professor_id: Sequelize.col("lecture.professor_id"),
          },
        },
      ],
      where: {
        student_id: userId,
      },
      attributes: ["day_of_week", "period"],
      order: [
        ["day_of_week", "ASC"],
        ["period", "ASC"],
      ],
    });

    if (!lectures) {
      // 교수님이 강의 중인 강의 목록에서 전달
      lectures = await model.lecture.findAll({
        include: [
          {
            model: model.professor,
            attributes: ["name"],
            where: {
              professor_id: userId,
            },
          },
        ],
        where: {
          professor_id: userId,
        },
        attributes: ["day_of_week", "period", "lecture_name", "lecture_room"],
        order: [
          ["day_of_week", "ASC"],
          ["period", "ASC"],
        ],
      });
    }

    const lectureData = {};
    var id = 0;

    //시간표 요일별 정렬
    lectures.forEach((lecture) => {
      const day_of_week = lecture.day_of_week;
      const lectureInfo = {
        id: id++,
        lecture_name: lecture.lecture_name,
        lecture_room: lecture.lecture_room,
        professor: lecture.professor.name,
        period: lecture.period,
      };

      if (!lectureData[day_of_week]) {
        lectureData[day_of_week] = [];
        id = 0;
      }
      lectureData[day_of_week].push(lectureInfo);
    });

    // 클라이언트에게 JSON 파일 Response
    res.status(200).json(lectureData);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
};
