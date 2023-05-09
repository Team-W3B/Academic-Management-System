/* eslint-disable */
import React from "react";
import './App.scss';
import SignUpComplete from './pages/SignUpComplete';
import MainPage from "./pages/MainPage";
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
