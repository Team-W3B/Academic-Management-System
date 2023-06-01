/* eslint-disable */
import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SignUpComplete from './pages/SignUpComplete';
import MainPage from "./pages/MainPage";
import LecPage from "./pages/LecPage";
import LecPage_notice from "./pages/LecPage_notice";
import LecPage_ass from "./pages/LecPage_ass";
import LecPage_file from "./pages/LecPage_file";
import LecPage_lecture from "./pages/LecPage_lecture";
function App() {
  return (
    <BrowserRouter>
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
      </Routes>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
