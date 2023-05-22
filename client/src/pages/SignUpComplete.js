/* eslint-disable */
import React from "react";
import Emoticon from "./../imgs/Emoji.svg";
//import "./../App.scss";
import Signup from "./Signup";
import { useDispatch, useSelector } from "react-redux";
import { setsignUpName, signUpSlice } from "../store";
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



const Emoji = () => {
  return <img alt="" className={styles.emoji} src={Emoticon} />;
};

const TextBox = () => {   
  //----
  const signUpName = useSelector((state)=>state.signUp.name);
  
  return (
    <div className={styles.textBox}>
      <p className={styles.mainText}>
        반갑습니다 <strong className={styles.emphasis1}>{signUpName}</strong>님!
      </p>
      <p className={styles.subText}>
        이제 KLAS를 이용하실 수 있습니다. 광운의 자랑이 되어주세요!
      </p>
    </div>
  );
};

const LogInButton = () => {
  return (
    <div className={styles.button}>
      <a style={{ textDecorationLine : "none" }} href="/Login">
        <p className={styles.text} onClick={ () => {navigate( "/Login" ) } }>로그인 하러가기</p>
      </a>
    </div>
  );
};

export default SignUpComplete;
