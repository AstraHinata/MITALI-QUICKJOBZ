import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from "./App";
import AboutPage from './components/Pages/AboutPage/AboutPage';
import GetStarted from './components/Pages/GetStartedPage/GetStarted';
import JobCategories from './components/Pages/Categories/JobCategories';
import "./index.css";


ReactDOM.render(
  <BrowserRouter>

  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/getstarted' element={<GetStarted/>}/>
    <Route path='/jobcategories' element={<JobCategories/>}/>

    
  </Routes>

  </BrowserRouter>,
  document.getElementById("root")
);

