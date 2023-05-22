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
//import "./../App.scss";

import HeaderNav from "./../component/HeaderNav";
import Lec from "./../component/Lec";
import Footer from "./../component/Footer";
import Lec_notice from"./../component/Lec_notice";
import Lec_file from "./../component/Lec_file";
import Lec_lecture from "./../component/Lec_lecture";
import Lec_ass from "./../component/Lec_ass";
import Lec_check from "./../component/Lec_check";

export default function LecPage_notice() {
    return (
        <>
            <HeaderNav />
            <div>
                    <Lec />
            
                    <Lec_notice />
                    
                  
            </div>
            <Footer />

        </>
    );
};
