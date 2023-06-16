import styles from "./../scss/Lec.module.scss";
import HeaderNav from "./../component/HeaderNav";
import Footer from "./../component/Footer";
import Lec from "./../component/Lec";
// import File from "../component/File";

import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from 'axios';
import info from "../data/lecfile";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import {setIndex} from '../store';
import {  Link, useNavigate  } from "react-router-dom";

export default function LecPage_file() {
    //uerID 가지고 와서 교수이면 File_prof로 학생이면 File로
    return (
        <>
            <HeaderNav />
            <Lec />
            <div className={styles.hbox_lec}>
                <File />
            </div>
            <Footer />
        </>
    );
};


let File = () => {
    const lecture_name = useSelector((state)=>state.lecture.lecture); //querystring 전달인자
    let userID = useSelector( (state) => state.userID ); // userID 불러오기
    const dispatch = useDispatch();

    let [lecinfo, setLecInfo] = useState(info);
    /* useEffect(() => {
        const getLecInfo = () => {
          try {
            const response = axios.get('/api/lecpage/file', {
              params: {
                lecture: lecture_name,
                userID: userID
              },
              withCredentials: true
            });
            console.log(response);
            if (response.data === 200) {
              const copy = { ...response.data };
              setLecInfo(copy);
            }
          } catch (error) {
            console.log(error.data);
            if (error.response.data === 401) {
              alert("권한없음(강의페이지)");
            }
            if (error.response.data === 500) {
              alert("서버 오류 발생!(강의페이지)");
            }
          }
        };
      
        getLecInfo();
      }, []); */
    const navigate = useNavigate();

    const handleIndex = (index) => {
        dispatch(setIndex(index));
        navigate('/LecPage_file_detail');
    }
    return (
      <div className={styles.v_card_big}>
        <h1 className={`${styles.titleText} ${styles.mainColorText}`}> 자료실 </h1>
        <Container >
            {
                lecinfo.map(function (a, i) {
                    return (
                        <Row className={` ${styles.hbox} `}>
                            <Col onClick={ () => handleIndex(a.lecPage_index)} lg={6} className={styles.contentTextNotice}> {a.lecPage_title} </Col>
                            <Col></Col>
                            <Col lg={3} className={`${styles.contentTextNotice} `}> {a.lecPage_date} </Col>
                        </Row>
                    );
                })
            }
        </Container>

        </div>
    );
}