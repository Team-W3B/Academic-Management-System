/* eslint-disable */
import React from "react";
import './App.scss';
import SignUpComplete from './SignUpComplete';
import MainPage from "./MainPage";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={ <MainPage /> } />
        <Route path="/SignUpComplete" element={ <SignUpComplete /> } />
    </Routes>
    </div>
  );
}

export default App;
