/* eslint-disable */
import React from "react";
import HeaderNav from "./../component/HeaderNav";
import Footer from "./../component/Footer";
import styles from './../scss/PlanSearch.module.scss';
import { Outlet } from "react-router-dom";

function Plan() {

    return (
        <>
        <div className={styles.container}>
            <div className={styles.content}>
                {/* 헤더 */}
                <HeaderNav />
                {/* 강의계획서 조회 문구 */}
                <h1 className={styles.lecName}> 강의계획서 조회 </h1>
                {/* 컨텐츠 */}
                <div style={{ display : 'flex', justifyContent : 'center' }}>
                    <Outlet></Outlet>
                </div>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
        </>
    );
}

export default Plan;