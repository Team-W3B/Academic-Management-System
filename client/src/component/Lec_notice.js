/* eslint-disable */
import React, { useEffect,useState } from "react";
import styles from "./../scss/Lec_detail.module.scss";
import { Col, Row } from "react-bootstrap";
import axios from 'axios';
import info from "../data/lecnotice";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Lec() {
    let [lecInfo, setLecInfo] = useState(info);
    useEffect(() => {
        getLecInfo();
    }, []);
    let getLecInfo = () => {
        axios.get('/api/lecpage/lec_notice')
        .then((res) => {
            if(res.status===200){
                let copy = [...res.status];
                setLecInfo(copy);
            }
        })
        .catch((error) => {
            console.log(error.data)
            if (error.response.status === 401) {
                alert("권한없음(강의페이지");
            }
            if (error.response.status === 500) {
                alert("서버 오류 발생!(강의페이지)");
            }
        })
    };
    //getLecInfo();
   // console.log(lec_notice[0].lecPage_title);
    
    return (
        <div className={styles.whiteCard}>

        <div className={styles.class_name}>
        공지사항</div>
            {lecInfo.map(function(a,i){
                //console.log(lec_notice[0]);
                return(
                    <div key={i} i={i} lecInfo={lecInfo[a]} >
                        <Row style={{
                        width: "100%",
                        textAlign: "center",
                        borderBottom: "1px solid #aaa",
                        margin:"3px"
                      }}>
                            <Col>
                                {lecInfo[i].lecPage_title}
                            </Col>
                            <Col>
                                {lecInfo[i].lecPage_date}</Col>
                        </Row>
                    </div>
                );
            })
        }
        
        </div>
    );
}