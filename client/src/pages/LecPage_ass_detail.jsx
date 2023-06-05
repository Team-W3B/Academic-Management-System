import React from "react";
import style from "./../scss/Lec.module.scss";

import HeaderNav from "./../component/HeaderNav";
import Lec from "./../component/Lec";
import Footer from "./../component/Footer";
import Detail_ass from "../component/Detail_ass";
import Detail_assPost from "../component/Detail_assPost";
export default function LecPage_not_detail() {
    return (
        <>
            <HeaderNav />
            <div>
                <Lec />
                <div className={style.detail_wrapp}>
                    <Detail_ass/>
                </div>
                <div style={{marginTop:"50px"}} className={style.detail_wrapp}>
                    <Detail_assPost/>
                </div>
            </div>
            <Footer />
        </>
    );
};
