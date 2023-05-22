/* eslint-disable */
import React from "react";
//import './../App.scss';
import styles from './../scss/HeaderNav.module.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import magic from './../imgs/magic.svg'
import face from './../imgs/faceid.svg'
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

let HeaderNav = () => {

    let navigate = useNavigate();
    let user = useSelector( (state) => state.user )

    return (
        <>
            <div className="Nav" id={styles.headerStyle} >
                <Navbar collapseOnSelect expand="lg" bg='white' sticky='top'>
                    <Container style={{ padding: "0 5rem 0 5rem", height: "12vh" }}>
                        <Navbar.Brand id={styles.magic} href="#home"><img className={styles.img} src = {magic} /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto nav">
                                <Nav.Link style={{ padding: "0 1rem" }} className={styles.nav} onClick={ () => {navigate( '#/schedule' )} } > 전체일정 </Nav.Link>
                                <Nav.Link style={{ padding: "0 1rem" }} className={styles.nav} onClick={ () => '#/lecture_plan' } > 강의계획서 </Nav.Link>
                                <Nav.Link style={{ padding: "0 1rem" }} className={styles.nav} onClick={ () => {navigate( '#/scores' )} } > 성적/석차 </Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link className={styles.faceid}  href = "#mypage">
                                    <p style={{ marginRight: "1rem" }}> {user} </p>
                                    <img src={face} />
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
};

export default HeaderNav