import React from "react";
import "./jobCategories.css";
import { BsQuestionLg } from "react-icons/bs";


const CategoryBox = ({
  Icon = <BsQuestionLg className="box__icon"/>,
  BGcolor = "blue",
  Title = "Add title",
}) => {
  return (
    <article
      className="category__box"
      style={{ backgroundColor: `${BGcolor}` }}
    >
      {Icon}
      <div className="box__info">
        <p>{Title}</p>
      </div>
    </article>
  );
};

export default CategoryBox;
