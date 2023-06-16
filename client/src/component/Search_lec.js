/* eslint-disable */
import React, { useEffect, useState } from "react";
import styles from "./../scss/Searchlec.module.scss";
import { Col, Row } from "react-bootstrap";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import {setMajorcheck , setLeccheck, setValuecheck} from "../store";

export default function Search_lec() {
    let [major, setMajor] = useState('');
    let [lec, setLecture] = useState('')
    let [btnActive, setBtnActive] = useState("");
    let [value, setValue] = useState('');
    const dispatch = useDispatch();
    const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId, value) => {
    //console.log(value);
    setValue(value);
    //dispatch(setValuecheck(value));
    setSelectedButton(buttonId);
  };

  const requestCheck =() =>{
    //dispatch 구분, 학부, 강의 and response에 넘겨준다
    dispatch(setMajorcheck(major));
    dispatch(setLeccheck(lec));
    dispatch(setValuecheck(value));
   
    
  }

    return (
        <div className={styles.whiteCard}>

            <div className={styles.lec_name}>
                과목검색
            </div>
            <div className={styles.RootWrapperNaN}>
                <Row >
                    <Col sm={4}>
                        구분
                    </Col>
                    <Col sm={4}>
                    <button
                        onClick={() => handleButtonClick(1,"전공")} 
                        className={`${styles.button} ${ selectedButton === 1 ? styles.selected : ''}`}
                    >
                        전공
                    </button></Col>
                    <Col sm={4}><button
                        onClick={() => handleButtonClick(2,"교양")} 
                        className={`${styles.button} ${selectedButton === 2 ? styles.selected : styles.button}`}                     
                    >
                        교양
                    </button></Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        학과/
                        학부
                    </Col>
                    <Col sm={9}>
                        <input
                            className={styles.input}
                            type="text" onChange={(e) => { setMajor(e.target.value) }}
                            placeholder="" />
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        과목
                    </Col>
                    <Col sm={9}>
                        <input
                            className={styles.input}
                            type="text" onChange={(e) => { setLecture(e.target.value) }}
                            placeholder="" />
                    </Col>
                </Row>
              
            </div>
                <button type="button" onClick={requestCheck} className={styles.searchButton}> 검색 </button>
        </div>
    );
}