/* eslint-disable */
import React, { useEffect, useState } from "react";
import styles from "./../scss/Lec.module.scss";
import { Col, Row } from "react-bootstrap";
import axios from 'axios';
import info from "./../data/lec";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Lec() {
    const lecture_name = useSelector((state)=>state.lecture.lecture); //querystring 전달인자
    let userID = useSelector( (state) => state.userID ); // userID 불러오기
    //const navigate = useNavigate();
    //let [lecinfo, setLecInfo] = useState(info);
    // useEffect(() => {
    //     let getLecInfo = () => {
    //         axios.get('/api/lecpage', {
    //             params: {
    //                 lecture: lecture_name,
    //                 userID : userID
    //             },
    //         }, {withCredentials : true})//query string 
    //             .then((res) => {
    //                 if (res.data === 200) {
    //                     let copy = { ...res.data };
    //                     setLecInfo(copy);
    //                 }
    //             })
    //             .catch((error) => {
    //                 console.log(error.data)
    //                 if (error.response.data === 401) {
    //                     alert("권한없음(강의페이지");
    //                 }
    //                 if (error.response.data === 500) {
    //                     alert("서버 오류 발생!(강의페이지)");
    //                 }
    //             })
    //     };
    //     getLecInfo();
    // }, []);
   
    
    return (
        <div className={styles.lecname}>

            <div className={styles.class_name} >
                {lecture_name}</div>
            {/* <div className={styles.Lecc}>
                <div className={styles.lec_detail} >
                    <p className={styles.classroom}> {lecinfo.lecPage_class} </p>
                    <p className={styles.prof}> {lecinfo.lecPage_prof} 교수님 </p>
                    <p className={styles.duration}> {lecinfo.lecPage_time} </p>
                </div>
            </div> */}

        </div>
    );
}