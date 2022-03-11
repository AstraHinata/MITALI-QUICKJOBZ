import React from "react";

const NavBar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <a href="#">
          <h4>QuickJobz</h4>
        </a>
        <ul className="nav__menu">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Courses</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <button id="open-menu-btn">
          <i className="uil uil-bars"></i>
        </button>
        <button id="close-menu-btn">
          <i className="uil uil-multiply"></i>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;