/* eslint-disable */
import React from "react";
import styles from "./../scss/Lec.module.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from "react-redux";

export default function Lec() {
    const lecture_name = useSelector((state)=>state.lecture.lecture); //querystring 전달인자
    let userID = useSelector( (state) => state.userID ); // userID 불러오기

    return (
        <div>
            <h1 className={styles.lecName}> {lecture_name} </h1>
        </div>
    );
}