/* eslint-disable */
import React, { useEffect, useState } from "react";
import styles from "./../scss/Lec_detailpage.module.scss";
import { Col, Row } from "react-bootstrap";
import axios from 'axios';
import info from "./../data/detail_file";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import file_image from './../imgs/file_image.svg'
import goback from './../imgs/goback.svg'
import { useNavigate } from "react-router-dom";

export default function Detail_ass_prof() {
    const lecture_name = useSelector((state) => state.lecture.lecture); //querystring 전달인자
    const index = useSelector((state)=>state.index.index); //querystring 전달인자
    let userID = useSelector( (state) => state.userID ); // userID 불러오기
    const navigate = useNavigate();
    let [lecinfo, setLecInfo] = useState(info);
    let [lecfileinfo, setLecFileInfo] = useState("");
    let [lecDetail_fileSize, setFilesizeInfo] = useState('');

    const handlefile=(e)=>{
        //setFileInfo(e.target.files[0]);
        //setFilenameInfo(e.target.files[0].name);
        setFilesizeInfo(e.target.files[0].size/1000);
        // console.log(e.target.files[0]);
        // console.log(e.target.files[0].name);
        // console.log(e.target.files[0].size/1000);
    };
 
    return (
        <div className={styles.whiteCard} style={{height:"500px"}}>
        <Row style={{ height: "60px" }}>
            <Col>
                <img style={{ height: "37px", marginBottom: "10px" }} src={goback}  onClick={() => navigate('/LecPage_file_prof')}/>
            </Col>
            <Col>
                <div className={styles.class_name} style={{ textAlign: "right" }} >제출하기</div>
            </Col>
        </Row>
        <div className={styles.lec_name}>
            과제 작성
        </div>
        <div style={{
            //width: "100%",
            // textAlign: "center",
            borderBottom: "1px solid #D6D6D6",
            margin: "3px"
        }} className={styles.contain}>
        </div>
        <div style={{
            //width: "100%",
            // textAlign: "center",
            borderBottom: "1px solid #D6D6D6",
            margin: "3px",
        }}>
            <Row>
            <Col sm={3} style={{textAlign:"center"}}>
                제목
                </Col>
                <Col sm={9} style={{height:"20px"}}>
                    <input style={{height:"100%",width:"100%"}} type="text" />
                </Col>
            </Row>
        </div>
        <div style={{
            //width: "100%",
            // textAlign: "center",
            borderBottom: "1px solid #D6D6D6",
            margin: "3px",
        }}>
            <Row>
                <Col sm={3} style={{textAlign:"center"}}>
                    <img style={{ margin: "3px" }} src={file_image} />
                    파일
                </Col>
                <Col sm={3}>
                    
                    <input type="file" name="file"   onChange={handlefile}/>
                </Col>
                <Col sm={4}>{lecDetail_fileSize}[KB]</Col>
            </Row>
        </div>
       
        <div style={{
            //width: "100%",
            // textAlign: "center",
            borderBottom: "1px solid #D6D6D6",
            margin: "3px",
        }}>
            <Row>
                <Col sm={3} style={{textAlign:"center"}}>
                    내용
                </Col>
                <Col sm={9} style={{height:"150px"}}>
                    <input style={{height:"100%",width:"100%"}} type="text" />
                </Col>
            </Row>
        </div>
    </div>
    );
}