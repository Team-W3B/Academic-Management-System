const model = require("../models");
const bycrpt = require("bcrypt");

exports.loginProcess = async (req, res) => {
  try {
    const id = req.body.logIn_id;
    const password = req.body.logIn_pw;
    //const password = await bycrpt.hash(req.body.login_pw, 10);

    const student = await model.Student.findOne({
      where: { student_id: id, passwd: password },
    });
    if (student) {
      // 학생 로그인 성공
      req.session.userID = student.student_id;
      res.status(200).send();
      return;
    }

    const professor = await model.Professor.findOne({
      where: { professor_id: id, passwd: password },
    });
    if (professor) {
      // 교수 로그인 성공
      req.session.userID = professor.professor_id;
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

// 비밀번호 해싱 버전
// exports.loginProcess = async (req, res) => {
//   try {
//     const id = req.body.logIn_id;
//     const request_password = req.body.logIn_pw;

//     const student_pw = await model.Student.findOne({
//       where: { student_id: id },
//       attributes: [passwd],
//     });
//     if (student_pw && bycrpt.compare(request_password, student_pw)) {
//       // 학생 로그인 성공
//       req.session.userID = student.student_id;
//       res.status(200).send();
//       return;
//     }

//     const professor_pw = await model.Professor.findOne({
//       where: { professor_id: id },
//       attributes: [passwd],
//     });
//     if (professor_pw && bycrpt.compare(request_password, professor_pw)) {
//       // 교수 로그인 성공
//       req.session.userID = professor.professor_id;
//       res.status(200).send();
//       return;
//     }

//     // 로그인 실패
//     res.status(401).send();
//     return;
//   } catch (error) {
//     // 서버쪽 오류
//     console.error(error);
//     res.status(500).send();
//   }
// };
