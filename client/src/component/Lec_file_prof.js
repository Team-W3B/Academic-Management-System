/* eslint-disable */
import React, { useEffect,useState } from "react";
import styles from "./../scss/Lec.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import axios from 'axios';
import info from "../data/lecfile";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Lec_file() {
    const lecture_name = useSelector((state)=>state.lecture.lecture); //querystring 전달인자
    let userID = useSelector( (state) => state.userID ); // userID 불러오기
    let navigate = useNavigate();

    let [lecinfo, setLecInfo] = useState(info);
    
    return (
        <div onClick={() => navigate('/LecPage_file_prof')}>
            <div className={styles.v_card_sm}>

                <h1 className={`${styles.titleText} ${styles.mainColorText}`}> 자료실 </h1>
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