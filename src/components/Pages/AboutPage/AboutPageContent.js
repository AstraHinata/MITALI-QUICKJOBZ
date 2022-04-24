import React from "react";
import { Link } from "react-router-dom";
import "./aboutPage.css";

const AboutPageContent = () => {
  return (
    <div className=" aboutpage__container">
      <div className="about__container-insider">
        <div className="about__container-left">
          <small>Lorem, ipsum dolor.</small>

          <h1>Lorem ipsum dolor sit amet</h1>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            odio quaerat consequatur incidunt accusantium, blanditiis
            repudiandae! Laudantium ab voluptas nisi quidem libero, doloribus,
            deleniti officiis dolorem harum voluptatum repellendus ipsam!
          </p>

            <a href="#" className=" about-btn">
          <Link to={"/getstarted"}>
              {" "}
              Let's Explore
          </Link>
            </a>
        </div>

        <div className="about__container-right">
          <div className="about__container-img"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageContent;
