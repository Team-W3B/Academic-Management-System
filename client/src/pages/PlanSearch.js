/* eslint-disable */
import React, { useState } from "react";
import HeaderNav from "./../component/HeaderNav";
import Footer from "../component/Footer";
import styles from './../scss/PlanSearch.module.scss';

function PlanSearch() {

    let [semester, setSemester] = useState();
    let [checkLec, setCheckLec] = useState(false);
    let [lecName, setLecName] = useState('');
    let [buttonState, setButtonState] = useState();

    let clickSearch = () => {
        console.log(semester);
        console.log(lecName);
    }

    return (
        <>
        <HeaderNav />
        <h1 className={styles.lecName}> 강의계획서 조회 </h1>
        <div style={{ display : 'flex', justifyContent : 'center' }}>
            <div className={styles.cardWrapper}>
                <form action="#">
                    <div className={styles.hbox} style={{ gap : "12px" }} >
                        <div>
                            <label for="semester"> 연도 / 학기 </label>
                            <select
                            className={styles.input}
                            name="semesters"
                            id="semester"
                            onChange={(e) => {setSemester(e.target.value)}} >
                                <option value="select" style={{ opacity : "0.8" }} >학기를 선택해주세요</option>
                                <option value="2022-1">2022년 1학기</option>
                                <option value="2022-2">2022년 2학기</option>
                                <option value="2023-1">2023년 1학기</option>
                            </select>
                        </div>
                        <div>
                            <label for="check"> 수강여부 </label>
                            <button
                            type="button"
                            onClick={ () => { setCheckLec(!checkLec) } }
                            className={`styles.disabledButton`} > 수강중 </button>
                        </div>
                    </div>
                    <div>
                        <label for="lang"> 과목명 </label>
                        <input
                        className={styles.input}
                        type="text" onChange={() => {setLecName(e.target.value);}}
                        placeholder="과목명을 선택해주세요!" />
                    </div>
                    <button type="button" onClick={clickSearch} className={styles.searchButton} > 검색 </button>
                </form>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default PlanSearch;