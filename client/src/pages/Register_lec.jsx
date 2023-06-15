import React from "react";
import style from "./../scss/Register_lec.module.scss";
import { Col, Row } from "react-bootstrap";
import HeaderNav from "./../component/HeaderNav";
import Footer from "./../component/Footer";
import Search_lec from "../component/Search_lec";
import Response_lec from "../component/Response_lec";
import Request_lec from "../component/Request_lec";
import { useSelector } from "react-redux";
import registerlec from './../imgs/registerlec.svg'
import arrowshape from './../imgs/arrowshape.svg';

export default function Register_lec() {
   
    return (
        <>
            <HeaderNav />
            <div className={style.Wrapper}>
                <img src={registerlec} style={{marginTop:"1%", width:"10%", height:"10%"}}/>
                <Row>
                    <Col sm={2}>
                        <Search_lec />
                    </Col>
                    <Col sm={7}>
                        <Response_lec />
                    </Col>
                    <Col sm={1}>
                        <img className={style.img_display} src={arrowshape}/>
                    </Col>
                    <Col sm={2}>
                        <Request_lec />
                    </Col>
                </Row>
            </div>
            <Footer />
        </>
    );
};
