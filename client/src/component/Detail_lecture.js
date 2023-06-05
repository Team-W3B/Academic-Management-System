/* eslint-disable */
import React, { useEffect, useState } from "react";
import styles from "./../scss/Lec_detailpage.module.scss";
import { Col, Row } from "react-bootstrap";
import axios from 'axios';
import info from "./../data/detail_notice";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import file_image from './../imgs/file_image.svg'
import goback from './../imgs/goback.svg'
import { useNavigate } from "react-router-dom";

export default function Detail_not() {
    const lecture_name = useSelector((state) => state.lecture.lecture); //querystring 전달인자
    const index = useSelector((state)=>state.index.index); //querystring 전달인자
    let userID = useSelector( (state) => state.userID ); // userID 불러오기
    //console.log(index);
    const navigate = useNavigate();
    let [lecinfo, setLecInfo] = useState(info);
    //let [vid, setVidInfo] = useState(vid);
    useEffect(() => {
        getLecInfo();
    }, []);
    let getLecInfo = () => {
        axios.get('/api/lecpage/notice/detail_not', {
            params: {
                lecture: lecture_name,
                index : index,
                userID : userID
            }
        }, {withCredentials : true})
            .then((res) => {
                if (res.data === 200) {
                    let copy = { ...res.data };
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

    return (
        <div className={styles.whiteCard}>
            <Row style={{height:"60px"}}>
                <Col>
                    <img style={{ height: "37px", marginBottom: "10px" }} src={goback} onClick={() => navigate('/LecPage_lecture')} />
                </Col>
                <Col>
                    <div className={styles.class_name} style={{ textAlign: "right" }} >강의</div>
                </Col>
            </Row>
            <Row>
                <Col className={styles.lec_name}>
                    {lecinfo.lecDetail_title}
                </Col>
                <Col className={styles.child} style={{ textAlign: "right" }}>
                    {lecinfo.lecDetail_date}
                </Col>
            </Row>
            <div style={{
                //width: "100%",
                // textAlign: "center",
                borderBottom: "1px solid #D6D6D6",
                margin: "3px"
            }} className={styles.contain}>
            </div>
            <div style={{
                borderBottom: "1px solid #D6D6D6",
                margin: "3px",
                height:"150px"
            }}>
                {lecinfo.lecDetail_content}
            </div>

            {/* <div style={{
                //width: "100%",
                // textAlign: "center",
                borderBottom: "1px solid #D6D6D6",
                margin: "3px",
                paddingBottom:"10px"
            }}/> */}
        </div>


    );
}