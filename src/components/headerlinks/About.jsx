import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      <div className="about-text">
        <p>
          Welcome to our ecommerce app! We are a team of passionate developers
          who love creating amazing user experiences.
        </p>
        <br />
        <p>
          Our goal is to provide the best possible shopping experience for our
          customers, by offering a wide range of products and a user-friendly
          interface.
        </p>
        <br />
        <p>
          If you have any questions or suggestions, please don't hesitate to
          contact us. We are always happy to hear from our customers!
        </p>
      </div>
      <div className="team-container">
        <h2 className="our-team">Our Team</h2>
        <ul className="team-list">
          <li>
            <img
              src="https://randomuser.me/api/portraits/men/13.jpg"
              alt="CEO"
            />
            <p>John Smith - CEO</p>
          </li>
          <li>
            <img
              src="https://randomuser.me/api/portraits/women/23.jpg"
              alt="CTO"
            />
            <p>Jane Doe - CTO</p>
          </li>
          <li>
            <img
              src="https://randomuser.me/api/portraits/men/20.jpg"
              alt="Lead Developer"
            />
            <p>Mark - Developer</p>
          </li>
          <li>
            <img
              src="https://randomuser.me/api/portraits/women/22.jpg"
              alt="Designer"
            />
            <p>Samantha - Designer</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
