/* eslint-disable */
import React, { useEffect, useState } from "react";
import styles from './../scss/LecCard.module.scss';
import { Col, Row } from "react-bootstrap";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import info from "../data/data";
import { useSelector } from "react-redux";

function LecCard() {
 
    // let [lecInfo, setLecInfo] = useState("");
    let [lecInfo, setLecInfo] = useState(info);
    let userID = useSelector( (state) => {return state.userID} );
    // console.log(lecInfo);

    useEffect( async() => {
      let getLecInfo = async() => {
        axios.get('/api/home', {params : {userID : userID} }, {withCredentials : true})
            .then((res)=> {
              console.log('성공~!')
              let copy = {...res.data}
              setLecInfo(copy)
            })
            .catch((error)=>{
              console.log('실패!')
              console.log(error.data)
            })
      };
      console.log('getLecInfo 실행');
      await getLecInfo();
    }, []);
    
    return (
        <>
        
        <Row className={styles.Wrapper} >
            {
                ['mon', 'tue', 'wed', 'thur', 'fri'].map(function(a, i) {
                    // console.log(a);
                    
                    return (
                        <DayCard key={i} i={i} lecInfo={lecInfo[a]} day={['월요일', '화요일', '수요일', '목요일', '금요일']} color={['#4DA58B', '#FFB650', '#F55848', '#7F6BAF', '#6577C7' ]} />
                    )
                })
            }
        </Row>
        </>
    )
}

export default LecCard;

let DayCard = (props) => {
  let lecInfo = props.lecInfo;
  let color = props.color;
  let day = props.day[props.i];

  return (
    <>
      <Col>
        <div className={styles.whiteCard}>
          <h2 className={styles.day} style={{ color: color[props.i] }}>
            {" "}
            {day}{" "}
          </h2>
          {lecInfo.map(function (a, i) {
            return <Lec key={i} lecInfo={a} />;
          })}
        </div>
      </Col>
    </>
  );
};

let Lec = (props) => {
  let lecInfo = props.lecInfo;
  // console.log(lecInfo.home_lec_class);

  return (
    <>
      <div className={styles.Lec}>
        <p className={styles.lec_name}> {lecInfo.home_lec} </p>
        <div className={styles.lec_detail}>
          <p className={styles.classroom}> {lecInfo.home_lec_class} </p>
          <p className={styles.prof}> {lecInfo.home_prof} 교수님 </p>
          <p className={styles.duration}> {lecInfo.home_lectime}교시 </p>
        </div>
      </div>
    </>
  );
};
