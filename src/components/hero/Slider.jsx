import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image5 from "../../assets/images/image5.jpg";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.webp";
import "./slider.css";
const Slider = () => {
  return (
    <>
      <div className="slider">
        <div className="container grid">
          <div className="img">
            <img src={image1} alt="" />
          </div>
          <div className="img">
            <img src={image2} alt="" />
          </div>
          <div className="img">
            <img src={image3} alt="" />
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
