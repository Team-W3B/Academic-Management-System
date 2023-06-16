import styles from "./../scss/Lec.module.scss";
import HeaderNav from "./../component/HeaderNav";
import Lec from "./../component/Lec";
import Footer from "./../component/Footer";
// import Lecture from "../component/Lecture";

import React, { useEffect,useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import axios from 'axios';
import info from "../data/leclecture";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import {setIndex} from '../store';
import {  Link, useNavigate  } from "react-router-dom";

export default function LecPage_lecture() {
    return (
        <>
            <HeaderNav />
            <Lec />
            <div className={styles.hbox_lec}>
                <Lecture />
            </div>
            <Footer />
        </>
    );
};

let Lecture = () => {
    const lecture_name = useSelector((state)=>state.lecture.lecture); //querystring 전달인자
    let userID = useSelector( (state) => state.userID ); // userID 불러오기
    const dispatch = useDispatch();

    let [lecinfo, setLecInfo] = useState(info);
    /* useEffect(() => {
        let getLecInfo = async() => {
            await axios.get('/api/lecpage/lecture', {
                params: {
                    lecture: lecture_name,
                    userID : userID
                }
            }, {withCredentials : true})
            .then((res) => {
                if(res.data===200){
                    let copy = {...res.data};
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
    }, []); */
    const navigate = useNavigate();

    const handleIndex = (index) => {
        dispatch(setIndex(index));
        navigate('/LecPage_lec_detail')
        
    }
    
    return (
        <div className={styles.v_card_big}>

            <h1 className={`${styles.titleText} ${styles.mainColorText}`}> 온라인 강의 리스트 </h1>
            <Container >
            {
                lecinfo.map(function (a, i) {
                    return (
                        <Row className={` ${styles.hbox} `}>
                            <Col onClick={ () => handleIndex(a.lecPage_index)} lg={6} className={styles.contentTextNotice}> {a.lecPage_title} </Col>
                            <Col></Col>
                            <Col lg={3} className={`${styles.contentTextNotice} `}> {a.lecPage_date} </Col>
                        </Row>
                    );
                })
            }
            </Container>
        </div>
    );
}