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

export default function Detail_file() {
    const lecture_name = useSelector((state) => state.lecture.lecture); //querystring 전달인자
    const index = useSelector((state)=>state.index.index); //querystring 전달인자
    let userID = useSelector( (state) => state.userID ); // userID 불러오기
    const navigate = useNavigate();
    let [lecinfo, setLecInfo] = useState(info);
    let [lecfileinfo, setLecFileInfo] = useState("");
    // useEffect(() => {
    //     let getLecInfo = async() => {
    //         await axios.get('/api/lecpage/file/detail_file', {
    //             params: {
    //                 lecture: lecture_name,
    //                 index: index,
    //                 userID : userID
    //             },
    //             // responseType: 'arraybuffer'  // 응답 데이터를 ArrayBuffer로 받음
    //         }, {withCredentials : true})
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
    useEffect(() => {
        const getLecInfo = async () => {
          try {
            const response = await axios.get('/api/lecpage/file/detail_file', {
              params: {
                lecture: lecture_name,
                index: index,
                userID: userID
              },
              withCredentials: true
            });
            console.log(response);
            if (response.data === 200) {
              const copy = { ...response.data };
              setLecInfo(copy);
            }
          } catch (error) {
            console.log(error.data);
            if (error.response.data === 401) {
              alert("권한없음(강의페이지)");
            }
            if (error.response.data === 500) {
              alert("서버 오류 발생!(강의페이지)");
            }
          }
        };
      
        getLecInfo();
      }, []);
    
        const handleFile =  () => { // blob file 받기
            //console.log('handleFile');
             axios.get('/api/lecpage/file/detail_blobFile', {
                params: {
                    lecture: lecture_name,
                    index: index,
                    userID: userID
                },
                headers:{
                    responseType: 'blob',
                },    
                }, { withCredentials: true })
                .then((res) => {
                    if (res.data === 200) {
                        // let copy = { ...res.data };
                        // setLecFileInfo(copy);
                        const url = window.URL.createObjectURL(new Blob([res.data]));
                        const link = document.createElement('a'); // blob 객체 url설정 링크
                        link.href = url;
                        link.setAttribute('download', 'file');
                        document.body.appendChild(link); // link body에 추가
                        link.click();                    // 파일 다운로드 시작
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
                });

        };
 
    return (
        <div className={styles.whiteCard}>
            <Row style={{height:"60px"}}>
                <Col>
                    <img style={{ height: "37px", marginBottom: "10px" }} src={goback} onClick={() => navigate('/LecPage_file')} />
                </Col>
                <Col>
                    <div className={styles.class_name} style={{ textAlign: "right" }} >자료실</div>
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
                borderBottom: "1px solid #D6D6D6",
                margin: "3px"
            }} className={styles.contain}>
            </div>
            {lecinfo.lecDetail_fileName === "" ?
                <div /> :
                <div style={{
                    //width: "100%",
                    // textAlign: "center",
                    borderBottom: "1px solid #D6D6D6",
                    margin: "3px",

                }} onClick={handleFile}>
                    <img style={{ margin: "3px" }} src={file_image} />파일 : {lecinfo.lecDetail_fileName} [{lecinfo.lecDetail_fileSize}KB]</div>}
            <div style={{
                borderBottom: "1px solid #D6D6D6",
                margin: "3px",
                height:"150px"
            }}>
                {lecinfo.lecDetail_content}
            </div>
        </div>
    );
}