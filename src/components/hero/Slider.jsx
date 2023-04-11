import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image5 from "../../assets/images/image5.jpg";
import "./slider.css";
const Slider = () => {
  return (
    <>
      <div className="slider">
        <div className="container grid">
          <div className="img">
            <img src={image5} alt="" />
          </div>
          <div className="img">
            <img src={image5} alt="" />
          </div>
          <div className="img">
            <img src={image5} alt="" />
          </div>
          <div className="img">
            <img src={image5} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
