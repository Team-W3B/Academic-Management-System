var model = require("..models");
const { Sequelize } = require("sequelize");

exports.homeForm = async (req, res) => {
  try {
    // 로그인한 학번을 세션에서 가져옴
    const userId = req.session.userId;

    // ID 값을 사용하여 사용자가 수강하고 있는 모든 강의 정보를 조회
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
    });

    if (!lectures) {
      // 교수님이 강의 중인 강의 목록에서 전달
      // 여기서부터 다시
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
      });
    }

    const lectureData = lectures.map((lecture) => {
      return {
        day_of_week: lecture.day_of_week,
        period: lecture.period,
        lecture_name: lecture.lecture_name,
        lecture_room: lecture.lecture_room,
        professor: lecture.professor.name,
      };
    });

    // 클라이언트에게 JSON 파일 Response
    res.status(200).json(lectureData);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "서버 오류 발생! (home)" });
  }
};
