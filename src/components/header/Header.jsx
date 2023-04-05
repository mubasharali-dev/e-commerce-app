import React from "react";
import Medicine from "../../assets/images/Medicine.svg";
import { AiOutlineSearch } from "react-icons/ai";
import Card from "./Card";
import User from "./User";
import header from "./header.css";

function Header() {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });
  window.scrollTo({ top: document.body.scrollHeight, behaviour: "smooth" });
  return (
    <div>
      <header className="header">
        <div className="scontainer flex">
          <div className="logo">
            <img src={Medicine} />
            <span>
              <div className="search flex">
                <AiOutlineSearch className="searchIcon" />
                <input type="text" placeholder="Search ..." />
              </div>
            </span>
            <Card />
            <User />
          </div>
          <div className="account flexCenter"></div>
        </div>
      </header>
    </div>
  );
}

export default Header;
