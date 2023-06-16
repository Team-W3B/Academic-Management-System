/* eslint-disable */
import React, { useEffect,useState } from "react";
import styles from "./../scss/Lec.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import axios from 'axios';
import info from "../data/leclecture";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Lec_lecture() {
    const lecture_name = useSelector((state)=>state.lecture.lecture); //querystring 전달인자
    let userID = useSelector( (state) => state.userID ); // userID 불러오기
    const navigate = useNavigate();

    let [lecinfo, setLecInfo] = useState(info);
    /* useEffect(() => {
        let getLecInfo = () => {
             axios.get('/api/lecpage/lec_lecture', {
                params: {
                    lecture: lecture_name,
                    userID : userID
                }
            }, {withCredentials : true})
            .then((res) => {
                if(res.data===200){
                    let copy = {...res.data};
                    setLecInfo(copy);
                }
            })
            .catch((error) => {
                console.log(error.data)
                if (error.response.data === 401) {
                    alert("권한없음(강의페이지");
                }
                if (error.response.data === 500) {
                    alert("서버 오류 발생!(강의페이지)");
                }
            })
        };
         getLecInfo();
    }, []); */
    
    return (
        <div onClick={() => navigate('/LecPage_lecture')}>
            <div className={styles.v_card_sm}>
                <h1 className={`${styles.titleText} ${styles.mainColorText}`}> 온라인 강의 리스트 </h1>
                <Container >
                {
                    lecinfo.map(function (a, i) {
                        return (
                            <Row className={` ${styles.hbox} `}>
                                <Col lg={6} className={styles.contentText}> {a.lecPage_title} </Col>
                                <Col></Col>
                                <Col lg={3} className={`${styles.contentText} `}> {a.lecPage_date} </Col>
                            </Row>
                        );
                    })
                }
                </Container>
            </div>
        </div>
    );
}