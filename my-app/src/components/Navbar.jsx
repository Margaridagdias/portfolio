
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        {/* Header Logo */}
        <a href="#home" className="nav-logo">
          <img src="/images/grayM.png" alt="/" />
        </a>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : " fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#home" className="nav-links" onClick={closeMobileMenu}>
              Home
            </a>
          </li>

          <li className="nav-item">
            <a href="#about" className="nav-links" onClick={closeMobileMenu}>
              About
            </a>
          </li>

          <li className="nav-item">
            <a href="#skills" className="nav-links" onClick={closeMobileMenu}>
              Skills
            </a>
          </li>

          <li className="nav-item">
            <a
              href="#background"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Background
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
