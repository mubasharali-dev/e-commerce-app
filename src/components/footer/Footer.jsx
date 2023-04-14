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
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsFacebook className="icon" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram className="icon" style={{ marginRight: "0.2em" }} />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillTwitterCircle
            className="icon"
            style={{ marginRight: "0.2em" }}
          />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin className="icon" style={{ marginRight: "0.2em" }} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
