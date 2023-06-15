/* eslint-disable */
import React, { useEffect, useState } from "react";
import HeaderNav from "./../component/HeaderNav";
import Footer from "./../component/Footer";
import styles from './../scss/Score.module.scss';
import { Container, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import rightArrow from './../imgs/rightArrow.svg'
import leftArrow from './../imgs/leftArrow.svg'
import Example from "../component/graph";
import score_data from "../data/score_data";
import axios from "axios";


function Score() {

    let dispatch = useDispatch();
    let userID = useSelector( (state) => state.userID ); // userID 불러오기
    let [score, setScore] = useState(score_data);

    /* params 형식은 단순한 형태로는 잘 동작하지만, 객체가 중첩되기 시작하는 순간 제대로 stringify 처리를 하지 못한다. */
    /* axios.defaults.paramsSerializer = params => {
        return qs.stringify(params);
    } */

    useEffect( () => {
        let getScore = () => {
        axios.get('/api/score', {params : {userID : userID} }, {withCredentials : true})
            .then((res)=> {
                console.log('성공~!')
                let copy = [...res.data]
                setScore(copy)
            })
            .catch((error)=>{
                console.log('실패!')
                console.log(error.data)
            })
        };

        console.log('getScore 실행');
         getScore();
    }, []);


    // let score = useSelector( (state) => {return state.Score_data} )
    console.log(score);


    let [currentSemester, setCurrentSemester] = useState(6);
    let score_currSem = score[currentSemester];
    console.log(score_currSem);


    // score_isMajor가 false인 객체의 score_duration 값을 더하는 함수
    function calculateTotalDuration() {
        let [totalMajorDuration, totalOtherDuration] = [0, 0];
    
        score.forEach((semester) => {
            semester.score_contents.forEach((content) => {
                if (content.score_isMajor) {
                    totalMajorDuration += content.score_duration;
                }
                else if (!content.score_isMajor) {
                    totalOtherDuration += content.score_duration;
                }
            });
        });
        return [totalMajorDuration, totalOtherDuration];
    }

    function calculateDeleteDuration() {
        let [deleteMajorDuration, deleteOtherDuration] = [0, 0];
    
        score.forEach((semester) => {
            semester.score_contents.forEach((content) => {
                if (content.score_retake) {
                    if (content.score_isMajor) {
                        deleteMajorDuration += content.score_duration;
                    }
                    else if (!content.score_isMajor) {
                        deleteOtherDuration += content.score_duration;
                    }
                }
            });
        });
        return [deleteMajorDuration, deleteOtherDuration];
    }
    
    let [totalMajorDuration, totalOtherDuration] = calculateTotalDuration();
    let [deleteMajorDuration, deleteOtherDuration] = calculateDeleteDuration();
    let [obtainMajorDuration, obtainOtherDuration] = [totalMajorDuration - deleteMajorDuration, totalOtherDuration - deleteOtherDuration];

    function calculateScore() {
        let [totalMajorScore, totalOtherScore] = [0, 0];
        let [MajorCount, OtherCount] = [0, 0];
    
        score.forEach((semester) => {
            semester.score_contents.forEach((content) => {
                if (content.score_isMajor) {
                    MajorCount += content.score_duration;
                    totalMajorScore += content.score_duration * content.score_grade;
                }
                else if (!content.score_isMajor) {
                    OtherCount += content.score_duration;
                    totalOtherScore += content.score_duration * content.score_grade;
                }
            });
        });
        let [totalScore, totalCount] = [totalMajorScore + totalOtherScore, MajorCount + OtherCount];
        let [majorGrade, otherGrade, totalGrade] = [totalMajorScore / MajorCount, totalOtherScore / OtherCount, totalScore / totalCount];
        return [majorGrade, otherGrade, totalGrade];
    }
    let [majorGrade, otherGrade, totalGrade] = calculateScore();

    /* useEffect(()=> {
        if(currentSemester < 0) {
            alert("가장 처음 학기입니다!")
            setCurrentSemester(0);
        }
        if(currentSemester > 7) {
            alert("가장 마지막 학기입니다!")
            setCurrentSemester(7);
        }
    }, [currentSemester]); */

    return (
        <>
        <div className={styles.container}>
            <div className={styles.content}>
                {/* 헤더 */}
                <HeaderNav />
                {/* 강의계획서 조회 문구 */}
                <h1 className={styles.lecName}> 성적 / 석차 </h1>
                {/* 컨텐츠 */}
                <div className={styles.hbox_score}>
                    <div className={`${styles.vbox_score} ${styles.gap12}`}>
                        <div className={styles.h_card}>
                            <Container className={styles.Container} >
                                <div className={styles.hbox_arrow_toggle}>
                                    <img src={leftArrow} onClick={() => { setCurrentSemester(currentSemester-1); } } ></img>
                                    <h2 className={styles.mainColorText}> {score_currSem.score_semester[0]}학년 {score_currSem.score_semester[2]}학기 </h2>
                                    <img src={rightArrow} onClick={() => { setCurrentSemester(currentSemester+1); } } ></img>
                                </div>
                                <Row className={styles.hbox}>
                                    <Col lg={2} > <div className={`${styles.hbox} ${styles.titleText}`}>전공여부</div> </Col>
                                    <Col lg={4} > <div className={`${styles.hbox} ${styles.titleText}`}>강의명</div> </Col>
                                    <Col lg={3} > <div className={`${styles.hbox} ${styles.titleText}`}>개설학과</div> </Col>
                                    <Col lg="auto" > <div className={`${styles.hbox} ${styles.titleText}`}>학점</div> </Col>
                                    <Col lg="auto" > <div className={`${styles.hbox} ${styles.titleText}`}>성적</div> </Col>
                                    <Col lg="auto" > <div className={`${styles.hbox} ${styles.titleText}`}>재수강</div> </Col>
                                </Row>
                                {/* <br /> */}
                                {
                                    score_currSem.score_contents.map( (a, i) => {
                                        return (
                                            <ScoreRow score={a} key={i} />
                                        );
                                    } )
                                }
                            </Container>
                        </div>
                        <div className={styles.h_card}>
                            {/* <h1> 그래프 </h1> */}
                            <Example />
                        </div>
                    </div>
                    <div className={`${styles.vbox_score} ${styles.gap12}`}>
                        <MiniCard title={"신청학점"} currSemInfo={score_currSem.score_contents} major={totalMajorDuration} other={totalOtherDuration} total="" />
                        <MiniCard title={"삭제학점"} currSemInfo={score_currSem.score_contents} major={deleteMajorDuration} other={deleteOtherDuration} total="" />
                        <MiniCard title={"취득학점"} currSemInfo={score_currSem.score_contents} major={obtainMajorDuration} other={obtainOtherDuration} total="" />
                        <MiniCard title={"평량평균"} currSemInfo={score_currSem.score_contents} major={majorGrade.toFixed(2)} other={otherGrade.toFixed(2)} total={totalGrade.toFixed(2)} />
                        {/* <div className={styles.h_card_mini}> </div> */}
                    </div>
                </div>

            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
        </>
    );
}

export default Score;

let ScoreRow = (props) => {

    let score = props.score;
    let userID = useSelector( (state) => state.userID ); // userID 불러오기


    
    return (
        <Row className={styles.hbox}>
            <Col lg={2} > <div className={`${styles.hbox} ${styles.contentText}`}> { score.score_isMajor ? "Yes" : "No" } </div> </Col>
            <Col lg={4} > <div className={`${styles.hbox} ${styles.contentText}`}> {score.score_lec} </div> </Col>
            <Col lg={3} > <div className={`${styles.hbox} ${styles.contentText}`}> {score.score_department} </div> </Col>
            <Col /* lg={1} */ > <div className={`${styles.hbox} ${styles.contentText}`}> {score.score_duration} </div> </Col>
            <Col /* lg={1} */ > <div className={`${styles.hbox} ${styles.contentText}`}> {score.score_grade} </div> </Col>
            <Col /* lg={1} */ > <div className={`${styles.hbox} ${styles.contentText}`}> { score.score_retake ? "Yes" : "No" } </div> </Col>
        </Row>
    );
}

let MiniCard = (props) => {

    let title = props.title;
    let major = props.major;
    let other = props.other;
    let currSemInfo = props.currSemInfo;
    let total = props.total;

    function calculateDuration() {
        let [MajorDuration, OtherDuration] = [0, 0];
    
        currSemInfo.forEach((semester) => {
            if (semester.score_isMajor) {
                MajorDuration += semester.score_duration;
            }
            else if (!semester.score_isMajor) {
                OtherDuration += semester.score_duration;
            }
        });
        return [MajorDuration, OtherDuration];
    }
    function calculateDeleteDuration() {
        let [deleteMajorDuration, deleteOtherDuration] = [0, 0];
    
        currSemInfo.forEach((semester) => {
            if (semester.score_retake) {
                if (semester.score_isMajor) {
                    deleteMajorDuration += semester.score_duration;
                }
                else if (!semester.score_isMajor) {
                    deleteOtherDuration += semester.score_duration;
                }
            }
        });
        return [deleteMajorDuration, deleteOtherDuration];
    }
    function calculateScore() {
        let [MajorScore, OtherScore] = [0, 0];
        let [MajorCount, OtherCount] = [0, 0];
    
        currSemInfo.forEach((semester) => {
            if (semester.score_isMajor) {
                MajorCount += semester.score_duration;
                MajorScore += semester.score_duration * semester.score_grade;
            }
            else if (!semester.score_isMajor) {
                OtherCount += semester.score_duration;
                OtherScore += semester.score_duration * semester.score_grade;
            }
        });
        let [totalScore, totalCount] = [MajorScore + OtherScore, MajorCount + OtherCount];
        let [majorGrade, otherGrade, totalGrade] = [MajorScore / MajorCount, OtherScore / OtherCount, totalScore / totalCount];
        return [majorGrade, otherGrade, totalGrade];
    }

    let [majorGrade, otherGrade, totalGrade] = calculateScore();

    let [currSemMajor, currSemOther] = [0, 0];
    if(title == '신청학점')
        [currSemMajor, currSemOther] = calculateDuration();
    else if(title == '삭제학점')
        [currSemMajor, currSemOther] = calculateDeleteDuration();
    else if(title == '취득학점'){
        let [addMajor, addOther] = calculateDuration();
        let [delteMajor, deleteOther] = calculateDeleteDuration();
        [currSemMajor, currSemOther] = [addMajor - delteMajor, addOther - deleteOther];
    }
    else if(title == '평량평균')
        [currSemMajor, currSemOther] = calculateScore();
    
    return (
        <div className={styles.h_card_mini}>
            <div className={`${styles.cardNav} ${styles.titleText}`}> {title} </div>
            <div className={`${styles.vbox_score}`}>
                <div className={`${styles.hbox_score} ${styles.gap12}`} >
                    <div className={`${styles.contentText}`} > 전공 </div>
                    <div className={`${styles.contentText}`} > 전공외 </div>
                    <div className={`${styles.contentText}`} > 총합 </div>
                </div>
                <div className={`${styles.hbox_score} ${styles.space_between} ${styles.gap12}`} >
                    <div className={`${styles.Text24} ${styles.mainColorText}`} > {major} </div>
                    <div className={`${styles.Text24} `} > {other} </div>
                    <div className={`${styles.Text24} ${styles.greenColorText}`} > {title=='평량평균'? total : major + other} </div>
                </div>
                <div className={`${styles.hbox_score} ${styles.space_between} ${styles.gap12}`} >
                    <div className={`${styles.strongText} ${styles.blueText}`} > {title=='평량평균' ? currSemMajor.toFixed(2) : currSemMajor} </div>
                    <div className={`${styles.strongText} ${styles.blueText}`} > {title=='평량평균' ? currSemOther.toFixed(2) : currSemOther} </div>
                    <div className={`${styles.strongText} ${styles.blueText}`} > {title=='평량평균' ? totalGrade.toFixed(2) : currSemMajor + currSemOther} </div>
                </div>
            </div>
        </div>
    );
}