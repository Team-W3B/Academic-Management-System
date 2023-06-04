import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate, } from 'react-router-dom';
import axios from 'axios';
import {useDispatch} from "react-redux";
import { changeUser } from './../store'
import styles from "./../scss/Login.module.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from "react-redux";

export default function Login() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const User = (e) => {
    let user = {
      logIn_id,
      logIn_pw,
    };

    axios
      .post("/api/login", user, {withCredentials : true})
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          console.log("로그인");
          console.log(res);
          console.log(res.data);
          console.log(res.config);
          dispatch(changeUser(res.data.userInfo));
          alert("로그인에 성공하였습니다.");
          navigate("/MainPage");
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert("존재하지 않는 사용자입니다");
        }
        if (error.response.status === 500) {
          alert("서버 오류 발생!(로그인)");
        }
      });
  };

  const [logIn_id, setid] = useState("");
  const [logIn_pw, setPw] = useState("");

  const [idValid, setidValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  useEffect(() => {
    if (idValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [idValid, pwValid]);

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
  
    return (
      <div className={styles.login_signup}>
        <div className={styles.whiteCard_login}>
          <div className={styles.wrapper}>

            <div className={styles.loginTitle}>
              <p style={{ margin: "0px" }} className={styles.signatureFontColor}>광운대학교</p>
              <p>학사정보 관리시스템</p>
            </div>
  
            <div className={styles.loginContent}>

              {/* 학번을 입력하세요! */}
              <div className={styles.inputTitle}>학번을 입력하세요</div>
              <div className={styles.inputWrap}>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="20xxxxxxxx"
                  value={logIn_id}
                  onChange={handleid}
                />
              </div>
  
              <div className={styles.errorMessageWrap}>
                {
                  !idValid
                  && logIn_id.length > 0
                  && (
                    <div>올바른 학번을 입력해주세요.</div>
                  )
                }
              </div>
  
              {/* 비밀번호를 입력하세요! */}
              <div className={styles.inputTitle}>
                <p>비밀번호를 입력하세요</p>
                <p className={styles.signatureFontColor} style={{ marginLeft: "auto" }} >비밀번호를 잊었나요?</p>
              </div>
  
              <div className={styles.inputWrap}>
                <input
                  className={styles.input}
                  type="password"
                  placeholder="**********"
                  value={logIn_pw}
                  onChange={handlePw}
                />
              </div>
  
              <div className={styles.errorMessageWrap}>
                {!pwValid && logIn_pw.length > 0 && (
                  <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                )}
              </div>
  
              <button onClick={User} disabled={notAllow} className={styles.bottomButton}>
                로그인
              </button>
  
              
              <Container className={styles.message}>
                <Row>
                  <Col></Col>
                  <Col xs={5}> KLAS가 처음이에요? </Col>
                  <Col className={styles.signatureFontColor} onClick={ () => {navigate( '/Signup' ) } }>  신입생만 누르셈. </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
