import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

const User = {/*
    id: '2017202060',
  pw: 'test2323@'*/
}

export default function Login() {
    // axios.get('https://localhost:3000').then((response) => {
    //     User={
    //         response
    //     }
    // });
    
    const [id, setid] = useState('');
    const [pw, setPw] = useState('');

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
    const onClickConfirmButton = () => {
      if(id === User.id && pw === User.pw) {
        alert('로그인에 성공했습니다.')
      } else {
        alert("등록되지 않은 회원입니다.");
      }
    }

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
              value={id}
              onChange={handleid}
            />
          </div>
          <div className="errorMessageWrap">
            {!idValid && id.length > 0 && (
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
              value={pw}
              onChange={handlePw}
            />
          </div>
          <div className="errorMessageWrap">
            {!pwValid && pw.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )}
          </div>
          <button onClick={onClickConfirmButton} disabled={notAllow} className="bottomButton">
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
/*

    return (
      <div className="RootWrapperLogIn">
        <div className="LogIn_0001">
          <div className="Frame8">
            <div className="Frame7">
              <div className="Frame7_0001">
                <div className="NaN_0001">
                  광운대학교<br/>
  학사정보 관리시스템
                </div>
              </div>
            </div>
            <div className="Input">
              <div className="NaN_0002">
                <div className="NaN_0003">
                  학번을 입력하세요
                  <div className="inputWrap">
            <input
              className="input"
              type="text"
              placeholder="test@gmail.com"
              value={email}
              onChange={handleEmail}
            />
            </div>
                </div>
                <div className="LoginInput">
                  <div className="_2016722087">
                    2016722087
                  </div>
                </div>
              </div>
              <div className="NaN_0002">
                <div className="Frame5">
                  <div className="NaN_0005">
                    비밀번호를 입력하세요
                  </div>
                  <div className="NaN_0006">
                    비밀번호를 잊었나요?
                  </div>
                </div>
                <div className="PwInput">
                  <div className="NaN_0007">
                    ***********
                  </div>
                  <div className="EyeSlash"></div>
                    􀋯
                  </div>
                </div>
              </div>
              <div className="NaN_0008">
                <div className="NaN_0009">
                  로그인
                </div>
              </div>
              <div className="NaN_0010">
                <div className="Klas">
                  KLAS가 처음이에요?
                </div>
                <div className="NaN_0006">
                  신입생만 누르셈.
                </div>
              </div>
            </div>
          </div>
        </div>
      
    )
  }
  */