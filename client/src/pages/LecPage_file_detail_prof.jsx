import React from "react";
import styles from "./../scss/Lec.module.scss";
import HeaderNav from "./../component/HeaderNav";
import Lec from "./../component/Lec";
import Footer from "./../component/Footer";
import Detail_file_prof from "../component/Detail_file_prof";

export default function LecPage_file_detail_prof() {
    return (
        <>
            <HeaderNav />
            <Lec />
            <div className={styles.hbox_lec}>
                <Detail_file_prof />
            </div>
            <Footer />
        </>
    );
};
