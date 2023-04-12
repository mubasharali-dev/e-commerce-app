import React, { Component } from "react";
import Slider from "react-slick";
import { GiBabyBottle } from "react-icons/gi";
import { MdFolderSpecial, MdHealthAndSafety } from "react-icons/md";
import { AiFillMedicineBox, AiFillSkin } from "react-icons/ai";
import { FiThermometer } from "react-icons/fi";
import { BiErrorAlt } from "react-icons/bi";
import { FaFirstAid } from "react-icons/fa";

const arrowStyles = {
  position: "absolute",
  zIndex: 1,
  top: "50%",
  transform: "translateY(-50%)",
  width: 30,
  height: 30,
  cursor: "pointer",
  backgroundColor: "white",
  color: "white",
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        ...arrowStyles,
        right: 10,

        background: "black",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        ...arrowStyles,
        left: 10,
        marginTop: ".5em",
        background: "black",
        color: "black",
      }}
      onClick={onClick}
    />
  );
}
export default class Category extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 2,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div
        style={{
          overflowX: "hidden",
          margin: "2.5em 0.5em",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        {/* <h2 style={{ margin: "0.6em" }}> Categories </h2> */}
        <Slider {...settings}>
          <div
            style={{
              backgroundColor: "#FFE0B2",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <GiBabyBottle
              style={{
                fontSize: "40px",
                marginBottom: "10px",
                color: "#F57C00",
              }}
            />
            <h3 style={{ textAlign: "center" }}>Baby Care</h3>
          </div>
          <div
            style={{
              backgroundColor: "#B2EBF2",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <MdHealthAndSafety
              style={{
                fontSize: "40px",
                marginBottom: "10px",
                color: "#00ACC1",
              }}
            />
            <h3 style={{ textAlign: "center" }}>Health</h3>
          </div>
          <div
            style={{
              backgroundColor: "#B0BEC5",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <AiFillSkin
              style={{
                fontSize: "40px",
                marginBottom: "10px",
                color: "#424242",
              }}
            />
            <h3 style={{ textAlign: "center" }}>Face and Skin</h3>
          </div>
          <div
            style={{
              backgroundColor: "#C8E6C9",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <FiThermometer
              style={{
                fontSize: "40px",
                marginBottom: "10px",
                color: "#2E7D32",
              }}
            />
            <h3 style={{ textAlign: "center" }}>Well-Being</h3>
          </div>
          <div
            style={{
              backgroundColor: "#FFCDD2",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <BiErrorAlt
              style={{
                fontSize: "40px",
                marginBottom: "10px",
                color: "#D32F2F",
              }}
            />
            <h3 style={{ textAlign: "center" }}>Oral Care</h3>
          </div>
          <div
            style={{
              backgroundColor: "#D1C4E9",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <AiFillMedicineBox
              style={{
                fontSize: "40px",
                marginBottom: "10px",
                color: "#6A1B9A",
              }}
            />
            <h3 style={{ textAlign: "center" }}>Medicine</h3>
          </div>
          <div
            style={{
              backgroundColor: "#FFECB3",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <FaFirstAid
              style={{
                fontSize: "40px",
                marginBottom: "10px",
                color: "#FBC02D",
              }}
            />
            <h3 style={{ textAlign: "center" }}>First Aid</h3>
          </div>
          <div
            style={{
              backgroundColor: "#F8D7DA",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <MdFolderSpecial
              style={{
                fontSize: "40px",
                marginBottom: "10px",
                color: "#721C24",
              }}
            />
            <h3 style={{ textAlign: "center" }}>Specials</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
