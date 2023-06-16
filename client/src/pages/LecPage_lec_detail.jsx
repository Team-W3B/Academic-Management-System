import styles from "./../scss/Lec.module.scss";
import HeaderNav from "./../component/HeaderNav";
import Footer from "./../component/Footer";
import Lec from "./../component/Lec";

import React, { useEffect, useState } from "react";
import { Col, Row, Stack } from "react-bootstrap";
import axios from 'axios';
import info from "./../data/detail_lecture";
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function LecPage_not_detail() {
    return (
        <>
            <HeaderNav />
            <Lec />
            <div className={styles.hbox_lec}>
                <Detail_lecture/>
            </div>
            <Footer />
        </>
    );
};

let Detail_lecture = () => {
    const lecture_name = useSelector((state) => state.lecture.lecture); //querystring 전달인자
    const index = useSelector((state)=>state.index.index); //querystring 전달인자
    let userID = useSelector( (state) => state.userID ); // userID 불러오기
   
    const navigate = useNavigate();
    let [lecinfo, setLecInfo] = useState(info);
    let [getvideo, setVideo]= useState('');
    useEffect( () => {
        setVideo('/videos/'+lecinfo.lecDetail_fileName);
    },[]);

    useEffect(() => {
        let getLecInfo = () => {
            axios.get('/api/lecpage/lec/detail_lecture', {
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
         getLecInfo();
    }, []);
    
    return (
        <div className={styles.v_card_notice}>
            <Stack direction="horizontal" className={styles.row_space_between}>
                <div>
                    <h1 className={`${styles.mediumText} ${styles.blueColorText}`} onClick={() => navigate('/LecPage_lecture')} > 돌아가기 </h1>
                </div>
                <div>
                    <h1 className={`${styles.mediumText} ${styles.mainColorText}`} onClick={() => navigate('/LecPage_lecture')} > 온라인 강의 리스트 </h1>
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
            <ReactPlayer
                //url={'https://www.youtube.com/watch?v=BXqHf_eunuQ'}
                url={process.env.PUBLIC_URL + getvideo}
                width='100%'
                height='auto'
                playing={false}
                muted={true}
                controls={true}
                loop={true}
            />
        </div>
    );
}
