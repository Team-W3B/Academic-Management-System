/* eslint-disable */
import React, { useEffect, useState } from "react";
import styles from "./../scss/Responselec.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import info from "./../data/response_lec";
import {setRes_leccheck, setRes_profcheck, setRes_timecheck} from "../store";

export default function Response_lec() {

    //let info = useSelector( (state) => {return state.plan_output} )
    let dispatch = useDispatch();
    let userID = useSelector((state) => state.userID); // userID 불러오기
    let major = useSelector((state) => state.major.major);
    let lec = useSelector((state) => state.lec.lec);
    let value = useSelector((state) => state.value.value);
    let [lecclick, setLecclick]=useState('');
    let [lecprofclick, setProfclick]=useState('');
    let [lectimeclick, setTimeclick]=useState('');

    const filteredInfo = info.filter((item) => {
        // 원하는 조건에 맞는 데이터만 필터링하여 반환
        if (item.planOut_lec.indexOf(lec) === 0)
            return item.planOut_classifier === value||item.planOut_lec === lec||item.planOut_major === major;
    });
    let clickLec = (lec,prof,time) => {
        setLecclick(lec);
        setProfclick(prof);
        setTimeclick(time)
    }
   let handleLec = () =>{
    console.log(lecclick);

    console.log(lecprofclick);
    console.log(lectimeclick);
    dispatch(setRes_leccheck(lecclick));
    dispatch(setRes_profcheck(lecprofclick));
    dispatch(setRes_timecheck(lectimeclick));
   }
    return (
        <div className={styles.whiteCard} >

            <div className={styles.lec_name} style={{}}>
                수강신청
            </div>

            <div className={styles.cardWrapper}>
                <Container className={styles.Container} >
                    <Row>
                        <Col className={styles.titleText}> 이수 </Col>
                        <Col lg={2} className={styles.titleText} > 학정번호 </Col>
                        <Col lg={2} className={styles.titleText} > 강의명 </Col>
                        <Col className={styles.titleText} > 학점 </Col>
                        <Col className={styles.titleText} > 교수님 </Col>
                        <Col className={styles.titleText} > 강의시간 </Col>
                        <Col lg={2} className={styles.titleText} > 강의유형 </Col>
                        <Col className={styles.titleText} > 여석 </Col>
                    </Row>
                    {
                        filteredInfo.map((a, i) => {
                            return (
                                //<InfoRow info={a} key={i}/>
                                <div info={a} key={i}>
                                <Row className={styles.row_lec} onClick={() => { clickLec(a.planOut_lec, a.planOut_prof, a.planOut_lectime) }}>
                                    <Col className={`${styles.contentText} ${styles.mainColorText}`} > {a.planOut_classifier} </Col>
                                    <Col lg={2} className={styles.contentText} > {a.planOut_reg_num} </Col>
                                    <Col lg={2} className={`${styles.contentText} ${styles.mainColorText}`} > {a.planOut_lec} </Col>
                                    <Col className={styles.contentText} > {a.planOut_credit} </Col>
                                    <Col className={styles.contentText} > {a.planOut_prof} </Col>
                                    <Col className={`${styles.contentText} ${styles.greenColorText}`} > {a.planOut_lectime} </Col>
                                    <Col lg={2} className={styles.contentText} > {a.planOut_type} </Col>
                                    <Col className={`${styles.contentText} ${styles.greenColorText}`} > {a.planOut_left} </Col>
                                </Row>
                                </div>
                            );
                        })
                    }
                </Container>
            </div>
            <button onClick={handleLec} className={styles.searchButton} > 저장 </button>

        </div>

    );
}