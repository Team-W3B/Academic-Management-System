/* eslint-disable */
import React, { useEffect,useState } from "react";
import styles from "./../scss/Lec_detail.module.scss";
import { Col, Row } from "react-bootstrap";
import axios from 'axios';
import info from "../data/leclecture";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Lecture() {
    let [lecInfo, setLecInfo] = useState(info);
    useEffect(() => {
        getLecInfo();
    }, []);
    let getLecInfo = () => {
        axios.get('/api/lecpage/lecture')
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
   // getLecInfo();
   // console.log(lec_notice[0].lecPage_title);
    
    return (
        <div className={styles.whiteCard}>

        <div className={styles.class_name}>
        온라인 강의 리스트</div>
            {lecInfo.map(function(a,i){
                //console.log(lec_notice[0]);
                return(
                   
                    <div key={i} i={i} lecInfo={a}>
                        <Row style={{
                        // width: "100%",
                        // textAlign: "center",
                        borderBottom: "1px solid #aaa",
                        margin:"3px"
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
    );
}