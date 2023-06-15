/* eslint-disable */
import React from "react";
import HeaderNav from "./../component/HeaderNav";
import Footer from "./../component/Footer";
import styles from './../scss/Prof.module.scss';
import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Prof() {

    return (
        <>
        <div className={styles.container}>
            <div className={styles.content}>
                {/* 헤더 */}
                <HeaderNav />
                {/* 강의계획서 조회 문구 */}
                <h1 className={styles.lecName}> 소프트웨어공학 </h1>
                {/* 컨텐츠 */}
                <div style={{ display : 'flex', justifyContent : 'center', gap : '16px' }}>
                    <Prof_Attendance />
                    <Prof_Grade />
                </div>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
        </>
    );
}

export default Prof;

let Prof_Attendance = () => {

    let student = [
        {name : "임태헌", attendance : false},
        {name : "김도연", attendance : false},
        {name : "김민준", attendance : false},
        {name : "장지웅", attendance : false},
        {name : "김민성", attendance : false},
        {name : "구구구", attendance : false},
    ];
    let [checked, setChecked] = useState(false);

    return (
        <>
        <div className={styles.cardWrapper}>
            <Container className={styles.Container} >
                <Col className={styles.vgap12}>
                    <Row className={styles.hgap12}>
                        <Col className={styles.titleText}>학생</Col>
                        <Col className={styles.titleText}>출석</Col>
                    </Row>
                    <div>
                        {
                            student.map( (a, i) => {
                                console.log(a);
                                return (
                                    <Row className={styles.hgap12}>
                                        <Col className={`${styles.contentText} ${styles.width100}`} > {a.name} </Col>
                                        <Col>
                                            <ToggleButton
                                                className="mb-1"
                                                id="toggle-check"
                                                type="checkbox"
                                                variant="outline-primary"
                                                checked={checked}
                                                value="1"
                                                onChange={(e) => setChecked(e.currentTarget.checked)}
                                            >
                                                attendance
                                            </ToggleButton>
                                        </Col>
                                    </Row>
                                )
                            } )
                        }
                    </div>
                    <Row>
                        <Button variant="outline-primary">저장</Button>
                    </Row>
                </Col>
            </Container>
        </div>
        </>
    )
}

let Prof_Grade = () => {

    let student = [
        {name : "임태헌", attendance : false},
        {name : "김도연", attendance : false},
        {name : "김민준", attendance : false},
        {name : "장지웅", attendance : false},
        {name : "김민성", attendance : false},
        {name : "구구구", attendance : false},
    ];
    let [checked, setChecked] = useState(false);

    return (
        <>
        <div className={styles.cardWrapper}>
            <Container className={styles.Container} >
                <Col className={styles.vgap12}>
                    <Row className={styles.hgap12}>
                        <Col className={styles.titleText}>학생</Col>
                        <Col className={styles.titleText}>성적</Col>
                    </Row>
                    <div>
                        {
                            student.map( (a, i) => {
                                console.log(a);
                                return (
                                    <Row className={styles.hgap12}>
                                        <Col className={`${styles.contentText} ${styles.width100}`} > {a.name} </Col>
                                        <Col>
                                            <Form.Select aria-label="Default select example">
                                                <option>성적</option>
                                                <option value="4.5">A+</option>
                                                <option value="4.0">A</option>
                                                <option value="3.5">B+</option>
                                                <option value="3.0">B</option>
                                                <option value="2.5">C+</option>
                                                <option value="2.0">C</option>
                                                <option value="1.5">D+</option>
                                                <option value="1.0">D</option>
                                                <option value="0.0">F</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                )
                            } )
                        }
                    </div>
                    <Row>
                        <Button variant="outline-primary">저장</Button>
                    </Row>
                </Col>
            </Container>
        </div>
        </>
    )
}