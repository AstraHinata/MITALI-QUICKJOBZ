import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from "./App";
import AboutPage from './components/Pages/AboutPage/AboutPage';
import "./index.css";


ReactDOM.render(
  <BrowserRouter>

  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/about' element={<AboutPage/>}/>
  </Routes>

  </BrowserRouter>,
  document.getElementById("root")
);

