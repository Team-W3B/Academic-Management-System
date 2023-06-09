/* eslint-disable */
import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SignUpComplete from './pages/SignUpComplete';
import MainPage from "./pages/MainPage";
import LecPage from "./pages/LecPage";
import LecPage_notice from "./pages/LecPage_notice";
import Plan from "./pages/Plan";
import PlanSearch from "./component/PlanSearch";
import PlanOutput from "./component/PlanOutput";
import PlanDetail from "./component/PlanDetail";
import LecPage_ass from "./pages/LecPage_ass";
import LecPage_file from "./pages/LecPage_file";
import LecPage_lecture from "./pages/LecPage_lecture";
import LecPage_not_detail from "./pages/LecPage_not_detail";
import LecPage_file_detail from "./pages/LecPage_file_detail";
import LecPage_ass_detail from "./pages/LecPage_ass_detail";
import LecPage_lec_detail from "./pages/LecPage_lec_detail";

import Score from "./pages/Score";
import Prof from "./pages/Prof";
import Register_lec from "./pages/Register_lec";

import LecPage_prof from "./pages/LecPage_prof";
import LecPage_file_prof from "./pages/LecPage_file_prof";
import LecPage_file_detail_prof from "./pages/LecPage_file_detail_prof";
function App() {
  return (
    // <BrowserRouter>
    <div className="App" >
      <Routes>
        <Route exact path="/" element={<Login />} /> {/* 첫 화면 - 로그인 */}
        <Route exact path="/Login" element={<Login/>}/> {/* 로그인 */}
        <Route exact path="/Signup" element={<Signup/>}/> {/* 회원가입 */}
        <Route path="/SignUpComplete" element={ <SignUpComplete /> } /> {/* 회원가입 완료 */}
        <Route path="/MainPage" element={ <MainPage /> } /> {/* 홈페이지 */}

        {/* LecPage - sub */}
        <Route path="/LecPage" element={ <LecPage /> } />
        <Route path="/LecPage_notice" element={ <LecPage_notice /> } />
        <Route path="/LecPage_ass" element={ <LecPage_ass /> } />
        <Route path="/LecPage_file" element={ <LecPage_file /> } />
        <Route path="/LecPage_lecture" element={ <LecPage_lecture /> } />

        
        <Route path="/LecPage_prof" element={ <LecPage_prof /> } />

        {/* ------------------------------------------------------------------ */}
        <Route path="/LecPage_file_prof" element={ <LecPage_file_prof /> } />
        <Route path="/LecPage_file_detail_prof" element={ <LecPage_file_detail_prof /> } />
        {/* ------------------------------------------------------------------ */}

        {/* 강의페이지 세부들 */}
        <Route path="/LecPage_not_detail" element={ <LecPage_not_detail /> } />
        <Route path="/LecPage_file_detail" element={ <LecPage_file_detail /> } />
        <Route path="/LecPage_ass_detail" element={ <LecPage_ass_detail /> } />
        <Route path="/LecPage_lec_detail" element={ <LecPage_lec_detail /> } />

        {/* 강의계획서 */}
        <Route path="/Plan" element={ <Plan /> } >
          <Route path="Search" element={ <PlanSearch /> } />
          <Route path="Output" element={ <PlanOutput /> } />
          <Route path="Detail/:id" element={ <PlanDetail /> } />
        </Route>

        {/* 성적|석차 */}
        <Route path="/Score" element={ <Score /> } />

        {/* 교수 출석부 */}
        <Route path="/Prof" element={ <Prof /> } />

        {/* 수강신청 */}
        <Route path="/Register_lec" element={ <Register_lec /> } />

      </Routes>
    </div>
    // </BrowserRouter>
  );
}

export default App;
