/* eslint-disable */
import React, { useState } from "react";
import styles from './../scss/HeaderNav.module.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import magic from './../imgs/magic.svg'
import face from './../imgs/faceid.svg'
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePopup from "../component/ProfilePopup";
import MainPageLecDetail from "./MainPageLecDetail";

let HeaderNav = () => {

    let navigate = useNavigate();
    // let user = useSelector( (state) => state.user )
    let [profile, setProfile] = useState(false);
    let [profileName, setProfileName] = useState(true);
    let [detailModal, setDetailModal] = useState(false);

    return (
        <>
            <div className="Nav" id={styles.headerStyle} >
                <Navbar collapseOnSelect expand="lg" bg='white' sticky='top'>
                    <Container style={{ padding: "0 5rem 0 5rem", height: "12vh" }}>
                        <Navbar.Brand onClick={ () => { setDetailModal(!detailModal) } } id={styles.magic}><img className={styles.img} src = {magic} /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto nav">
                                <Nav.Link style={{ padding: "0 1rem" }} id={styles.nav} onClick={ () => {navigate( '/schedule' ) } } > 전체일정 </Nav.Link>
                                <Nav.Link style={{ padding: "0 1rem" }} id={styles.nav} onClick={ () => { navigate('/Plan/Search') } } > 강의계획서 </Nav.Link>
                                <Nav.Link style={{ padding: "0 1rem" }} id={styles.nav} onClick={ () => {navigate( '/Score' ) } } > 성적/석차 </Nav.Link>
                            </Nav>
                            <div
                                onMouseOver={()=>{ setProfile(true); setProfileName(false);}}
                                onMouseOut={()=>{ setProfile(false); setProfileName(true);}}
                            >
                                {
                                    profileName == true? <ProfileName /> : null
                                }
                                {
                                    profile == true? <ProfilePopup /> : null
                                }
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div style={{ display : "flex", justifyContent : "center" }}>
                {
                    detailModal == true? <MainPageLecDetail /> : null
                }
            </div>
            
        </>
    );
};

export default HeaderNav

let ProfileName = () => {

    let user = useSelector( (state) => state.user )
    // console.log('user is ' + user);

    return (
        <div id={styles.faceid}>
            <p style={{ marginRight: "1rem" }}> {user} </p>
            <img src={face} />
        </div>
    )
}