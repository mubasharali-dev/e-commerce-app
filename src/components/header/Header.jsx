import React, { useState } from "react";
import Medicine from "../../assets/images/Medicine.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import "./header.css";

function Header() {
  const navigate = useNavigate();
  // Define the showMenu state to handle dropdown visibility
  const [showMenu, setShowMenu] = useState(false);

  // Toggle the visibility of the dropdown menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <header className="header">
        <div className="scontainer flex">
          <div className="logo">
            <img
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
            <div className="profile" onClick={toggleMenu}>
              {/* Add user icon */}
              <FaUser className="profileIcon" aria-label="Profile Icon" />
              {/* Display dropdown menu if showMenu is true */}
              {showMenu && (
                <div className="profile-dropdown">
                  <ul>
                    <li>My Account</li>
                    <li>My Orders</li>
                    <li>Password</li>
                    <li>Logout</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
