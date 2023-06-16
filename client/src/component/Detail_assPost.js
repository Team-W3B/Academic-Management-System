/* eslint-disable */
import React, { useEffect, useState } from "react";
import styles from "./../scss/Lec.module.scss";
import { Col, Row, Stack } from "react-bootstrap";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import file_image from './../imgs/file_image.svg'
import { useNavigate } from "react-router-dom";
import { setFile, setFilesize, setFilecontent ,setAss1check} from "../store";

export default function Detail_assPost() {
    const lecture_name = useSelector((state) => state.lecture.lecture); //querystring 전달인자
    const index = useSelector((state)=>state.index.index); //querystring 전달인자
    let userID = useSelector( (state) => state.userID ); // userID 불러오기

    const navigate = useNavigate();
    const formData = new FormData();
    let [lecDetail_content, setContentInfo] = useState('');
    let [lecDetail_file, setFileInfo] = useState('');
    let [lecDetail_fileName, setFilenameInfo] = useState('');
    let [lecDetail_fileSize, setFilesizeInfo] = useState('');
    
    const dispatch = useDispatch();
    dispatch(setFile(lecDetail_fileName));
    dispatch(setFilesize(lecDetail_fileSize));
    dispatch(setFilecontent(lecDetail_content));
    console.log(lecDetail_fileName);
    const Submit_file = (e) =>{
       // const navigate = useNavigate();
       // navigate('/Detail_assPost_after')

        let asscheck1=2;
        //const dispatch = useDispatch();
        dispatch(setAss1check(asscheck1));
        console.log(asscheck1);

        formData.append("lecDetail_file",lecDetail_file);
        formData.append("lecDetail_fileName",JSON.stringify(lecDetail_fileName));
        formData.append("lecDetail_fileSize",JSON.stringify(lecDetail_fileSize));
        formData.append("lecDetail_content",JSON.stringify(lecDetail_content));
        formData.append("lecture",JSON.stringify(lecture_name));
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
        <div className={styles.v_card_notice}>
            <Stack direction="horizontal" className={styles.row_space_between}>
                <div>
                    <h1 className={`${styles.mediumText} ${styles.blueColorText}`} onClick={() => navigate('/LecPage_ass')} > 돌아가기 </h1>
                </div>
                <div>
                    <h1 className={`${styles.mediumText} ${styles.mainColorText}`} onClick={Submit_file} > 제출하기 </h1>
                </div>
            </Stack>
            <Stack direction="horizontal" className={`${styles.align_bottom} ${styles.border_bottom}`} gap={4} >
                <div>
                    <h1 className={`${styles.titleText} `} onClick={() => navigate('/LecPage_notice')} > 과제 제출 </h1>
                </div>
            </Stack>
            {/* -------------- */}
            
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
                <div className={styles.hbox_lec_ass_content}>
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
        </div>
    );
}