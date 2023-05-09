/* eslint-disable */
import React, { useState } from "react";
import './../App.scss';
import styles from './../MainPage.module.scss';
import { Col, Row } from "react-bootstrap";
import axios from 'axios';
import info from "../data";
import 'bootstrap/dist/css/bootstrap.min.css';

function LecCard() {
 
    let [lecInfo, setLecInfo] = useState(info);
    // console.log(lecInfo['mon']);

    let getLecInfo = () => {
        axios.get('url.json')
            .then((res)=> {
                let copy = [...res.data]
                setLecInfo(copy)
            })
            .catch((error)=>{
                console.log(error.data)
            })
    };
    getLecInfo();
    
    

    return (
        <>
        <Row className={styles.Wrapper} >
            {
                ['mon', 'tue', 'wed', 'thur', 'fri'].map(function(a, i) {
                    console.log(a);
                    return (
                        <DayCard key={i} i={i} lecInfo={lecInfo[a]} day={['월요일', '화요일', '수요일', '목요일', '금요일']} color={['#4DA58B', '#FFB650', '#F55848', '#7F6BAF', '#6577C7' ]} />
                    )
                })
            }
        </Row>
        </>
    )
}

export default LecCard

let DayCard = (props) => {

    let lecInfo = props.lecInfo;
    let color = props.color;
    let day = props.day[props.i];

    return (
        <>
        <Col >
            <div className={styles.whiteCard}>
                <h2 className={styles.day} style={{ color: color[props.i] }} > {day} </h2>
                {
                    lecInfo.map(function(a, i) {
                        return (
                            <Lec key={i} lecInfo={a} />
                        );
                    })
                }
            </div>
        </Col>
        </>
    )
}

let Lec = (props) => {

    let lecInfo = props.lecInfo;
    // console.log(lecInfo.home_lec_class);

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