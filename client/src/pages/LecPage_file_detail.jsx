import HeaderNav from "./../component/HeaderNav";
import Footer from "./../component/Footer";
import Lec from "./../component/Lec";
import styles from "./../scss/Lec.module.scss";

import React, { useEffect, useState } from "react";
import { Col, Row, Stack } from "react-bootstrap";
import axios from 'axios';
import info from "./../data/detail_file";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import file_image from './../imgs/file_image.svg'
import { useNavigate } from "react-router-dom";

export default function LecPage_not_detail() {
    return (
        <>
            <HeaderNav />
            <Lec />
            <div className={styles.hbox_lec}>
                <Detail_file/>
            </div>
            <Footer />
        </>
    );
};

let Detail_file = () => {
    const lecture_name = useSelector((state) => state.lecture.lecture); //querystring 전달인자
    const index = useSelector((state)=>state.index.index); //querystring 전달인자
    let userID = useSelector( (state) => state.userID ); // userID 불러오기
    const navigate = useNavigate();
    let [lecinfo, setLecInfo] = useState(info);
    let [lecfileinfo, setLecFileInfo] = useState("");
    /* useEffect(() => {
        const getLecInfo = () => {
          try {
            const response = axios.get('/api/lecpage/file/detail_file', {
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
      }, []); */
    
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
        <div className={styles.v_card_notice}>
            <Stack direction="horizontal" className={styles.row_space_between}>
                <div>
                    <h1 className={`${styles.mediumText} ${styles.blueColorText}`} onClick={() => navigate('/LecPage_file')} > 돌아가기 </h1>
                </div>
                <div>
                    <h1 className={`${styles.mediumText} ${styles.mainColorText}`} onClick={() => navigate('/LecPage_file')} > 자료실 </h1>
                </div>
            </Stack>
            <Stack direction="horizontal" className={`${styles.align_bottom} ${styles.border_bottom}`} gap={4} >
                <div>
                    <h1 className={`${styles.titleText} `} onClick={() => navigate('/LecPage_notice')} > {lecinfo.lecDetail_title} </h1>
                </div>
                <div>
                    <h1 className={`${styles.contentText} ${styles.greyText} `} onClick={() => navigate('/LecPage_notice')} > {lecinfo.lecDetail_date} </h1>
                </div>
            </Stack>
            {
                lecinfo.lecDetail_fileName === "" ?
                    null :
                    <Stack direction="horizontal" className={styles.border_bottom}>
                        <div className={`${styles.contentText} `} onClick={handleFile}>
                            <img src={file_image} />
                            파일 : {lecinfo.lecDetail_fileName} [{lecinfo.lecDetail_fileSize}KB]
                        </div>
                    </Stack>
            }
            <Stack>
                <div className={`${styles.contentText} `} >
                    {lecinfo.lecDetail_content}
                </div>
            </Stack>
        </div>
    );
}