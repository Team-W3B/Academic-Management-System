/* eslint-disable */
import React, { useEffect, useState } from "react";
import styles from "./../scss/Lec_detail.module.scss";

import { Button, Col, Row } from "react-bootstrap";
import axios from 'axios';
import info from "../data/lecfile";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { setIndex } from '../store';
import { Link, useNavigate } from "react-router-dom";

export default function File_prof() {
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
        <div className={styles.whiteCard_big}>
            <div className={styles.class_name}>
                자료실</div>
            {lecinfo.map(function (a, i) {
                //console.log(lec_notice[0]);
                return (
                    <div key={i} i={i} lecinfo={a}>
                        <Row style={{
                            // width: "100%",
                            // textAlign: "center",
                            borderBottom: "1px solid #D6D6D6",
                            margin: "3px"
                        }} className={styles.contain}>
                            <Col onClick={() => handleIndex(a.lecPage_index)}>
                                {a.lecPage_title}
                            </Col>
                            <Col style={{ textAlign: "right" }}>
                                {a.lecPage_date}</Col>
                        </Row>
                    </div>
                );
            })
            }
            {title?
            <Row style={{
                // width: "100%",
                // textAlign: "center",
                borderBottom: "1px solid #D6D6D6",
                margin: "3px"
            }} className={styles.contain}>
                <Col >
                    {title}
                </Col>
                <Col style={{ textAlign: "right" }}>
                    {now.getFullYear()}-{now.getMonth() + 1}-{now.getDate()}</Col>
            </Row>:
            <div/>}
            <div style={{ textAlign: "right", paddingTop: "10px" }} >
                <button style={{ padding: "3px" }} onClick={() => { navigate('/LecPage_file_detail_prof') }}>
                    등록
                </button>
            </div>

        </div>
    );
}