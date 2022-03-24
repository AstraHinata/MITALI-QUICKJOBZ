import React from 'react'

export default function CategoryCard({label,desc,iconScr}) {
  return (
    <div>
      <article className="category">
        <span className="category__icon">
          <i className={iconScr}></i>
        </span>

        <h5>{label}</h5>
        <p>
         {desc}
        </p>
      </article>
    </div>
  );
}
