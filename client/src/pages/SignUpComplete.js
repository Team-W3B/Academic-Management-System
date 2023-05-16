/* eslint-disable */
import React from "react";
import Emoticon from "./../imgs/Emoji.svg";
import styles from "./../scss/SignUpComplete.module.scss";

function SignUpComplete() {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.container}>
          <Emoji />
          <TextBox />
          <LogInButton />
        </div>
      </div>
    </>
  );
}

/* 이모지 */
const Emoji = () => {
  return <img alt="" className={styles.emoji} src={Emoticon} />;
};

/* 환영문구 */
const TextBox = () => {
  return (
    <div className={styles.textBox}>
      <p className={styles.mainText}>
        반갑습니다 <strong className={styles.emphasis1}>임태헌</strong>님!
      </p>
      <p className={styles.subText}>
        이제 KLAS를 이용하실 수 있습니다. 광운의 자랑이 되어주세요!
      </p>
    </div>
  );
};

/* 로그인 버튼 */
const LogInButton = () => {
  return (
    <div className={styles.button}>
      <a style={{ textDecorationLine : "none" }} href="/Login">
        <p className={styles.text}>로그인 하러가기</p>
      </a>
    </div>
  );
};

export default SignUpComplete;
