import React from "react";
import "./getStarted.css";
import { FiUsers } from "react-icons/fi";
import { AiOutlineFileSearch } from "react-icons/ai";
const Content = () => {
  return (
    <div className="main-div">
      <div className="main__inner-div">
        <article className="card">
          <div className="card__text">
            <h4>Are you a, </h4>
            <h1>Recruiter</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <a href="#" className="card-link">
            Proceed here
          </a>
        </article>

        <article className="card">
          <div className="card__text">
            <h4>Are you a, </h4>
            <h1>User</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <a href="#" className="card-link">
            {" "}
            Proceed here
          </a>
        </article>
      </div>
    </div>
  );
};

export default Content;
