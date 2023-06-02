/* eslint-disable */
import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import styles from './../scss/PlanOutput.module.scss';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPlanOutput } from "./../store"



function PlanOutput() {

    // let dispatch = useDispatch();

    /* let plan_info = [
        {
            idx : 0,
            planOut_classifier : '전공',
            planOut_reg_num : 'H020-4-0846-01',
            planOut_lec : '소프트웨어공학',
            planOut_credit : 3,
            planOut_prof : '이기훈',
            planOut_lectime : '월5, 수6',
            planOut_type : '영어 50%',
            planOut_left : 16
        },
        {
            idx : 1,
            planOut_classifier : '전공',
            planOut_reg_num : 'H020-4-8483-01',
            planOut_lec : '머신러닝',
            planOut_credit : 3,
            planOut_prof : '박철수',
            planOut_lectime : '월3, 수4',
            planOut_type : '영어 50%',
            planOut_left : 12
        },
    ] */
    // dispatch(setPlanOutput(plan_info));

    let info = useSelector( (state) => {return state.plan_output} )
    console.log(info);
    

    return (
        <>
        <div className={styles.cardWrapper}>
            <Container className={styles.Container} >
                <Row>
                    <Col className={styles.titleText}> 이수 </Col>
                    <Col lg={2} className={styles.titleText} > 학정번호 </Col>
                    <Col lg={2} className={styles.titleText} > 강의명 </Col>
                    <Col className={styles.titleText} > 학점 </Col>
                    <Col className={styles.titleText} > 교수님 </Col>
                    <Col className={styles.titleText} > 강의시간 </Col>
                    <Col lg={2}className={styles.titleText} > 강의유형 </Col>
                    <Col className={styles.titleText} > 여석 </Col>
                </Row>
                {
                    info.map( (a, i) => {
                        return (
                            <InfoRow info={a} key={i} />
                        );
                    } )
                }
            </Container>
        </div>
        </>
    );
}

export default PlanOutput;

let InfoRow = (props) => {

    let info = props.info;
    let navigate = useNavigate();
    

    return (
        <Row onClick={()=> { navigate("/Plan/Output/:id"); }}>
            <Col className={`${styles.contentText} ${styles.mainColorText}`} > {info.planOut_classifier} </Col>
            <Col lg={2} className={styles.contentText} > {info.planOut_reg_num} </Col>
            <Col lg={2} className={`${styles.contentText} ${styles.mainColorText}`} > {info.planOut_lec} </Col>
            <Col className={styles.contentText} > {info.planOut_credit} </Col>
            <Col className={styles.contentText} > {info.planOut_prof} </Col>
            <Col className={`${styles.contentText} ${styles.greenColorText}`} > {info.planOut_lectime} </Col>
            <Col lg={2}className={styles.contentText} > {info.planOut_type} </Col>
            <Col className={`${styles.contentText} ${styles.greenColorText}`} > {info.planOut_left} </Col>
        </Row>
    );
}