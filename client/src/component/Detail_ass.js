/* eslint-disable */
import React, { useEffect, useState } from "react";
import styles from "./../scss/Lec.module.scss";
import { Col, Row, Stack } from "react-bootstrap";
import axios from 'axios';
import info from "./../data/detail_ass";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import file_image from './../imgs/file_image.svg'
import { useNavigate } from "react-router-dom";

export default function Detail_ass() {
    const lecture_name = useSelector((state) => state.lecture.lecture); //querystring 전달인자
    const index = useSelector((state) => state.index.index); //querystring 전달인자
    let userID = useSelector((state) => state.userID); // userID 불러오기
    const navigate = useNavigate();
    let [lecinfo, setLecInfo] = useState(info);
    useEffect(() => {
        let getLecInfo = () => {
            axios.get('/api/lecpage/ass/detail_ass', {
                params: {
                    lecture: lecture_name,
                    index: index,
                    userID: userID
                }
            }, { withCredentials: true })
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
        getLecInfo();
    }, []);

    const handleFile = () => { // blob file 받기
        //console.log('handleFile');
        axios.get('/api/lecpage/ass/detail_blobAss', {
            params: {
                lecture: lecture_name,
                index: index,
                userID: userID
            },
            responseType: 'blob',
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
                    <h1 className={`${styles.mediumText} ${styles.blueColorText}`} onClick={() => navigate('/LecPage_ass')} > 돌아가기 </h1>
                </div>
                <div>
                    <h1 className={`${styles.mediumText} ${styles.mainColorText}`} onClick={() => navigate('/LecPage_ass')} > 과제 </h1>
                </div>
            </Stack>
            <Stack direction="horizontal" className={`${styles.align_bottom} ${styles.border_bottom}`} gap={4} >
                <div>
                    <h1 className={`${styles.titleText} `} > {lecinfo.lecDetail_title} </h1>
                </div>
                <div>
                    <h1 className={`${styles.contentText} ${styles.greyText} `} > {lecinfo.lecDetail_date} </h1>
                </div>
            </Stack>

            {/* <Stack> */}
                <Stack direction="horizontal" className={styles.border_bottom}>
                        <div className={styles.hbox_lec_ass_due}>
                            <h1 className={`${styles.contentBoldText} `} > 제출기한 </h1>
                        </div>
                        <div>
                            <h1 className={`${styles.indexMediumText} `} > {lecinfo.lecDetail_duration} </h1>
                        </div>
                </Stack>
                <Stack direction="horizontal" className={styles.border_bottom}>
                        <div className={styles.hbox_lec_ass_content}>
                            <h1 className={`${styles.contentBoldText} `} > 내용 / 주의사항 </h1>
                        </div>
                        <div>
                            <h1 className={`${styles.indexMediumText} `} > {lecinfo.lecDetail_content} </h1>
                        </div>
                </Stack>

                <Stack direction="horizontal" className={styles.border_bottom}>
                        <div className={styles.hbox_lec_ass_due}>
                            <Stack direction="horizontal">
                                <img src={file_image} />
                                <h1 className={`${styles.contentBoldText} `} > 파일 </h1>
                            </Stack>
                        </div>
                        <div onClick={handleFile}>
                            <h1 className={`${styles.indexMediumText} `} > {lecinfo.lecDetail_fileName} [{lecinfo.lecDetail_fileSize}KB] </h1>
                        </div>
                </Stack>
            {/* </Stack> */}
        </div>
    );
}