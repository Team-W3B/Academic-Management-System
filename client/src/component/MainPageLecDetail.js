import React, { useState } from 'react';
import styles from './../scss/MainPageLecDetail.module.scss';
import MPLD_data from '../data/MainPageLecDetail_data';
import axios from 'axios';

let MainPageLecDetail  = () => {

    let [mpld, setMpld] = useState(MPLD_data);

    let getMPLD = () => {
        axios.get('/api/home/detail')
            .then((res)=> {
                console.log(res);
                let copy = [...res.data]
                setMpld(copy)
            })
            .catch((error)=>{
                console.log(error.data)
            })
    };
    getMPLD();

    return (
        <div className={styles.Dcard}>
            {/* 제목 행 */}
            <SubjectLine subject = "과목" lec_left_total = "남은강의" ass_left_total = "남은과제" />
            {/* 내용 행들 */}
            {
                mpld.map(function(a, i) {
                    return (
                        <SubjectDetail
                            key = {i}
                            i = {i} 
                            subject = {a.name}
                            lec_left_total = {a.lec_left_total}
                            lec_left_prior = {a.lec_left_prior}
                            lec_left_duration = {a.lec_left_duration}
                            ass_left_total = {a.ass_left_total}
                            ass_left_prior = {a.ass_left_prior}
                            ass_left_duration = {a.ass_left_duration}
                        />
                    )
                })
            }
        </div>
    );
};

export default MainPageLecDetail;

let SubjectLine = (props) => {
    return (
        <div className={styles.subjectLine}>
            <div className={styles.sub}>
                <p className={styles.font}>{props.subject}</p>
            </div>
            <div className={styles.sub}>
                <p className={styles.font}>{props.lec_left_total}</p>
            </div>
            <div className={styles.sub}>
                <p className={styles.font}>{props.ass_left_total}</p>
            </div>
        </div>
    )
}
let SubjectDetail = (props) => {
    return (
        <div className={styles.subjectLine}>
            <div className={styles.sub}>
                <p className={styles.font}> {props.subject} </p>
            </div>
            <div className={styles.sub}>
                {
                    props.lec_left_total == 0?
                    <p className={styles.font_special}>남아있는 강의가 없습니다! 😆</p> :
                    <p className={styles.num424}>{props.lec_left_total}개의 강의 중 <strong className={styles.num424Emphasis1}>{props.lec_left_prior}개</strong>가 <strong className={styles.num424Emphasis1}>{props.lec_left_duration}일 후</strong> 마감이에요!</p>
                }
            </div>
            <div className={styles.sub}>
                {
                    props.ass_left_total == 0?
                    <p className={styles.font_special}>남아있는 과제가 없습니다! 😆</p> :
                    <p className={styles.num424}>{props.ass_left_total}개의 과제중 <strong className={styles.num424Emphasis1}>{props.ass_left_prior}개</strong>가 <strong className={styles.num424Emphasis1}>{props.ass_left_duration}일 후</strong> 마감이에요!</p>
                }
            </div>
        </div>
    )
}