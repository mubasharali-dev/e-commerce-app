import React, { useState } from "react";
import Medicine from "../../assets/images/Medicine.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import "./header.css";

function Header() {
  const navigate = useNavigate();
  // Define the showMenu state to handle dropdown visibility
  const [showMenu, setShowMenu] = useState(false);
  const [showNavLinks, setShowNavLinks] = useState(false);

  // Toggle the visibility of the dropdown menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleShowNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  return (
    <div>
      <header className="header">
        <div className="scontainer flex">
          <div className="logo">
            <img
              className="logo-image"
              style={{ height: "100%" }}
              onClick={() => navigate(-1)}
              src={Medicine}
              alt="Medicine logo"
            />
            <span>
              <div className="search flex">
                <AiOutlineSearch className="searchIcon" />
                <input type="text" placeholder="Search" />
              </div>
            </span>
            <Card />
            <div className="right-nav">
              <div className="profile" onClick={toggleMenu}>
                {/* Add user icon */}
                <FaUser className="profileIcon" aria-label="Profile Icon" />
                {/* Display dropdown menu if showMenu is true */}
                {showMenu && (
                  <div className="profile-dropdown">
                    <ul>
                      <li onClick={() => navigate("myaccount")}>My Account</li>
                      <li onClick={() => navigate("myorders")}>My Orders</li>
                      <li onClick={() => navigate("vouchers")}>Vouchers</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="profile" onClick={toggleShowNavLinks}>
                {/* Add user icon */}
                <BiDotsVerticalRounded
                  className="profileDots"
                  aria-label="Profile Icon"
                />
                {/* Display dropdown menu if showMenu is true */}
                {showNavLinks && (
                  <div className="profile-dropdown">
                    <ul>
                      <li onClick={() => navigate("/")}>Home</li>
                      <li onClick={() => navigate("/about")}>About</li>
                      <li onClick={() => navigate("/contact")}>Contact Us</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
