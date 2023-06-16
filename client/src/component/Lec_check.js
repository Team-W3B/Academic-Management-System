/* eslint-disable */
import React, { useEffect, useState } from "react";
import styles from "./../scss/Lec.module.scss";
import { Col, Container, Row, Stack } from "react-bootstrap";
import axios from 'axios';
import info from "./../data/leccheck";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";

export default function Lec_check() {
    const lecture_name = useSelector((state)=>state.lecture.lecture); //querystring 전달인자
    let userID = useSelector( (state) => state.userID ); // userID 불러오기

    let [lecinfo, setLecInfo] = useState(info);

    /* useEffect(() => {
        let getLecInfo = () => {
            axios.get('/api/lecpage/lec_check', {
                params: {
                    lecture: lecture_name,
                    userID : userID
                }
            }, {withCredentials : true})
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
        getLecInfo();
    }, []); */
    let day;
    let check_color;
    return (
        <div className={styles.v_card_check}>
            <div className={` ${styles.bg_white} ${styles.sticky_top} `}>
                <h1 className={` ${styles.titleText} ${styles.mainColorText}  `}> 출석 </h1>
            </div>
            <Stack gap={2}>
                {
                    lecinfo.map(function (a, i) {
                        return (
                                <div >
                                    <Stack direction="horizontal" gap={2} >
                                        <div className={styles.hbox_lec_check}>
                                            <h3 className={`${styles.indexText} `}> {a.lecPage_check_id}주차 </h3>
                                        </div>
                                        <Stack direction="horizontal" >
                                            {
                                                !a.first ?
                                                    <ColorBox color="rgb(238, 238, 238)" /> :
                                                    a.first === "출석" ?
                                                        <ColorBox color="#28CD41" /> :
                                                        a.first === "결석" ?
                                                            <ColorBox color="#FF2D55" /> :
                                                            a.first === "지각" ?
                                                                <ColorBox color="#FF9500" /> :
                                                                a.first === "공결" ?
                                                                    <ColorBox color="#AF52DE" /> :
                                                                    <ColorBox color="rgb(238, 238, 238)" />
                                            }
                                        </Stack>
                                        <Stack direction="horizontal">
                                            {
                                                !a.second ?
                                                    <ColorBox color="rgb(238, 238, 238)" /> :
                                                    a.second === "출석" ?
                                                        <ColorBox color="#28CD41" /> :
                                                        a.second === "결석" ?
                                                            <ColorBox color="#FF2D55" /> :
                                                            a.second === "지각" ?
                                                                <ColorBox color="#FF9500" /> :
                                                                a.second === "공결" ?
                                                                    <ColorBox color="#AF52DE" /> :
                                                                    <ColorBox color="rgb(238, 238, 238)" />
                                            }
                                        </Stack>
                                        <Stack direction="horizontal">
                                            {
                                                !a.third ?
                                                    <ColorBox color="rgb(238, 238, 238)" /> :
                                                    a.third === "출석" ?
                                                        <ColorBox color="#28CD41" /> :
                                                        a.third === "결석" ?
                                                            <ColorBox color="#FF2D55" /> :
                                                            a.third === "지각" ?
                                                                <ColorBox color="#FF9500" /> :
                                                                a.third === "공결" ?
                                                                    <ColorBox color="#AF52DE" /> :
                                                                    <ColorBox color="rgb(238, 238, 238)" />
                                            }
                                        </Stack>
                                        <Stack direction="horizontal">
                                            {
                                                !a.fourth ?
                                                    <ColorBox color="rgb(238, 238, 238)" /> :
                                                    a.fourth === "출석" ?
                                                        <ColorBox color="#28CD41" /> :
                                                        a.fourth === "결석" ?
                                                            <ColorBox color="#FF2D55" /> :
                                                            a.fourth === "지각" ?
                                                                <ColorBox color="#FF9500" /> :
                                                                a.fourth === "공결" ?
                                                                    <ColorBox color="#AF52DE" /> :
                                                                    <ColorBox color="rgb(238, 238, 238)" />
                                            }
                                        </Stack>
                                    </Stack>
                                </div>
                        
                        );
                    })
                }
            </Stack>
        </div>
    );
}

let ColorBox = ({ color }) => {
    const boxStyle = {
        width: "24px",
        height: "24px",
        backgroundColor: color,
        borderRadius : "6px"
    };

    return <div style={boxStyle}></div>;
}