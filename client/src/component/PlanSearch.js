/* eslint-disable */
import React, { useState } from "react";
import styles from './../scss/PlanSearch.module.scss';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function PlanSearch() {

    

    let navigate = useNavigate();
    let dispatch = useDispatch();
    let [semester, setSemester] = useState();
    let [checkLec, setCheckLec] = useState(false);
    let [lecName, setLecName] = useState('');
    let [buttonState, setButtonState] = useState('disabled');

    let plan_search =
    {
        planSearch_semester : semester,
        planSearch_check_lec : checkLec,
        planSearch_lec : lecName
    }

    // dispatch(setPlanOutput(plan_info));

    let clickSearch = () => {
        console.log(plan_search);
        axios.get('/api/plan/search', {params : plan_search}, {withCredentials : true})
        .then( (res) => {
            console.log(res.status);
            if (res.status === 200) {
                console.log(res.data);
                dispatch(setPlanOutput(res.data));
                alert("검색 성공!");
                navigate("/Plan/Output");
            }
        })
        .catch((error) => {
            console.log(error.response.status);
            if (error.response.status === 404) {
                alert("요청받은 리소스를 찾을 수 없습니다.");
            }
            if (error.response.status === 500) {
                alert("서버가 처리 방법을 모르는 상황이 발생했습니다. 서버는 아직 처리 방법을 알 수 없습니다.");
            }
        })
    }

    return (
        <>
        <div className={styles.cardWrapper}>
            <form action="#">
                <div className={`${styles.hbox} ${styles.space_between} `} style={{ gap : "12px" }} >
                    <div>
                        <label htmlFor="semester"> 연도 / 학기 </label>
                        <select
                        className={styles.input}
                        name="semesters"
                        id="semester"
                        onChange={(e) => {setSemester(e.target.value)}} >
                            <option value="select" className={styles.grad_text} >학기를 선택해주세요</option>
                            <option value="202201">2022년 1학기</option>
                            <option value="202202">2022년 2학기</option>
                            <option value="202301">2023년 1학기</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="check"> 수강여부 </label>
                        <button
                            type="button"
                            onClick={ () => {
                                setCheckLec(!checkLec);
                                buttonState === 'disabled' ? setButtonState('abled') : setButtonState('disabled');
                            }}
                            className={styles[`${buttonState}Button`]}
                        >
                            <p className={styles[`${buttonState}_text`]}>수강중</p>
                        </button>
                    </div>
                </div>
                <div>
                    <label htmlFor="lang"> 과목명 </label>
                    <input
                    className={styles.input}
                    type="text" onChange={(e) => {setLecName(e.target.value);}}
                    placeholder="과목명을 입력해주세요!" />
                </div>
                <button type="button" onClick={clickSearch} className={styles.searchButton} > 검색 </button>
            </form>
        </div>
        </>
    );
}

export default PlanSearch;