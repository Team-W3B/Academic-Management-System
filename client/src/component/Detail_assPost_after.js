/* eslint-disable */
import React, { useEffect, useState } from "react";
import styles from "./../scss/Lec.module.scss";
import { Col, Row, Stack } from "react-bootstrap";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import file_image from './../imgs/file_image.svg'
import goback from './../imgs/goback.svg'
import { redirect, useNavigate } from "react-router-dom";
import { setAss1check, setAss2check } from "../store";

export default function Detail_assPost() {
    const lecture = useSelector((state) => state.lecture.lecture); //querystring 전달인자
    const index = useSelector((state)=>state.index.index); //querystring 전달인자
    let userID = useSelector( (state) => state.userID ); // userID 불러오기

    let lecDetail_fileName = useSelector( (state) => state.lecDetail_fileName.lecDetail_fileName);
    let lecDetail_fileSize = useSelector( (state) => state.lecDetail_fileSize.lecDetail_fileSize);
    let lecDetail_content = useSelector( (state) => state.lecDetail_content.lecDetail_content);
    const navigate = useNavigate();

    const delete_File = () => {
        // let asscheck1=1;
        // let dispatch = useDispatch();
        // dispatch(setAss1check(1));
        // navigate('/LecPage_ass');
        location.reload();
        location.replace(location.href);
        location.href = location.href;
    };

    return (
        <div className={styles.v_card_notice}>
            <Stack direction="horizontal" className={styles.row_space_between}>
                <div>
                    <h1 className={`${styles.mediumText} ${styles.blueColorText}`} onClick={delete_File} > 수정하기 </h1>
                </div>
            </Stack>
            <Stack direction="horizontal" className={`${styles.align_bottom} ${styles.border_bottom}`} gap={4} >
                <div>
                    <h1 className={`${styles.titleText} `} > 과제제출 </h1>
                </div>
            </Stack>

            <Stack direction="horizontal" className={styles.border_bottom}>
                <div className={styles.hbox_lec_ass_due}>
                    <Stack direction="horizontal">
                        <img src={file_image} />
                        <h1 className={`${styles.contentBoldText} `} > 파일 </h1>
                    </Stack>
                </div>
                <div>
                    <h1 className={`${styles.indexMediumText} `} > {lecDetail_fileName} [{lecDetail_fileSize}KB] </h1>
                </div>
            </Stack>

            <Stack direction="horizontal" className={styles.border_bottom}>
                <div className={styles.hbox_lec_ass_content}>
                    <h1 className={`${styles.contentBoldText} `} > 내용 / 주의사항 </h1>
                </div>
                <div>
                    <h1 className={`${styles.indexMediumText} `} > {lecDetail_content} </h1>
                </div>
            </Stack>
        </div>
    );
}