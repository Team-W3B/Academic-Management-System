import React from "react";
import hello from "./../imgs/hello.svg";
import style from "./../scss/Lec.module.scss";
import { Col, Row } from "react-bootstrap";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useNavigate,
} from "react-router-dom";

import HeaderNav from "./../component/HeaderNav";
import Lec from "./../component/Lec";
import Footer from "./../component/Footer";
import Ass from "./../component/Ass";

export default function LecPage_ass() {
    return (
        <>
            <HeaderNav />
            <div>
                <Lec />
                <div className={style.detail_wrapp}>
                   <Ass />
                </div>
            </div>
            <Footer />
        </>
    );
};
