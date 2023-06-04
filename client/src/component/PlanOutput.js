/* eslint-disable */
import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import styles from './../scss/PlanOutput.module.scss';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPlanDetail } from "./../store"
import axios from "axios";
import qs from "qs";

function PlanOutput() {

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
    let dispatch = useDispatch();

    /* params 형식은 단순한 형태로는 잘 동작하지만, 객체가 중첩되기 시작하는 순간 제대로 stringify 처리를 하지 못한다. */
    axios.defaults.paramsSerializer = params => {
        return qs.stringify(params);
    }

    let clickLec = () => {
        navigate("/Plan/Detail/" + `${info.planOut_reg_num}`);
        /* axios.get('/api/plan/detail', {params : info.planOut_reg_num}, {withCredentials : true})
        .then( (res) => {
            console.log(res.status);
            if (res.status === 200) {
                console.log(res.data);
                dispatch(setPlanDetail(res.data));
                alert("검색 성공!");
                navigate("/Plan/Detail/" + `${info.planOut_reg_num}`);
            }
        })
        .catch((error) => {
            console.log(error.response.status);
            if (error.response.status === 404) {
                alert("요청받은 리소스를 찾을 수 없습니다.");
            }
            if (error.response.status === 500) {
                alert("서버가 처리 방법을 모르는 상황이 발생했습니다. 서버는 아직 처리 방법을 알 수 없습니다.");
            }
        }) */
    }
    
    return (
        <Row className={styles.row_lec} onClick={()=> { clickLec() }}>
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