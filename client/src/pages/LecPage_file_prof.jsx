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

import HeaderNav from "../component/HeaderNav";
import Lec from "../component/Lec";
import Footer from "../component/Footer";
import File_prof from "../component/File_prof";

export default function LecPage_file_prof() {
    //uerID 가지고 와서 교수이면 File_prof로 학생이면 File로
    return (
        <>
            <HeaderNav />
            <div>
                <Lec />
                <div className={style.detail_wrapp}>
                    
                   <File_prof />
                </div>
            </div>
            <Footer />
        </>
    );
};
