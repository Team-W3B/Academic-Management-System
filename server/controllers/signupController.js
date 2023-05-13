var model = require("../models");
const bcrypt = require("bcrypt");

// 회원가입 페이지의 대학 및 학부를 띄우는 함수
exports.signupPage = async (req, res) => {
  const college_department = await model.college.findAll({});
};

// 회원가입 버튼을 누를 때 학생 및 교수 데이터를 DB에 저장하는 함수
exports.signupData = async (req, res) => {
  try {
    // 비밀번호 암호화
    let encrypted = await bcrypt.hash(req.body.signUp_pw, 10);
    let member_type = req.body.signUp_check;
    let signUp_birth = req.body.signUp_birth.split(".").join("-");
    let department = req.body.signUp_major;

    //대학 이름을 토대로 대확과 학부 id를 DB에서 가져옴
    let department_data = await model.Department.findOne({
      where: { department_name: department },
      attributes: ["college_id", "department_id"],
    });

    let college_id = department_data.college_id;
    let department_id = department_data.department_id;

    if (member_type == "학생") {
      //학생일 경우 학생 테이블에 정보 저장
      var datas = {
        student_id: req.body.signUp_id,
        member_type: member_type,
        college_id: college_id,
        department_id: department_id,
        grade_semester_id: 1,
        passwd: encrypted,
        name: req.body.signUp_name,
        birth: signUp_birth,
        tel: req.body.signUp_phonenum,
        email: req.body.signUp_email,
      };
      await model.Student.create(datas);
    }

    //교수일 경우 교수 테이블에 정보 저장
    if (member_type == "교수") {
      var datas = {
        professor_id: req.body.signUp_id,
        member_type: member_type,
        college_id: req.body.signUp_college,
        department_id: req.body.signUp_department,
        grade_semester_id: 1,
        passwd: encrypted,
        name: req.body.signUp_name,
        birth: signUp_birth,
        tel: req.body.signUp_phonenum,
        email: req.body.signUp_email,
      };

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

// 회원가입이 완료한 후 회원 가입한 이름이 뜨게 하는 함수
exports.signupComplete = async (req, res) => {};