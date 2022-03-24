import React from "react";
import "./testi.css";
import TestiCards from "./TestiCards";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Testi from "./Testi";


const Testimonials = () => {
  return (
    <div>
      <h2 className="testimonialss">Testimonials</h2>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Testi
            Name={"Astra Yumi"}
            Body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          natus fuga aut saepe repudiandae fugiat dolorem quasi cum, ratione
          minima facere aliquam ipsam eius rerum corrupti, nesciunt labore.
          Ipsam, doloribus!"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Testi
            Name={"Astra Yumi"}
            Body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          natus fuga aut saepe repudiandae fugiat dolorem quasi cum, ratione
          minima facere aliquam ipsam eius rerum corrupti, nesciunt labore.
          Ipsam, doloribus!"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Testi
            Name={"Astra Yumi"}
            Body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          natus fuga aut saepe repudiandae fugiat dolorem quasi cum, ratione
          minima facere aliquam ipsam eius rerum corrupti, nesciunt labore.
          Ipsam, doloribus!"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Testi
            Name={"Astra Yumi"}
            Body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          natus fuga aut saepe repudiandae fugiat dolorem quasi cum, ratione
          minima facere aliquam ipsam eius rerum corrupti, nesciunt labore.
          Ipsam, doloribus!"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
