/* eslint-disable */
import React, { useEffect, useState } from "react";
import styles from "./../scss/Lec_check.module.scss";
import { Col, Row } from "react-bootstrap";
import axios from 'axios';
import info from "./../data/leccheck";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Lec_check() {
    let [lecInfo, setLecInfo] = useState(info);

    useEffect(() => {
        getLecInfo();
    }, []);
    let getLecInfo = () => {
        axios.get('/api/lecpage/lec_check')
            .then((res) => {
                if (res.data === 200) {
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
    //getLecInfo();
    let day;
    let check_color;
    return (
        <div className={styles.whiteCard} style={{ float: "right" }}>
            <div className={styles.class_name} >
                출석</div>
            {lecInfo.map(function (a, i) {
                //console.log(a, i);
                //console.log(lecInfo[i].lecPage_check[0]);
                //console.log(lecInfo[i].lecPage_check[1]);
                return (
                    <>
                        <div key={i} lecInfo={a} style={{ textAlign: "left", padding: "5%" }}>
                            <Row>
                                <Col>
                                    {a.lecPage_check_id}

                                </Col>
                                <Col >
                                    {!a.first ?
                                        <ColorBox color="rgb(238, 238, 238)" /> :
                                        a.first === "출석" ?
                                            <ColorBox color="#28CD41" /> :
                                            a.first === "결석" ?
                                                <ColorBox color="#FF2D55" /> :
                                                a.first === "지각" ?
                                                    <ColorBox color="#FF9500" /> :
                                                    a.first === "공결" ?
                                                        <ColorBox color="#AF52DE" /> :
                                                        <ColorBox color="rgb(238, 238, 238)" />}
                                </Col>
                                <Col>
                                    {!a.second ?
                                        <ColorBox color="rgb(238, 238, 238)" /> :
                                        a.second === "출석" ?
                                            <ColorBox color="#28CD41" /> :
                                            a.second === "결석" ?
                                                <ColorBox color="#FF2D55" /> :
                                                a.second === "지각" ?
                                                    <ColorBox color="#FF9500" /> :
                                                    a.second === "공결" ?
                                                        <ColorBox color="#AF52DE" /> :
                                                        <ColorBox color="rgb(238, 238, 238)" />}
                                </Col>
                                <Col>
                                    {!a.third ?
                                        <ColorBox color="rgb(238, 238, 238)" /> :
                                        a.third === "출석" ?
                                            <ColorBox color="#28CD41" /> :
                                            a.third === "결석" ?
                                                <ColorBox color="#FF2D55" /> :
                                                a.third === "지각" ?
                                                    <ColorBox color="#FF9500" /> :
                                                    a.third === "공결" ?
                                                        <ColorBox color="#AF52DE" /> :
                                                        <ColorBox color="rgb(238, 238, 238)" />}
                                </Col>
                                <Col>
                                    {!a.fourth ?
                                        <ColorBox color="rgb(238, 238, 238)" /> :
                                        a.fourth === "출석" ?
                                            <ColorBox color="#28CD41" /> :
                                            a.fourth === "결석" ?
                                                <ColorBox color="#FF2D55" /> :
                                                a.fourth === "지각" ?
                                                    <ColorBox color="#FF9500" /> :
                                                    a.fourth === "공결" ?
                                                        <ColorBox color="#AF52DE" /> :
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

// let AttendanceCol = ({ check }) => {
//     let color;
//     if (check === "출석") {
//       <ColorBox color="green" />
//     } else if (check === "결석") {
//         <ColorBox color="red" />
//     } else if (check === "지각") {
//         <ColorBox color="orange" />
//     } else if (check === "공결") {
//         <ColorBox color="purple" />
//     } else {
//         <ColorBox color="rgb(238, 238, 238)" />
//     }
// };