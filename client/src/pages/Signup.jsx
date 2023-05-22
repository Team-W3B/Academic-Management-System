import React, { useEffect, useState  } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../signup_store.js";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton, SplitButton } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import coll from "../data/college_data.js";
import { setsignUpName } from "../store.js";
import styles from "./../scss/Signup.module.scss"

// const college_name = {
// //college_name.fir
//   fir:"전자정보공과대학",
//   sec:"소프트웨어융합대학"
// };
// const major_name = {
//   //major_name.fir.[0]
//   fir: ["전자공학과"],
//   sec: ["컴퓨터정보공학부", "소프트웨어학부", "정보융합학부"],
// };


export default function Signup() {
  let navigate = useNavigate();
  //---------
  //const signname = useSelector((state) => state.user.value)

  const dispatch = useDispatch();
  
  const User = (e) => {
    let user = {
      signUp_id,
      signUp_pw,
      signUp_name,
      signUp_birth,
      signUp_phonenum,
      signUp_email,
      signUp_college,
      signUp_major,
      signUp_check,
    };
    dispatch(setsignUpName(signUp_name));
    console.log(signUp_name);
    axios
      .post("/api/signup", user)
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          // console.log("로그인");
          dispatch(signupUser(res.status.userInfo));
          alert("회원가입에 성공하였습니다.");
          navigate("/SignUpComplete");
        }
      })
      .catch((error) => {
        if (error.response.status == 409) {
          alert("중복 아이디(회원가입)");
        }
        if (error.response.status == 500) {
          alert("서버 오류 발생!(회원가입)");
        }
      });
  };

  const [signUp_id, setid] = useState("");
  const [signUp_pw, setPw] = useState("");
  const [signUp_name, setName] = useState("");
  const [signUp_birth, setBirth] = useState("");
  const [signUp_phonenum, setPhonenum] = useState("");
  const [signUp_email, setEmail] = useState("");
  const [signUp_college, setCollege] = useState("");
  const [signUp_major, setMajor] = useState("");
  const [signUp_check, setCheck] = useState("");

  const [idValid, setidValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [birthValid, setBirthValid] = useState(false);
  const [phonenumValid, setPhonenumValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [collegeValid, setCollegeValid] = useState(false);
  const [majorValid, setMajorValid] = useState(false);
  const [checkValid, setCheckValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
  let [valu,setvalu]=useState(coll); // college 등록
  /*----------------*/
  let [collegemajor_list,setcollegemajor_list]=useState(coll);
  //const [major_list,setmajor_list]=useState([]);
  // ['fir','sec'].map((a,i) =>{
  //   return(
  //     <li key={i} i={i} collegemajor_list={collegemajor_list[a]}></li>
  //   )
  // })
  let [i,a] = useState(0);
   
   useEffect(() =>{
    
    if(signUp_college==collegemajor_list.colleg[0].a){
      valu=collegemajor_list.maj[0];
      a(i=0);
      //i=0;
    }
    else{
      valu=collegemajor_list.maj[1];
      a(i=1);
      //console.log(i);
    }
  },[collegemajor_list,signUp_college,i]);

  useEffect(() => {
    if (
      idValid &&
      pwValid &&
      nameValid &&
      birthValid &&
      phonenumValid &&
      emailValid
    ) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [idValid, pwValid, nameValid, birthValid, phonenumValid, emailValid]);
  
  const handleid = (e) => {
    setid(e.target.value);
    const regex = /^[2]{1}[0]{1}[0-9+]{8}$/;
    if (regex.test(e.target.value)) {
      setidValid(true);
    } else {
      setidValid(false);
    }
  };
  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };
  const handleName = (e) => {
    setName(e.target.value);
    const regex = /^[가-힣]{2,15}$/;
    if (regex.test(e.target.value)) {
      setNameValid(true);
    } else {
      setNameValid(false);
    }
    
  };
  const handleBirth = (e) => {
    setBirth(e.target.value);
    const regex =
      /^(19[0-9][0-9]|20\d{2}).(0[0-9]|1[0-2]).(0[1-9]|[1-2][0-9]|3[0-1])$/;
    if (regex.test(e.target.value)) {
      setBirthValid(true);
    } else {
      setBirthValid(false);
    }
  };

  const handlePhonenum = (e) => {
    setPhonenum(e.target.value);
    const regex = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/;
    if (regex.test(e.target.value)) {
      setPhonenumValid(true);
    } else {
      setPhonenumValid(false);
    }
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
    //console.log(signUp_email);
  };

  const handlecollege = (e) => {
    setCollege(e);
    //console.log(signUp_collge);
    
  //  // useEffect(() =>{
  //     if(signUp_college==collegemajor_list.colleg[0].a){
  //       valu=collegemajor_list.maj[0];
  //     }
  //     else{
  //       valu=collegemajor_list.maj[1];
  //     }
  //  // });
    //console.log(valu);
    
  };
  const handlemajor = (e) => {
    setMajor(e);
    //console.log(signUp_major);
  };

  const handlecheck = (e) => {
    setCheck(e);

    //console.log(signUp_check);
  };
  

  return (
    <div className={styles.login_signup}>
      <div className={styles.whiteCard_signup}>
        <div className={styles.wrapper}>
        <div className={styles.loginTitle}>
            <p style={{ margin: "0px" }} className={styles.signatureFontColor}>광운대학교</p>
            <p>학사정보 관리시스템</p>
          </div>

        {/* 학번입력 */}
        <div className={styles.loginContent}>
            <div className={styles.inputWrap}>
            <input
              className={styles.input}
              type="text"
              placeholder="학번을 입력하세요"
              value={signUp_id}
              onChange={handleid}
            />
          </div>
          {/* 학번오류 */}
          <div className={styles.errorMessageWrap}>
            {!idValid && signUp_id.length > 0 && (
              <div>올바른 학번을 입력해주세요.</div>
            )}
          </div>

          {/* 비밀번호 입력 */}
          <div className={styles.inputWrap}>
              <input
                className={styles.input}
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={signUp_pw}
              onChange={handlePw}
            />
          </div>
          {/* 비밀번호 오류 */}
          <div className={styles.errorMessageWrap}>
            {!pwValid && signUp_pw.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )}
          </div>

          {/* 이름 입력 */}
          <div className={styles.inputWrap}>
              <input
                className={styles.input}
              type="name"
              placeholder="이름을 입력하세요"
              value={signUp_name}
              onChange={handleName}
            />
          </div>
          {/* 이름 오류 */}
          <div className={styles.errorMessageWrap}>
            {!nameValid && signUp_name.length > 0 && (
              <div>올바르지 않은 형식입니다.</div>
            )}
          </div>
          <Container>
            <Row>
              <Col sm={5}>                
                <div className={styles.inputTitle}>
                  단과대
                  <Dropdown>
                    <SplitButton
                      variant=""
                      id="dropdown-size-large"
                      title={signUp_college}
                      onSelect={handlecollege}
                      value={signUp_college}
                    >
                      <Dropdown.Item eventKey={collegemajor_list.colleg[0].a}>
                        {collegemajor_list.colleg[0].a}
                      </Dropdown.Item>
                      <Dropdown.Item eventKey={collegemajor_list.colleg[0].b}>
                        {collegemajor_list.colleg[0].b}
                      </Dropdown.Item>
                      {/* <Dropdown.Item eventKey="공과대학">공과대학</Dropdown.Item>
                      <Dropdown.Item eventKey="자연과학대학">자연과학대학</Dropdown.Item>
                      <Dropdown.Item eventKey="인문사회과학대학">인문사회과학대학</Dropdown.Item>
                      <Dropdown.Item eventKey="정책법학대학">정책법학대학</Dropdown.Item>
                      <Dropdown.Item eventKey="경영대학">경영대학</Dropdown.Item> */}

                    </SplitButton>
                  </Dropdown>
                </div>
              </Col>
              <Col sm={5}>
                <div className={styles.inputTitle}>
                  학부(과)
                  <Dropdown>
                    
                    <DropdownButton
                      variant=""
                      id="dropdown-basic"
                      title={signUp_major}
                      onSelect={handlemajor}
                      value={signUp_major}
                    >
                        <Dropdown.Item  eventKey={valu.maj[i].a} >
                          {valu.maj[i].a}
                        </Dropdown.Item>
                        <Dropdown.Item  eventKey={valu.maj[i].b} >
                          {valu.maj[i].b}
                        </Dropdown.Item>
                        <Dropdown.Item  eventKey={valu.maj[i].c} >
                          {valu.maj[i].c}
                        </Dropdown.Item>
                      {/* <Dropdown.Item eventKey={collegemajor_list.sec[0].signUp_major}>
                        {collegemajor_list.sec[0].signUp_major}
                      </Dropdown.Item>
                      <Dropdown.Item eventKey={collegemajor_list.sec[1].signUp_major}>
                        {collegemajor_list.sec[1].signUp_major}
                      </Dropdown.Item>
                      <Dropdown.Item eventKey={collegemajor_list.sec[2].signUp_major}>
                        {collegemajor_list.sec[2].signUp_major}
                      </Dropdown.Item> */}
                    </DropdownButton>
                  </Dropdown>
                </div>
              </Col>
              <Col sm={2}>
                <Form>

                  <Form.Group>
                    <Form.Check
                      onChange={() => {
                        handlecheck("학생");
                      }}
                      inline
                      label="학생"
                      name="group1"
                      type="radio"
                      id={`reverse-radio-1`}
                    />

                    <Form.Check
                      onChange={() => {
                        handlecheck("교수");
                      }}
                      inline
                      label="교수"
                      name="group1"
                      type="radio"
                      id={`reverse-radio-2`}
                    />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Container>

          <div className={styles.inputTitle}>생년월일을 입력하세요</div>
            <div className={styles.inputWrap}>
              <input
                className={styles.input}
              type="birth"
              placeholder="xxxx.xx.xx"
              value={signUp_birth}
              onChange={handleBirth}
            />
          </div>
          <div className={styles.errorMessageWrap}>
            {!birthValid && signUp_birth.length > 0 && (
              <div>올바르지 않은 형식입니다.</div>
            )}
          </div>

          <div className={styles.inputTitle}>핸드폰 번호를 입력하세요</div>
            <div className={styles.inputWrap}>
              <input
                className={styles.input}
              type="phonenum"
              placeholder="010-1234-5678"
              value={signUp_phonenum}
              onChange={handlePhonenum}
            />
          </div>
          <div className={styles.errorMessageWrap}>
            {!phonenumValid && signUp_phonenum.length > 0 && (
              <div>올바르지 않은 형식입니다.</div>
            )}
          </div>

          <div className={styles.inputTitle}>E-mail 주소를 입력하세요</div>
            <div className={styles.inputWrap}>
              <input
                className={styles.input}
              type="email"
              placeholder="email@gmail.com"
              value={signUp_email}
              onChange={handleEmail}
            />
          </div>
          <div className={styles.errorMessageWrap}>
            {!emailValid && signUp_email.length > 0 && (
              <div>올바르지 않은 형식입니다.</div>
            )}
          </div>

          <button onClick={User} disabled={notAllow} className={styles.bottomButton}>
            나도 이제 대학생

          </button>
          <Container className={styles.message}>
              <Row>
                <Col></Col>
                <Col xs={6}> 나 혹시 화석...? </Col>
                <Col className={styles.signatureFontColor} onClick={ () => {navigate( "/Login" ) } }>  뒤로가기 </Col>
              </Row>
            </Container>
        </div>
      </div>
    </div>
    </div>
  );
}