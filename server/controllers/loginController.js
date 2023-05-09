var model = require("..models");

exports.loginProcess = async (req, res) => {
  try {
    // 로그인 시도
    const id = req.body.login_id;
    const password = await bycrpt.hash(req.body.login_pw, 10);

    const student = await model.student.findOne({
      where: { student_id: id, passwd: password },
    });
    if (student) {
      // 학생 로그인 성공
      req.session.userID = student.student_id;
      res.status(200).send({ message: "로그인에 성공하였습니다." });
      return;
    }

    const professor = await model.professor.findOne({
      where: { professor_id: id, passwd: password },
    });
    if (professor) {
      // 교수 로그인 성공
      req.session.userID = professor.professor_id;
      res.status(200).json({ message: "로그인에 성공하였습니다." });
      return;
    }

    // 로그인 실패
    res.status(400).json({ message: "존재하지 않는 사용자입니다." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "서버 오류 발생! (로그인)" });
  }
};
