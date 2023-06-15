/* eslint-disable */
import React, { useEffect, useState } from "react";
import styles from "./../scss/Requestlec.module.scss";
import { Col, Row } from "react-bootstrap";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import info from "../data/request_lec";
import { useNavigate } from "react-router-dom";
import CloseButton from 'react-bootstrap/CloseButton';

export default function Request_lec() {
  const res_lec = useSelector((state) => state.res_lec.res_lec); //querystring 전달인자
  const res_prof = useSelector((state) => state.res_prof.res_prof); //querystring 전달인자
  const res_time = useSelector((state) => state.res_time.res_time); //querystring 전달인자
  let [lecinfo, setLecInfo] = useState([]);

  useEffect(() => {
    const updatedItems = [...lecinfo, res_lec];
    setLecInfo(updatedItems);
  }, [res_lec]);

  const handleRemove  = (index) =>{
    const updatedItems = [...lecinfo];
    updatedItems.splice(index, 1);
    setLecInfo(updatedItems);
  }
  return (
    <div className={styles.whiteCard}>
      <div className={styles.lec_name}>
        수강과목
      </div>
      <Col>
        {lecinfo.map(function (a, i) {
          return <div key={i}  >
            <Row>
              <Col sm={10}>
                <div className={styles.Lec}>
                  <p className={styles.lecture_name}> {a} </p>
                  {/* <div className={styles.lec_detail}>
                    <p className={styles.classroom}> {a.reg_class} </p>
                    <p className={styles.prof}> {a.reg_prof} 교수님 </p>
                    <p className={styles.duration}> {a.reg_lec_time}</p>
                  </div> */}
                </div>
              </Col>
              <Col sm={2}>
                <CloseButton onClick={() => handleRemove(i)}/>
              </Col>
            </Row>
          </div>
        })}
      </Col>
      <button type="button" className={styles.searchButton} > 수강신청 </button>
    </div>
  );
}