import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image4 from "../../assets/images/image4.jpg";
import image6 from "../../assets/images/image6.jpg";
import "./slider.css";
const Slider = () => {
  return (
    <>
      <div className="slider">
        <div className="container grid">
          <div className="img">
            <img src={image4} alt="" />
          </div>
          <div className="img">
            <img src={image6} alt="" />
          </div>
          <div className="img">
            <img src={image1} alt="" />
          </div>
          <div className="img">
            <img src={image2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
