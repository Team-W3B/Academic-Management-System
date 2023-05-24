const model = require("../models");
const bcrypt = require("bcrypt");

// 회원가입 버튼을 누를 때 학생 및 교수 데이터를 DB에 저장하는 함수
exports.signupData = async (req, res) => {
  try {
    // request data 처리 (비밀번호는 암호화)
    let encrypted = await bcrypt.hash(req.body.signUp_pw, 10);
    let member_type = req.body.signUp_check;
    let signUp_birth = req.body.signUp_birth.split(".").join("-");
    let department = req.body.signUp_major;

    //대학 이름을 토대로 대학과 학부 id를 DB에서 가져옴
    let department_data = await model.Department.findOne({
      where: { department_name: department },
      attributes: ["college_id", "id"],
    });

    let college_id = department_data.college_id;
    let department_id = department_data.id;

    var datas = {
      id: req.body.signUp_id,
      member_type: member_type,
      department_college_id: college_id,
      department_id: department_id,
      grade_semester_id: 1,
      passwd: encrypted,
      name: req.body.signUp_name,
      birth: signUp_birth,
      tel: req.body.signUp_phonenum,
      email: req.body.signUp_email,
    };

    //학생일 경우 학생 테이블에 정보 저장
    if (member_type == "학생") {
      await model.Student.create(datas);
    }

    //교수일 경우 교수 테이블에 정보 저장
    if (member_type == "교수") {
      await model.Professor.create(datas);
    }

    res.status(200).send();
    return;
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      // 아이디 중복 에러
      res.status(409).send();
    } else {
      // 서버 에러
      console.log(err.message);
      res.status(500).send();
    }
  }
};
