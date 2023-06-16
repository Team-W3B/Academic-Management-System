import React from "react";
import styles from "./../scss/Lec.module.scss";

import HeaderNav from "./../component/HeaderNav";
import Lec from "./../component/Lec";
import Footer from "./../component/Footer";
import Detail_ass from "../component/Detail_ass";
import Detail_assPost from "../component/Detail_assPost";
import Detail_assPost_after from "../component/Detail_assPost_after";
import { useSelector } from "react-redux";
import { Stack } from "react-bootstrap";

export default function LecPage_ass_detail() {
    let lecDetail_fileName = useSelector( (state) => state.lecDetail_fileName.lecDetail_fileName);
    let lecDetail_fileSize = useSelector( (state) => state.lecDetail_fileSize.lecDetail_fileSize);
    let lecDetail_content = useSelector( (state) => state.lecDetail_content.lecDetail_content);

    console.log(lecDetail_fileName);
    let asscheck1 = useSelector( (state) => state.asscheck1.asscheck1);
    //let asscheck2 = useSelector( (state) => state.asscheck2.asscheck2);
    console.log(asscheck1);
    //console.log(asscheck2);
    return (
        <>
            <HeaderNav />
            <Lec />
            <Stack gap={5}>
                <div className={styles.hbox_lec}>
                    <Detail_ass/>
                </div>
                <div className={styles.hbox_lec}>
                    {
                        asscheck1!==2 ?
                            <Detail_assPost/> : <Detail_assPost_after/>
                    }
                </div>
            </Stack>
            <Footer />
        </>
    );
};
