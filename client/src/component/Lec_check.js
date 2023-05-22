/* eslint-disable */
import React, { useEffect, useState } from "react";
import styles from "./../scss/Lec_check.module.scss";
import { Col, Row } from "react-bootstrap";
import axios from 'axios';
import info from "./../data/leccheck";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Lec() {
    let [lecInfo, setLecInfo] = useState(info);

    useEffect(() => {
        getLecInfo();
    }, []);
    let getLecInfo = () => {
        axios.get('/api/lecpage/lec_check')
            .then((res) => {
                if (res.status === 200) {
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

    let check_color;
    return (
        <div className={styles.whiteCard} style={{ float: "right" }}>

            {/* <div className={styles.whitesmallCard}>
                <ColorBox color="red" />
            </div> */}
            <div className={styles.class_name} >
                출석</div>

            {lecInfo.map(function (a, i) {
                //console.log(a, i);
                //console.log(lecInfo[i].lecPage_check[0]);
                //console.log(lecInfo[i].lecPage_check[1]);
                return (
                    <>
                        <div key={i} lecInfo={lecInfo[a]} style={{ textAlign: "left", padding: "5%" }}>
                            <Row>
                                <Col>
                                    {lecInfo[i].lecPage_check_id}
                                </Col>
                                <Col >
                                    {lecInfo[i].lecPage_check[0] === "출석" ?
                                        <ColorBox color="green" /> :
                                        lecInfo[i].lecPage_check[0] === "결석" ?
                                            <ColorBox color="red" /> :
                                            lecInfo[i].lecPage_check[0] === "지각" ?
                                                <ColorBox color="orange" /> :
                                                lecInfo[i].lecPage_check[0] === "공결" ?
                                                    <ColorBox color="purple" /> :
                                                    <ColorBox color="rgb(238, 238, 238)" />}
                                </Col>
                                <Col>
                                    {lecInfo[i].lecPage_check[1] === "출석" ?
                                        <ColorBox color="green" /> :
                                        lecInfo[i].lecPage_check[1] === "결석" ?
                                            <ColorBox color="red" /> :
                                            lecInfo[i].lecPage_check[1] === "지각" ?
                                                <ColorBox color="orange" /> :
                                                lecInfo[i].lecPage_check[1] === "공결" ?
                                                    <ColorBox color="purple" /> :
                                                    <ColorBox color="rgb(238, 238, 238)" />}
                                </Col>
                                <Col>
                                    {lecInfo[i].lecPage_check[2] === "출석" ?
                                        <ColorBox color="green" /> :
                                        lecInfo[i].lecPage_check[2] === "결석" ?
                                            <ColorBox color="red" /> :
                                            lecInfo[i].lecPage_check[2] === "지각" ?
                                                <ColorBox color="orange" /> :
                                                lecInfo[i].lecPage_check[2] === "공결" ?
                                                    <ColorBox color="purple" /> :
                                                    <ColorBox color="rgb(238, 238, 238)" />}
                                </Col>
                                <Col>
                                    {lecInfo[i].lecPage_check[3] === "출석" ?
                                        <ColorBox color="green" /> :
                                        lecInfo[i].lecPage_check[3] === "결석" ?
                                            <ColorBox color="red" /> :
                                            lecInfo[i].lecPage_check[3] === "지각" ?
                                                <ColorBox color="orange" /> :
                                                lecInfo[i].lecPage_check[3] === "공결" ?
                                                    <ColorBox color="purple" /> :
                                                    <ColorBox color="rgb(238, 238, 238)" />}
                                </Col>
                            </Row>
                        </div>
                    </>
                );
            })
            }
        </div>
    );
}

let ColorBox = ({ color }) => {
    const boxStyle = {
        width: "10px",
        height: "10px",
        backgroundColor: color,
    };

    return <div style={boxStyle}></div>;
}
