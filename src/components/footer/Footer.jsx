import React from "react";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="footer-text">
        Cartsy Medicine - All rights reserved. Designed and Developed by
        Mubashar, Ali
      </p>
      <div className="footer-social-icons">
        <BsFacebook className="icon" />
        <AiFillInstagram className="icon" />
        <AiFillTwitterCircle className="icon" />
        <AiFillLinkedin className="icon" />
      </div>
    </div>
  );
};

export default Footer;
