/* eslint-disable */
import React, { useEffect, useState } from "react";
import styles from "./../scss/Register_lec.module.scss";
import { Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CloseButton from 'react-bootstrap/CloseButton';

export default function Request_lec() {
  let navigate = useNavigate();
  const res_lec = useSelector((state) => state.res_lec.res_lec);
  const res_prof = useSelector((state) => state.res_prof.res_prof);
  const res_time = useSelector((state) => state.res_time.res_time);
  const res_class = useSelector((state) => state.res_class.res_class);
  const res_value = useSelector((state) => state.res_value.res_value);
  let [lecinfo, setLecInfo] = useState([]);
  useEffect(() => {
    let updatedItems=[];
    if(res_value==="전공"||res_value==="교양")
      updatedItems = [...lecinfo, { res_lec, res_prof, res_time, res_class }];
    setLecInfo(updatedItems);
  }, [res_lec, res_prof, res_time, res_class]);

  const handleRemove = (index) => {
    const updatedItems = [...lecinfo];
    updatedItems.splice(index, 1);
    setLecInfo(updatedItems);
  }
    return (
      <div className={styles.v_card}>
        <h1 className={`${styles.titleText} `}> 장바구니 </h1>
        <Col>
          {
            lecinfo.map(function (a, i) {
              return (
                <div key={i} >
                  <Row>
                    <Col sm={10}>
                      <div className={styles.Lec}>
                        <p className={styles.lecture_name}> {a.res_lec} </p>
                        <div className={styles.lec_detail}>
                          <p className={styles.classroom}> {a.res_class} </p>
                          <p className={styles.prof}> {a.res_prof} 교수님 </p>
                          <p className={styles.duration}> {a.res_time}</p>
                        </div>
                      </div>
                    </Col>
                    <Col sm={2}>
                      <CloseButton onClick={() => handleRemove(i)} />
                    </Col>
                  </Row>
                </div>
              )
            })
          }
        </Col>
        <button type="button" onClick={()=> { alert("수강신청 완료!"); navigate( '/MainPage' ); }} className={`${styles.selected_big}`} > 수강신청 </button>
      </div>
    );
}