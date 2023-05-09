var model = require("..models");
const bcrypt = require("bcrypt");

exports.signupData = async (req, res) => {
  try {
    // 비밀번호 암호화
    var password = await bcrypt.hash(req.body.signUp_pw, 10);
    var member_type_id = req.body.signUp_member_type_id;
    var member_type = await model.member_type.findOne({
      where: { member_type_id: member_type_id },
    });

    // request body에서 data들을 객체에 포함
    // 회원가입 시 1학년 1학기로 지정
    var datas = {
      id: req.body.signUp_id,
      member_id: member_type_id,
      pw: password,
      college_id: req.body.signUp_college,
      department_id: req.body.signUp_department,
      grade_semester_id: 1,
      name: req.body.signUp_name,
      birth: req.body.signUp_birth,
      phonenum: req.body.signUp_phonenum,
      email: req.body.signUp_email,
    };

    // 학생 or 교수 테이블에 데이터 저장
    if (member_type === "학생") {
      await model.student.create(datas);
    } else if (member_type === "교수") {
      await model.professor.create(datas);
    }

    res.status(200).json({ message: "회원가입에 성공하였습니다." });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "서버 오류가 발생하였습니다." });
  }
};
