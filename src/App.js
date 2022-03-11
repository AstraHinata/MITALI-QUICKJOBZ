import React from 'react'
import CategoriesSection from './components/Categories';
import Courses from './components/Courses';
import Header from './components/Header';
import NavBar from './components/NavBar'
import "./style.css";
 
export default function App() {
  return (
    <div>
      <NavBar />
      <Header />
    <CategoriesSection/>
    <Courses/>
   </div>
  );
}
