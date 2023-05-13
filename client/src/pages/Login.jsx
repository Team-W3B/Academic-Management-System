import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useDispatch} from "react-redux";
import { loginUser } from '../login_store.js';
import MainPage from './MainPage.js';

//  const User = {
//      id: 2017202060,
//    pw: 'test2323@'
//  }

export default function Login() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const User=(e)=>{
      let user={
        logIn_id,
        logIn_pw
      };

      axios.post('/api/login', user)
        .then((res) => {
          console.log(res.status);
          if(res.status === 200) {
            //console.log("로그인");
            dispatch(loginUser(res.status.userInfo));
            alert('로그인에 성공하였습니다.');
            //<Link to ="./MainPage"/>
            navigate("/MainPage");
          }
         })
        .catch((error) => {
          if(error.response.status == 401){
            alert("존재하지 않는 사용자입니다");
          }
          if(error.response.status == 500){
            alert("서버 오류 발생!(회원가입");
          }
        });
    };

    
    const [logIn_id, setid] = useState('');
    const [logIn_pw, setPw] = useState('');

    const [idValid, setidValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    useEffect(() => {
      if(idValid && pwValid) {
        setNotAllow(false);
        return;
      }
      setNotAllow(true);
    }, [idValid, pwValid]);

    const handleid = (e) => {
      setid(e.target.value);
      const regex =/^[0-9+]{10}$/;
      if (regex.test(e.target.value)) {
        setidValid(true);
      } else {
        setidValid(false);
      }
    };
    const handlePw = (e) => {
      setPw(e.target.value);
      const regex =
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
      if (regex.test(e.target.value)) {
        setPwValid(true);
      } else {
        setPwValid(false);
      }
    };
    /*
    const onClickConfirmButton = () => {
      if(id === User.id && pw === User.pw) {
        alert('로그인에 성공했습니다.')
      } else {
        alert("등록되지 않은 회원입니다.");
      }
    }
*/
    return (
      <div className="page">
        <div className='Frame8'>
        <div className="titleWrap">
            <div className="namecolortitle">
            광운대학교
          </div>
          학사정보 관리시스템
        </div>

        <div className="contentWrap">
          <div className="inputTitle">학번을 입력하세요</div>
          <div className="inputWrap">
            <input
              className="input"
              type="text"
              placeholder="20xxxxxxxx"
              value={logIn_id}
              onChange={handleid}
            />
          </div>
          <div className="errorMessageWrap">
            {!idValid && logIn_id.length > 0 && (
              <div>올바른 학번을 입력해주세요.</div>
            )}
          </div>
          
          <div style={{ marginTop: "26px" }} className="inputTitle">
            비밀번호를 입력하세요
          
          <div className ="NaN_0010">
          <div  className="namecolor">
            비밀번호를 잊었나요?
          </div>
          </div>
          </div>
          <div className="inputWrap">
            <input
              className="input"
              type="password"
              placeholder="**********"
              value={logIn_pw}
              onChange={handlePw}
            />
          </div>
          <div className="errorMessageWrap">
            {!pwValid && logIn_pw.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )}
          </div>
          <button onClick={User} disabled={notAllow} className="bottomButton">
            로그인
          </button>
          <div className ="NaN_0010">
              <div className="Klas">
                KLAS가 처음이에요?
              </div>
              <div className ="namecolor">
              <Link to="/Signup">
                신입생만 누르셈.</Link>  
              </div>
           </div>
          </div>
        </div> 
        
      </div>
    );
}
