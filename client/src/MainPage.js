/* eslint-disable */
import React from "react";
import hello from "./hello.svg"
import './App.scss';
import styles from './MainPage.module.scss';
import HeaderNav from "./HeaderNav";
import LecCard from "./LecCard";

function MainPage() {
    return (
        <>
            <div>
                <HeaderNav />
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <img src={hello} style={{marginBottom : "16px", width: "20%", height: "auto", zIndex: 2 }}  className={styles.center} />
                </div>
                <div>
                    <LecCard />
                </div>
                <Footer />
            </div>
        </>
    );
}

const WhiteCard = () => {
    return <div className={styles.whiteCard} />
  };

  const Footer = () => {
    return (
      <>
      <div className={styles.Footer}>
        <p>
          서울시 노원구 광운로 20 (월계동 447-1) 광운대학교(01897) 대표전화 02.940.5114
        </p>
        <p style={{ fontWeight: "700" }}>
          COPYRIGHTⓒTEAM W3B. ALL RIGHTS RESERVED
        </p>
      </div>
      </>
    );
  };

export default MainPage;