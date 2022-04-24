import React from "react";
import CategoryCard from "./CategoryCard";
import './categories.css'
import { Link } from "react-router-dom";
const CategoriesSection = () => {
  return (
    <div>
      <section className="categories">
        <div className="container categories__contaienr">
          <div className="categories__left">
            <h1>Job Categoris</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              natus fuga aut saepe repudiandae fugiat dolorem quasi cum, ratione
              minima facere aliquam ipsam eius rerum corrupti, nesciunt labore.
              Ipsam, doloribus!
            </p>
            <Link to={"/jobcategories"}>
              <a href="#" className="btn">
                Explore
              </a>
            </Link>
          </div>
          <div className="categories__right">
            <CategoryCard
              label={"Development"}
              desc={
                "Web Devlopment, App Devlopment, UI/UX Designing, Project Planning, Code Review"
              }
              iconScr={"uil uil-brackets-curly"}
            />

            <CategoryCard
              label={"Designing"}
              desc={
                "Wall Designing, Painting, Interior Designing, Furniture, Floor Design, Product Design"
              }
              iconScr={"uil uil-palette"}
            />

            <CategoryCard
              label={"Tutor"}
              desc={
                "Private Tutor, Math Teacher, Language Teacher,  Tution Teacher"
              }
              iconScr={"uil uil-book-open"}
            />

            <CategoryCard
              label={"Delivery"}
              desc={
                "Parcel, Food Delivery, 1Day Delivery, lorem loremds, asdasdfeffe"
              }
              iconScr={"uil uil-truck"}
            />

            <CategoryCard
              label={"Bitcoin"}
              desc={
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, exercitationem?"
              }
              iconScr={"uil uil-bitcoin-circle"}
            />

            <CategoryCard
              label={"Bitcoin"}
              desc={
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, exercitationem?"
              }
              iconScr={"uil uil-bitcoin-circle"}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoriesSection;
