import React from "react";
import  './footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__1">
          <a href="#" className="footer__logo">
            <h4>QuickJobz</h4>
          </a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis!
          </p>
        </div>

        <div className="footer__2">
          <h4>Permalinks</h4>
          <ul className="permalinks">
            <li>
              <a href="#index.html">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer__3">
          <h4>Privacy</h4>
          <ul className="privacy">
            <li>
              <a href="#index.html">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms and conditions</a>
            </li>
          </ul>
        </div>

        <div className="footer__4">
          <h4>Contact Us</h4>
          <div>
            <p>+91 2344 234 344</p>
            <p>contact@quickjobz.com</p>
          </div>
          <ul className="footer__socials">
            <li>
              <a href="#">
                <i className="uil uil-facebook-f"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i className="uil uil-instagram-alt"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i className="uil uil-twitter"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i className="uil uil-linkedin-alt"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <small>Copyright &copy; QuickJobz</small>
      </div>
    </footer>
  );
};

export default Footer;
