import React from 'react'
import headerImg from '../assets/images/one.png'

const Header = ()=> {
  return (
    <header>
      <div className="container header__container">
        <div className="header__left">
          <h1>The Quickest place to Hire or get Hired</h1>
          <p>
            With QuickJobz, you can hire people to get your job done! <br/>
    And if you are looking for getting hired you are at right place
          </p>
          <a href="#" className="btn btn-primary">
            Get Started
          </a>
        </div>
        <div className="header__right">
          <div className="header__right-img">
            <img src={headerImg} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;