/* eslint-disable */
import React, { useEffect,useState } from "react";
import styles from "./../scss/Lec_detail.module.scss";
import { Col, Row } from "react-bootstrap";
import axios from 'axios';
import info from "../data/lecfile";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Lec_file() {
    const lecture_name = useSelector((state)=>state.lecture.lecture); //querystring 전달인자
    let userID = useSelector( (state) => state.userID ); // userID 불러오기
    let navigate = useNavigate();

    let [lecinfo, setLecInfo] = useState(info);
    useEffect(async() => {
        let getLecInfo = async() => {
            axios.get('/api/lecpage/lec_file', {
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
        await getLecInfo();
    }, []);
    /* let getLecInfo = () => {
        axios.get('/api/lecpage/lec_file', {
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
    }; */
    //getLecInfo();
   // console.log(lec_notice[0].lecPage_title);
    
    return (
        <div onClick={() => navigate('/LecPage_file')}>
            <div className={styles.whiteCard}>

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
                                <Col>
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
        </div>
    );
}