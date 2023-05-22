/* eslint-disable */
import React, { useEffect, useState } from "react";
import './../App.scss';
import styles from "./../scss/Lec.module.scss";
import { Col, Row } from "react-bootstrap";
import axios from 'axios';
import info from "./../data/lec";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Lec() {
    let [lecInfo, setLecInfo] = useState(info);
    useEffect(() => {
        getLecInfo();
    }, []);
    let getLecInfo = () => {
        axios.get('/api/lecpage')
            .then((res) => {
                
                if(res.status===200){
                    let copy = [...res.status];
                    setLecInfo(copy);
                }
            })
            .catch((error) => {
                console.log(error.data)
                if (error.response.status === 401) {
                    alert("권한없음(강의페이지");
                }
                if (error.response.status === 500) {
                    alert("서버 오류 발생!(강의페이지)");
                }
            })
    };
    //getLecInfo();

    
    return (
        <div className={styles.Wrapper}>

            <div className={styles.class_name}>
                {lecInfo.lecPage_lecture}</div>
            <div className={styles.Lec}>
                <div className={styles.lec_detail}>
                    <p className={styles.classroom}> {lecInfo.lecPage_class} </p>
                    <p className={styles.prof}> {lecInfo.lecPage_prof} 교수님 </p>
                    <p className={styles.duration}> {lecInfo.lecPage_time}교시 </p>
                </div>
            </div>

        </div>
    );
}