/* eslint-disable */
import React from "react";
import hello from "./../imgs/hello.svg";
import "./../App.scss";
import styles from "./../MainPage.module.scss";
import HeaderNav from "./../component/HeaderNav";
import LecCard from "./../component/LecCard";
import Footer from "../component/Footer";

function MainPage() {
  return (
    <>
      <div>
        <HeaderNav />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={hello}
            style={{
              marginBottom: "16px",
              width: "20%",
              height: "auto",
              zIndex: 2,
            }}
            className={styles.center}
          />
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
  return <div className={styles.whiteCard} />;
};

export default MainPage;
