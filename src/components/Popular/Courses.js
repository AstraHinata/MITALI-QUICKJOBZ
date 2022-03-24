import React from "react";
import './courses.css'
import engineering from "../../assets/images/engineering.jpg";
import medical from "../../assets/images/arts.jpg";
import arts from "../../assets/images/medical.jpg";
const Courses =  ()=> {
  return (
    <div>
      <section className="courses">
        <h2>Our popular courses</h2>
        <div className="container courses__container">
          <article className="course">
            <div className="course__image">
              <img src={medical} alt="" />
            </div>
            <div className="course__info">
              <h4>Arts</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                temporibus placeat modi quos vitae corporis qui?
              </p>
              <a href="#" className="btn btn-primary">
                Learn more
              </a>
            </div>
          </article>

          <article className="course">
            <div className="course__image">
              <img src={arts} alt="" />
            </div>
            <div className="course__info">
              <h4>Medical</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                temporibus placeat modi quos vitae corporis qui?
              </p>
              <a href="#" className="btn btn-primary">
                Learn more
              </a>
            </div>
          </article>

          <article className="course">
            <div className="course__image">
              <img src={engineering} alt="" />
            </div>
            <div className="course__info">
              <h4>Engineering</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                temporibus placeat modi quos vitae corporis qui?
              </p>
              <a href="#" className="btn btn-primary">
                Learn more
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Courses;
