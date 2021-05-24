import React from 'react'
import * as FaIcons from 'react-icons/fa'


const Navbar = () => {
        return (
          <div className="home-container">
            <div className="header">

              {/* Header Logo */}
              <a href="/" className="header-logo">
                <img
                  src="/images/grayM.png"
                  alt="/"
                  width="40px"
                  height="40px"
                />
              </a>

              {/* Header Button */}
              <Link to="#" className="menu-bars">
                <FaIcons.FaBars />

              {/* Header Nav Menu */}

              <div id="menu" className="header-menu">
                <div className="item-1">Home</div>
                <div className="item-2">About</div>
                <div className="item-3">Skills</div>
                <div className="item-4">Porfolio</div>
              </div>
            </div>
          </div>
        );
    }


export default Navbar;