/* eslint-disable */
import React, { useEffect, useState } from "react";
import styles from "./../scss/Lec.module.scss";
import { Col, Container, Row, Stack } from "react-bootstrap";
import axios from 'axios';
import info from "./../data/detail_file";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import file_image from './../imgs/file_image.svg'
import goback from './../imgs/goback.svg'
import { useNavigate } from "react-router-dom";

export default function Detail_file_prof() {
    const lecture_name = useSelector((state) => state.lecture.lecture); //querystring 전달인자
    const index = useSelector((state) => state.index.index); //querystring 전달인자
    let userID = useSelector((state) => state.userID); // userID 불러오기
    const navigate = useNavigate();
    let [lecinfo, setLecInfo] = useState(info);
    let [lecfileinfo, setLecFileInfo] = useState("");
    let [lecDetail_fileSize, setFilesizeInfo] = useState('');
    let [title, setTitleInfo] = useState('');
    let [content, setContentInfo] = useState('');
    const handlefile = (e) => {
        //setFileInfo(e.target.files[0]);
        //setFilenameInfo(e.target.files[0].name);
        setFilesizeInfo(e.target.files[0].size / 1000);
        // console.log(e.target.files[0]);
        // console.log(e.target.files[0].name);
        // console.log(e.target.files[0].size/1000);
    };
    const handleClick = () =>{
        localStorage.setItem('key',title)
        localStorage.setItem('content',content)
        navigate('/LecPage_file_prof')
    };

    const handletitle = (e) =>{
        setTitleInfo(e.target.value);
    }
    const handlecontent = (e) =>{
        setContentInfo(e.target.value);
    }
    return (
        <div className={styles.v_card_notice}>
            {/* <Stack direction="horizontal" className={styles.row_space_between}>
                <div>
                    <h1 className={`${styles.mediumText} ${styles.blueColorText}`} onClick={handleClick } > 작성 완료 </h1>
                </div>
            </Stack> */}
            <Stack direction="horizontal" className={`${styles.align_bottom} ${styles.border_bottom}`} gap={4} >
                <div>
                    <h1 className={`${styles.titleText} `} > 자료 작성 </h1>
                </div>
            </Stack>

            <Stack direction="horizontal" className={`${styles.border_bottom} ${styles.align_center}`}>
                <div className={styles.hbox_lec_ass_due}>
                    <h1 className={`${styles.contentBoldText} `} > 제목 </h1>
                </div>
                <input
                    className={ `${styles.indexMediumText} ${styles.inputTitle} `}
                    type="text"
                    placeholder="제목을 입력해주세요"
                    onChange={handletitle}
                    // value={logIn_id}
                />
            </Stack>

            <Stack direction="horizontal" className={styles.border_bottom}>
                <div className={styles.hbox_lec_ass_due}>
                    <Stack direction="horizontal">
                        <img src={file_image} />
                        <h1 className={`${styles.contentBoldText} `} > 파일 </h1>
                    </Stack>
                </div>
                <div /* onClick={handleFile} */>
                    <h1 className={`${styles.indexMediumText} `} >
                        <input type="file" name="file"  onChange={handlefile}/>
                        [{lecDetail_fileSize}KB]
                    </h1>
                </div>
            </Stack>
            <Stack direction="horizontal" className={styles.border_bottom}>
                <div className={styles.hbox_lec_ass_content2}>
                    <h1 className={`${styles.contentBoldText} `} > 내용 / 주의사항 </h1>
                </div>
                <input
                    className={ `${styles.indexMediumText} ${styles.inputWrap} `}
                    type="text"
                    placeholder="내용을 입력해주세요"
                    onChange={handlecontent}
                    // value={logIn_id}
                />
            </Stack>

            <Container direction="horizontal" className={styles.hbox_lec_ass_due}>
                <Row className={styles.hbox_lec_ass_due}>
                    <Col>
                        <button type="button" onClick={handleClick } className={styles.searchButton} > 작성완료 </button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}