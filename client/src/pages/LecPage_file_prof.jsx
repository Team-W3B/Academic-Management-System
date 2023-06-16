import styles from "./../scss/Lec.module.scss";

import HeaderNav from "../component/HeaderNav";
import Footer from "../component/Footer";
import Lec from "../component/Lec";

import React, { useEffect, useState } from "react";

import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import axios from 'axios';
import info from "../data/lecfile";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { setIndex } from '../store';
import { Link, useNavigate } from "react-router-dom";

export default function LecPage_file_prof() {
    //uerID 가지고 와서 교수이면 File_prof로 학생이면 File로
    return (
        <>
            <HeaderNav />
            <Lec />
            <div className={styles.hbox_lec}>
                <File_prof />
            </div>
            <Footer />
        </>
    );
};

let File_prof = () => {
    const lecture_name = useSelector((state) => state.lecture.lecture); //querystring 전달인자
    let userID = useSelector((state) => state.userID); // userID 불러오기
    const dispatch = useDispatch();
    //var title=localStorage.getItem('title');
    let [title, setTitle] = useState('');
    let now = new Date();
    let [content, setContent] = useState('')
    useEffect(() => {
        let title = localStorage.getItem('key')
        let content = localStorage.getItem('content')

        if (title) {
            console.log(title);
            setTitle(title);
            setContent(content);
        } else {
            console.log('No title found in localStorage.');
        }
    }, [])

    console.log(title);
    console.log(content);
    let [lecinfo, setLecInfo] = useState(info);
    const navigate = useNavigate();

    const handleIndex = (index) => {
        dispatch(setIndex(index));
        //console.log(index);
        navigate('/LecPage_file_detail');
    }
    return (
        <div className={styles.v_card_big}>
            <h1 className={`${styles.titleText} ${styles.mainColorText}`}> 자료실 </h1>
            
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
            <Container>
            {
                title?
                    <Row className={` ${styles.hbox} `}>
                        <Col lg={6} className={styles.contentTextNotice}> {title} </Col>
                        <Col></Col>
                        <Col lg={3} className={`${styles.contentTextNotice} `} > {now.getFullYear()}-{now.getMonth() + 1}-{now.getDate()} </Col>
                    </Row> :
                    <div/>
            }
            </Container>
            <Container direction="horizontal" className={styles.hbox_lec_ass_due}>
                <Row className={styles.hbox_lec_ass_due}>
                    <Col>
                        <button type="button" onClick={() => { navigate('/LecPage_file_detail_prof') }} className={styles.searchButton} > 글쓰기 </button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}