import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

const User = {
    id: '2017202060',
  pw: 'test2323@',
  name:'김도연',
  birth:'1997.08.17',
  phonenum:'010-1111-1111',
  email:'email@gmail.com'
}


export default function Signup() {
    const [id, setid] = useState('');
    const [pw, setPw] = useState('');
    const [name, setName] = useState('');
    const [birth, setBirth] = useState('');
    const [phonenum, setPhonenum] = useState('');
    const [email, setEmail] = useState('');

    const [idValid, setidValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [nameValid, setNameValid] = useState(false);
    const [birthValid, setBirthValid] = useState(false);
    const [phonenumValid, setPhonenumValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    /*----------------*/
    useEffect(() => {
      if(idValid && pwValid&&nameValid&&birthValid&&phonenumValid&&emailValid) {
        setNotAllow(false);
        return;
      }
      setNotAllow(true);
    }, [idValid, pwValid,nameValid,birthValid,phonenumValid,emailValid]);

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
    /*----------------*/
    const handleName= (e) => {
        setName(e.target.value);
        const regex =
        /^[가-힣]{2,15}$/;
        if (regex.test(e.target.value)) {
          setNameValid(true);
        } else {
          setNameValid(false);
        }
      };
      const handleBirth = (e) => {
        setBirth(e.target.value);
        const regex =
        /^(19[0-9][0-9]|20\d{2}).(0[0-9]|1[0-2]).(0[1-9]|[1-2][0-9]|3[0-1])$/;
        if (regex.test(e.target.value)) {
          setBirthValid(true);
        } else {
          setBirthValid(false);
        }
      };

      const handlePhonenum = (e) => {
        setPhonenum(e.target.value);
        const regex =
        /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/;
        if (regex.test(e.target.value)) {
          setPhonenumValid(true);
        } else {
          setPhonenumValid(false);
        }
      };
      const handleEmail = (e) => {
        setEmail(e.target.value);
        const regex =
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (regex.test(e.target.value)) {
          setEmailValid(true);
        } else {
          setEmailValid(false);
        }
      };

    const onClickConfirmButton = () => {
      if(id === User.id && pw === User.name) {
        alert('회원가입에 성공했습니다.');
        
      } else {
        alert("등록되지 않은 정보입니다.");
      }
    }

    return (
      <div className="signup_page">
        <div className='Frame8'>
        <div className="titleWrap">
            <div className="namecolortitle">
            광운대학교
          </div>
          학사정보 관리시스템
        </div>

        <div className="contentWrap">
          <div className="inputTitle"></div>
          <div className="inputWrap">
            <input
              className="input"
              type="text"
              placeholder="학번을 입력하세요"
              value={id}
              onChange={handleid}
            />
          </div>
          <div className="errorMessageWrap">
            {!idValid && id.length > 0 && (
              <div>올바른 학번을 입력해주세요.</div>
            )}
          </div>
          
          <div className="inputWrap">
            <input
              className="input"
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={pw}
              onChange={handlePw}
            />
          </div>
          <div className="errorMessageWrap">
            {!pwValid && pw.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )}
          </div>

          <div className="inputWrap">
            <input
              className="input"
              type="name"
              placeholder="이름을 입력하세요"
              value={name}
              onChange={handleName}
            />
          </div>
          <div className="errorMessageWrap">
            {!nameValid && name.length > 0 && (
              <div>올바르지 않은 형식입니다.</div>
            )}
          </div>
          <div className="inputTitle">
            생년월일을 입력하세요</div>
          <div className="inputWrap">
            <input
              className="input"
              type="birth"
              placeholder="xxxx.xx.xx"
              value={birth}
              onChange={handleBirth}
            />
          </div>
          <div className="errorMessageWrap">
            {!birthValid && birth.length > 0 && (
              <div>올바르지 않은 형식입니다.</div>
            )}
            </div>

          <div className="inputTitle">
            핸드폰 번호를 입력하세요</div>
          <div className="inputWrap">
            <input
              className="input"
              type="phonenum"
              placeholder="010-1234-5678"
              value={phonenum}
              onChange={handlePhonenum}
            />
          </div>
          <div className="errorMessageWrap">
            {!phonenumValid && phonenum.length > 0 && (
              <div>올바르지 않은 형식입니다.</div>
            )}
            </div>
          <div className="inputTitle">
            E-mail 주소를 입력하세요</div>
          <div className="inputWrap">
            <input
              className="input"
              type="email"
              placeholder="email@gmail.com"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="errorMessageWrap">
            {!emailValid && email.length > 0 && (
              <div>올바르지 않은 형식입니다.</div>
            )}
            </div>


          <button onClick={onClickConfirmButton} disabled={notAllow} className="bottomButton">
            <Link to="/Login">나도 이제 대학생
                </Link>
          </button>
          <div className ="NaN_0010">
              <div className="Klas">
                나 혹시 화석...?
              </div>
              <div className ="namecolor">
                <Link to="/Login">
                뒤로가기</Link>
              </div>
           </div>

          </div>
        </div> 
        
      </div>
    );
}