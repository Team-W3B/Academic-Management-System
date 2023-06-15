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

function App() {
  return (
    // <BrowserRouter>
    <div className="App" >
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Signup" element={<Signup/>}/>
        <Route exact path="/Login" element={<Login/>}/>
        <Route path="/SignUpComplete" element={ <SignUpComplete /> } />
        <Route path="/MainPage" element={ <MainPage /> } />
        <Route path="/LecPage" element={ <LecPage /> } />
        <Route path="/LecPage_notice" element={ <LecPage_notice /> } />
        <Route path="/LecPage_ass" element={ <LecPage_ass /> } />
        <Route path="/LecPage_file" element={ <LecPage_file /> } />
        <Route path="/LecPage_lecture" element={ <LecPage_lecture /> } />

        <Route path="/LecPage_not_detail" element={ <LecPage_not_detail /> } />
        <Route path="/LecPage_file_detail" element={ <LecPage_file_detail /> } />
        <Route path="/LecPage_ass_detail" element={ <LecPage_ass_detail /> } />
        <Route path="/LecPage_lec_detail" element={ <LecPage_lec_detail /> } />

        <Route path="/Plan" element={ <Plan /> } >
          <Route path="Search" element={ <PlanSearch /> } />
          <Route path="Output" element={ <PlanOutput /> } />
          <Route path="Detail/:id" element={ <PlanDetail /> } />
        </Route>

        <Route path="/Score" element={ <Score /> } />
        <Route path="/Prof" element={ <Prof /> } />

      </Routes>
    </div>
    // </BrowserRouter>
  );
}

export default App;
