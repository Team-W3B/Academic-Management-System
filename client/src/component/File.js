/* eslint-disable */
import React, { useEffect, useState } from "react";
import styles from "./../scss/Lec_detail.module.scss";
import { Col, Row } from "react-bootstrap";
import axios from 'axios';
import info from "../data/lecfile";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import {setIndex} from '../store';
import {  Link, useNavigate  } from "react-router-dom";

export default function File() {
    const lecture_name = useSelector((state)=>state.lecture.lecture); //querystring 전달인자
    let userID = useSelector( (state) => state.userID ); // userID 불러오기
    const dispatch = useDispatch();

    let [lecinfo, setLecInfo] = useState(info);
    useEffect(() => {
        getLecInfo();
    }, []);
    let getLecInfo = () => {
        axios.get('/api/lecpage/file', {
            params: {
                lecture: lecture_name,
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
                            <Col onClick={ () => handleIndex(a.lecPage_index)}>
                                {a.lecPage_title}
                            </Col>
                            <Col style={{ textAlign: "right" }}>
                                {a.lecPage_date}</Col>
                        </Row>
                    </div>
                );
            })
            }

        </div>
    );
}