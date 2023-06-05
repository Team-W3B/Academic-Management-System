/* eslint-disable */
import React, { useEffect, useState } from "react";
import styles from "./../scss/Lec_detailpage.module.scss";
import { Col, Row } from "react-bootstrap";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import file_image from './../imgs/file_image.svg'
import goback from './../imgs/goback.svg'
import { useNavigate } from "react-router-dom";

export default function Detail_assPost() {
    const lecture = useSelector((state) => state.lecture.lecture); //querystring 전달인자
    const index = useSelector((state)=>state.index.index); //querystring 전달인자
    let userID = useSelector( (state) => state.userID ); // userID 불러오기

    const navigate = useNavigate();
    const formData = new FormData();
    let [lecDetail_content, setContentInfo] = useState('');
    let [lecDetail_file, setFileInfo] = useState('');
    let [lecDetail_fileName, setFilenameInfo] = useState('');
    let [lecDetail_fileSize, setFilesizeInfo] = useState('');

    const Submit_file = (e) =>{
       
        formData.append("lecDetail_file",lecDetail_file);
        formData.append("lecDetail_fileName",JSON.stringify(lecDetail_fileName));
        formData.append("lecDetail_fileSize",JSON.stringify(lecDetail_fileSize));
        formData.append("lecDetail_content",JSON.stringify(lecDetail_content));
        formData.append("lecture",JSON.stringify(lecture));
        formData.append("index",JSON.stringify(index));
        formData.append("userID", JSON.stringify(userID));
        // for (const key of formData.keys()) {
        //     console.log(key);
        //   }
        //   for (const value of formData.values()) {
        //     console.log(value);
        //   }
       
        axios.post('/api/lecpage/ass/detail_ass_snt'
            , formData, {withCredentials : true}
            , {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            .then((res) => {
                if (res.data === 200) {
                    alert("로그인에 성공하였습니다.");
                    
                }
            })
            .catch((error) => {
                console.log(error.data)
                if (error.response.data === 401) {
                    alert("권한없음(강의페이지)");
                }
                if (error.response.data === 500) {
                    alert("서버 오류 발생!(강의페이지)");
                }
            });
    };
    
    const handlecontent=(e)=>{
        setContentInfo(e.target.value);
        // console.log(e.target.value);
    };

    const handlefile=(e)=>{
        setFileInfo(e.target.files[0]);
        setFilenameInfo(e.target.files[0].name);
        setFilesizeInfo(e.target.files[0].size/1000);
        // console.log(e.target.files[0]);
        // console.log(e.target.files[0].name);
        // console.log(e.target.files[0].size/1000);
    };

    return (
        <div className={styles.whiteCard}>
            <Row style={{ height: "60px" }}>
                <Col>
                    <img style={{ height: "37px", marginBottom: "10px" }} src={goback}  />
                </Col>
                <Col>
                    <div className={styles.class_name} style={{ textAlign: "right" }} onClick={Submit_file}>제출하기</div>
                </Col>
            </Row>
            <div className={styles.lec_name}>
                과제제출
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
                        <img style={{ margin: "3px" }} src={file_image} />
                        파일
                    </Col>
                    <Col sm={3}>
                        
                        <input type="file" name="file"  onChange={handlefile}/>
                    </Col>
                    <Col sm={4}>[KB]</Col>
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
                        <input style={{height:"100%",width:"100%"}} type="text" onChange={handlecontent}/>
                    </Col>
                </Row>
            </div>
        </div>


    );
}