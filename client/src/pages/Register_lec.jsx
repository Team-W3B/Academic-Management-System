import React from "react";
import styles from "./../scss/Register_lec.module.scss";
import { Col, Row, Stack } from "react-bootstrap";
import HeaderNav from "./../component/HeaderNav";
import Footer from "./../component/Footer";
import Search_lec from "../component/Search_lec";
import Response_lec from "../component/Response_lec";
import Request_lec from "../component/Request_lec";
import registerlec from './../imgs/registerlec.svg'
import arrowshape from './../imgs/arrowshape.svg';

export default function Register_lec() {
   
    return (
        <>
            <HeaderNav />
            <h1 className={styles.lecName}> 수강신청 </h1>
            <Stack direction="horizontal" gap={2} className={styles.hbox_lec} >
                <Search_lec />
                <Response_lec />
                <div style={{ display : "flex", justifyContent : "center" }}>
                    <img src={arrowshape}/>
                </div>
                <Request_lec />
                {/* <Row>
                    <Col sm={2}>
                    </Col>
                    <Col sm={7}>
                    </Col>
                    <Col sm={1}>
                    </Col>
                    <Col sm={2}>
                    </Col>
                </Row> */}
            </Stack>
            <Footer />
        </>
    );
};
