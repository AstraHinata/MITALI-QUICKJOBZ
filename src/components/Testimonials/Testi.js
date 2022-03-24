import React from 'react'
import me from "../../assets/images/testi.jpg";


const Testi = ({Name, Body}) => {
  return (
    <div className='container'>
      <article className="testimonial">
        <div className="avatar">
          <img src={me} alt="" />
        </div>
        <div className="testimonial__info">
          <h5>{Name}</h5>
          <small>student</small>
        </div>
        <div className="testimonial__body">{Body}</div>
      </article>
    </div>
  );
}

export default Testi