const model = require("../models");
const bcrypt = require("bcrypt");

// 로그인시 DB에 저장된 비밀번호랑 일치하는지 확인하는 함수
exports.loginProcess = async (req, res) => {
  try {
    const id = req.body.logIn_id;
    const request_password = req.body.logIn_pw;

    const student = await model.Student.findOne({
      where: { student_id: id },
      attributes: ["passwd"],
    });
    if (student && (await bcrypt.compare(request_password, student.passwd))) {
      // 학생 로그인 성공
      req.session.userID = id;
      res.status(200).send();
      return;
    }

    const professor = await model.Professor.findOne({
      where: { professor_id: id },
      attributes: ["passwd"],
    });
    if (
      professor &&
      (await bcrypt.compare(request_password, professor.passwd))
    ) {
      // 교수 로그인 성공
      req.session.userID = id;
      res.status(200).send();
      return;
    }

    // 로그인 실패
    res.status(401).send();
    return;
  } catch (error) {
    // 서버쪽 오류
    console.error(error);
    res.status(500).send();
  }
};