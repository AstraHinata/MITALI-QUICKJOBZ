import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  
  function openMenu(){
    const navMenuOpen = document.querySelector(".nav__menu");
    const closeBtn = document.getElementById("close-menu-btn");
        const openBtn = document.getElementById("open-menu-btn");
    openBtn.style.display="none"
  navMenuOpen.style.display = "flex";
  closeBtn.style.display="inline-block"


  }
  function closeMenu(){
    const navMenuClose = document.querySelector(".nav__menu");
    const openBtn = document.getElementById("open-menu-btn")
        const closeBtn = document.getElementById("close-menu-btn");

    navMenuClose.style.display="none"
    closeBtn.style.display="none"
    openBtn.style.display="inline-block"
  }
  return (
    <nav>
      <div className="container nav__container">
        <Link to={'/'}>
          <a href="#">
            <h4>QuickJobz</h4>
          </a>
        </Link>
        <ul className="nav__menu">
          <li>
            <Link to={"/"}>
              {" "}
              <a href="">Home</a>
            </Link>
          </li>
          <li>
            <Link to={"/about"}>
              <a href="" to="">
                About
              </a>
            </Link>
          </li>
          <li>
            <a href="">Courses</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <button id="open-menu-btn" onClick={openMenu}>
          <i className="uil uil-bars"></i>
        </button>
        <button id="close-menu-btn" onClick={closeMenu}>
          <i className="uil uil-multiply"></i>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
