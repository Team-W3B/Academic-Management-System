/* eslint-disable */
import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SignUpComplete from './pages/SignUpComplete';
import MainPage from "./pages/MainPage";
//---
import LecPage from "./pages/LecPage";
import LecPage_notice from "./pages/LecPage_notice";
import Plan from "./pages/Plan";
import PlanSearch from "./component/PlanSearch";
import PlanOutput from "./component/PlanOutput";
import PlanDetail from "./component/PlanDetail";
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
        <Route path="/Plan" element={ <Plan /> } >
          <Route path="Search" element={ <PlanSearch /> } />
          <Route path="Output" element={ <PlanOutput /> } />
          <Route path="Detail/:id" element={ <PlanDetail /> } />
        </Route>
      </Routes>
    </div>
    // </BrowserRouter>
  );
}

export default App;
