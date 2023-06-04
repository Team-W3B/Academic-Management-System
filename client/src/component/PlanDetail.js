/* eslint-disable */
import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import styles from './../scss/PlanDetail.module.scss';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function PlanDetail() {

    let {id} = useParams();
    console.log(id);

    let detail = useSelector( (state) => {return state.plan_detail} )
    console.log(detail);
    let basic_info = detail.basic_info;
    let detail_info = detail.detail_info;

    return (
        <>
        <div className={styles.hbox_plan}>
            <div className={styles.v_card}>
                <Container className={styles.Container} >
                    <Row className={styles.row_lec}>
                        <Col className={`${styles.strongText} ${styles.grow1} `} > 과목명 </Col>
                        <Col className={`${styles.contentText} ${styles.grow2} `} > {basic_info.planDetail_lec} </Col>
                    </Row>
                    <Row className={styles.row_lec}>
                        <Col className={`${styles.strongText} ${styles.grow1} `} > 강의시간 </Col>
                        <Col className={`${styles.contentText} ${styles.grow2} `} > {basic_info.planDetail_lec_time} </Col>
                    </Row>
                    <Row className={styles.row_lec}>
                        <Col className={`${styles.strongText} ${styles.grow1} `} > 연도 / 학기 </Col>
                        <Col className={`${styles.contentText} ${styles.grow2} `} > {basic_info.planDetail_semester} </Col>
                    </Row>
                    <Row className={styles.row_lec}>
                        <Col className={`${styles.strongText} ${styles.grow1} `} > 학정번호 </Col>
                        <Col className={`${styles.contentText} ${styles.grow2} `} > {basic_info.planDetail_reg_num} </Col>
                    </Row>
                    <Row className={styles.row_lec}>
                        <Col className={`${styles.strongText} ${styles.grow1} `} > 이수구분 </Col>
                        <Col className={`${styles.contentText} ${styles.grow2} `} > {basic_info.planDetail_classifier} </Col>
                    </Row>
                    <Row className={styles.row_lec}>
                        <Col className={`${styles.strongText} ${styles.grow1} `} > 수강인원 </Col>
                        <Col className={`${styles.contentText} ${styles.grow2} `} > {basic_info.planDetail_num_of_student} </Col>
                    </Row>
                    <Row className={styles.row_lec}>
                        <Col className={`${styles.strongText} ${styles.grow1} `} > 담당교수 </Col>
                        <Col className={`${styles.contentText} ${styles.grow2} `} > {basic_info.planDetail_prof} </Col>
                    </Row>
                    <Row className={styles.row_lec}>
                        <Col className={`${styles.strongText} ${styles.grow1} `} > 메일 </Col>
                        <Col className={`${styles.contentText} ${styles.grow2} `} > {basic_info.planDetail_mail} </Col>
                    </Row>
                    <Row className={styles.row_lec}>
                        <Col className={`${styles.strongText} ${styles.grow1} `} > 연락처 </Col>
                        <Col className={`${styles.contentText} ${styles.grow2} `} > {basic_info.planDetail_tel} </Col>
                    </Row>
                    <Row className={styles.row_lec}>
                        <Col className={`${styles.strongText} ${styles.grow1} `} > 담당조교 </Col>
                        <Col className={`${styles.contentText} ${styles.grow2} `} > {basic_info.planDetail_assist} </Col>
                    </Row>
                </Container>
            </div>
            <div className={styles.h_card}>
                <Container className={styles.Container} >
                    <Row>
                        <Col className={`${styles.strongText} ${styles.grow1} `} > 교과목개요 </Col>
                        <Col className={`${styles.contentText} ${styles.grow7} `} > {detail_info.planDetail_outline} </Col>
                    </Row>
                    <Row>
                        <Col className={`${styles.strongText} ${styles.grow1} `} > 평가비율 </Col>
                        <Col className={`${styles.Container} ${styles.contentText} ${styles.grow7} ${styles.border} `}>
                            <Row>
                                <Col className={`${styles.mainColorText} ${styles.strongText} `}> 출석 </Col>
                                <Col className={`${styles.mainColorText} ${styles.strongText} `}> 중간고사 </Col>
                                <Col className={`${styles.mainColorText} ${styles.strongText} `}> 기말고사 </Col>
                                <Col className={`${styles.mainColorText} ${styles.strongText} `}> 과제보고서 </Col>
                                <Col className={`${styles.mainColorText} ${styles.strongText} `}> 수업태도 </Col>
                                <Col className={`${styles.mainColorText} ${styles.strongText} `}> Quiz </Col>
                                <Col className={`${styles.mainColorText} ${styles.strongText} `}> 기타 </Col>
                            </Row>
                            <Row>
                                <Col className={`${styles.contentText} `}> {detail_info.planDetail_eval_rate.attendance} </Col>
                                <Col className={`${styles.contentText} `}> {detail_info.planDetail_eval_rate.midterm} </Col>
                                <Col className={`${styles.contentText} `}> {detail_info.planDetail_eval_rate.finterm} </Col>
                                <Col className={`${styles.contentText} `}> {detail_info.planDetail_eval_rate.ass} </Col>
                                <Col className={`${styles.contentText} `}> {detail_info.planDetail_eval_rate.attitude} </Col>
                                <Col className={`${styles.contentText} `}> {detail_info.planDetail_eval_rate.quiz} </Col>
                                <Col className={`${styles.contentText} `}> {detail_info.planDetail_eval_rate.etc} </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <h1 className={styles.header2}> 강의일정 및 내용 </h1>
                    </Row>
                    <Row>
                        <Col className={`${styles.grow1} `}>
                        {
                            [0, ...detail_info.planDetail_15weeks].map((a, i) => {
                                return(
                                    a == 0
                                    ? <Row className={`${styles.contentText} ${styles.grow1} `} > - </Row>
                                    : <Row className={`${styles.contentText} ${styles.grow1} `} > {a.week}주차 </Row>
                                );
                            })
                        }
                        </Col>
                        <Col className={styles.grow7}>
                        {
                            [0, ...detail_info.planDetail_15weeks].map((a, i) => {
                                return(
                                    a == 0
                                    ? <Row className={`${styles.strongText} ${styles.mainColorText} ${styles.grow7} `} >
                                        <Col> 강의내용 </Col>
                                        <Col> 강의운영방식 </Col>
                                    </Row>
                                    : <Row className={`${styles.contentText} ${styles.grow7} `} >
                                        <Col> {a.content} </Col>
                                        <Col> {a.operation} </Col>
                                    </Row>
                                );
                            })
                        }
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
        </>
    );
}

export default PlanDetail;