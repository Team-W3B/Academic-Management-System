/* eslint-disable */
import React, { useState } from "react";
import './App.scss';
import styles from './MainPage.module.scss';
import { Col, Row } from "react-bootstrap";

function LecCard() {

    let info = [
        {
            id : '0',
            home_lec : '머신러닝',
            home_lec_class : '새빛관 203호',
            home_prof : '박철수',
            home_lectime : '3',
        },
        {
            id : '1',
            home_lec : '산학협력캡스톤설계1',
            home_lec_class : '새빛관 102호',
            home_prof : '이형근',
            home_lectime : '5',
        },
        {
            id : '2',
            home_lec : '자본주의역사',
            home_lec_class : '한울과 B102호',
            home_prof : '임경섭',
            home_lectime : '4',
        },
    ]
    let [lecInfo, setLecInfo] = useState(info);
    

    return (
        <>
        <Row className={styles.Wrapper} >
            <Col >
                <div style={{ margin: "0px" }} className={styles.whiteCard}>
                    <h2 className={styles.day} style={{ color: "#4DA58B" }} > 월요일 </h2>
                    {
                        lecInfo.map(function(a) {
                            return (
                                <Lec lecInfo={a} />
                            );
                        })
                    }
                </div>
            </Col>
            <Col>
                <div className={styles.whiteCard}>
                    <h2 className={styles.day} style={{ color: "#FFB650" }} > 화요일 </h2>
                    {
                        lecInfo.map(function(a) {
                            return (
                                <Lec lecInfo={a} />
                            );
                        })
                    }
                </div>
            </Col>
            <Col>
                <div className={styles.whiteCard}>
                    <h2 className={styles.day} style={{ color: "#F55848" }} > 수요일 </h2>
                    {
                        lecInfo.map(function(a) {
                            return (
                                <Lec lecInfo={a} />
                            );
                        })
                    }
                </div>
            </Col>
            <Col>
                <div className={styles.whiteCard}>
                    <h2 className={styles.day} style={{ color: "#7F6BAF" }} > 목요일 </h2>
                    {
                        lecInfo.map(function(a) {
                            return (
                                <Lec lecInfo={a} />
                            );
                        })
                    }
                </div>
            </Col>
            <Col>
                <div className={styles.whiteCard}>
                    <h2 className={styles.day} style={{ color: "#6577C7" }} > 금요일 </h2>
                    {
                        lecInfo.map(function(a) {
                            return (
                                <Lec lecInfo={a} />
                            );
                        })
                    }
                </div>
            </Col>
        </Row>
        </>
    )
}

export default LecCard

let Lec = (props) => {

    let lecInfo = props.lecInfo;
    console.log(lecInfo);

    return (
        <>
        <div className={styles.Lec}>
            <p className={styles.lec_name}> {lecInfo.home_lec} </p>
            <div className={styles.lec_detail}>
                <p className={styles.classroom}> {lecInfo.home_lec_class} </p>
                <p className={styles.prof}> {lecInfo.home_prof} 교수님 </p>
                <p className={styles.duration}> {lecInfo.home_lectime}교시 </p>
            </div>
        </div>
        </>
    );
};