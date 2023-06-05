/* eslint-disable */
import React, { useEffect, useState } from "react";
import styles from "./../scss/Lec_detailpage.module.scss";
import { Col, Row } from "react-bootstrap";
import axios from 'axios';
import info from "./../data/detail_ass";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import file_image from './../imgs/file_image.svg'
import goback from './../imgs/goback.svg'
import { useNavigate } from "react-router-dom";

export default function Detail_ass() {
    const lecture_name = useSelector((state) => state.lecture.lecture); //querystring 전달인자
    const index = useSelector((state)=>state.index.index); //querystring 전달인자
    let userID = useSelector( (state) => state.userID ); // userID 불러오기
    const navigate = useNavigate();
    let [lecinfo, setLecInfo] = useState(info);
    useEffect(async() => {
        let getLecInfo = async() => {
            axios.get('/api/lecpage/ass/detail_ass', {
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
        await getLecInfo();
    }, []);

    return (
        <div className={styles.whiteCard}>
            <Row style={{ height: "60px" }}>
                <Col>
                    <img style={{ height: "37px", marginBottom: "10px" }} src={goback} onClick={() => navigate('/LecPage_ass')} />
                </Col>
                <Col>
                    <div className={styles.class_name} style={{ textAlign: "right" }} >과제</div>
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
            {/* <div className={styles.line}> */}
            <div style={{
                //width: "100%",
                // textAlign: "center",
                borderBottom: "1px solid #D6D6D6",
                margin: "3px"
            }} className={styles.contain}/>
            
            <div style={{
                    //width: "100%",
                    // textAlign: "center",
                    borderBottom: "1px solid #D6D6D6",
                    margin: "3px",
                }}>
                <Row>
                    <Col sm={3} style={{textAlign:"center"}}>
                        제출기한
                    </Col>
                    <Col sm={9}>
                        {lecinfo.lecDetail_duration}
                    </Col>
                </Row></div>
                <div style={{
                    //width: "100%",
                    // textAlign: "center",
                    borderBottom: "1px solid #D6D6D6",
                    margin: "3px",
                }}>
                <Row>
                    <Col sm={3} >
                        <div style={{textAlign:"center",height:"150px"}} >
                        내용 / 주의사항</div>
                    </Col>
                    <Col sm={9}>
                    {lecinfo.lecDetail_content}
                    </Col>
                </Row></div>
                <div style={{
                    //width: "100%",
                    // textAlign: "center",
                    borderBottom: "1px solid #D6D6D6",
                    margin: "3px",
                }}>
                <Row>
                    <Col sm={3} style={{textAlign:"center"}}>
                        <img style={{ margin: "3px"  }} src={file_image} />
                        파일
                    </Col>
                    <Col sm={9}>
                        {lecinfo.lecDetail_fileName} [{lecinfo.lecDetail_fileSize}KB]
                    </Col>
                </Row></div>
            
            <div>
                
            </div>
            
            
        </div>
        

    );
}