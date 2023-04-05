import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { slide } from "../../assets/data/data";
const Slider = () => {
  return (
    <>
      <div className="slider">
        <div className="container grid">
          {slide.map((item, i) => (
            <div className="box" key={i}>
              <div className="img">
                <img src={item.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
