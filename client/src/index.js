import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
//import store from './login_store';
import store from './store';
//---
//import './App.scss';
//import App from "./scss/App.module.scss";
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = { store } >
        <App />

    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
