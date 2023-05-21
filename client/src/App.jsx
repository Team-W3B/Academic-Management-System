/* eslint-disable */
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

//---
import styles from "./scss/App.module.scss";
import SignUpComplete from "./pages/SignUpComplete";
import MainPage from "./pages/MainPage";
//---

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Routes>
          <Route exact path="/" element={<Login />} /> 
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/Login" element={<Login />} />

          <Route path="/SignUpComplete" element={<SignUpComplete />} />

          <Route path="/MainPage" element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
