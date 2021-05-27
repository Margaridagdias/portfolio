import { Link } from "react-router-dom";
import React, { useState } from "react";
import SidebarData from "./SidebarData";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        {/* Header Logo */}
        <Link to="/" className="nav-logo">
          <img src="/images/grayM.png" alt="/" width="40px" height="40px" />
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : " fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/skills" className="nav-links" onClick={closeMobileMenu}>
              Skills
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/cv" className="nav-links" onClick={closeMobileMenu}>
              Curriculum
            </Link>
          </li>

        </ul>
      </nav>
    </>
  );
};

export default Navbar;
