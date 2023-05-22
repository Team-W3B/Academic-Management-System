/* eslint-disable */
import React, { useEffect,useState } from "react";
import './../App.scss';
import styles from "./../scss/Lec_detail.module.scss";
import { Col, Row } from "react-bootstrap";
import axios from 'axios';
import info from "../data/lecfile";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Lec() {
    let [lecInfo, setLecInfo] = useState(info);
    useEffect(() => {
        getLecInfo();
    }, []);
    let getLecInfo = () => {
        axios.get('/api/lecpage/lec_file')
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
        자료실</div>
            {lecInfo.map(function(a,i){
                //console.log(lec_notice[0]);
                return(
                    <div>
                        <div key={i} i={i} lecInfo={lecInfo[i]}>
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
                    </div>
                );
            })
        }
        
        </div>
    );
}