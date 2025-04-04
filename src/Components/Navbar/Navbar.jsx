import React, { useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <h1>SS</h1>

      {/* Mobile Menu Icon */}
      <img
        src={menu_open}
        alt="Open Menu"
        className="nav-mob-open"
        onClick={() => setMenuOpen(true)}
      />

      {/* Nav Menu */}
      <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <img
          src={menu_close}
          alt="Close Menu"
          className="nav-mob-close"
          onClick={() => setMenuOpen(false)}
        />
        <li>
          <AnchorLink className="anchor-link" href="#">
            <p>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p>About</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#experience">
            <p>Experience</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#project">
            <p>Projects</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p>Contact</p>
          </AnchorLink>
        </li>
      </ul>

      {/* Desktop Connect Button */}
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
