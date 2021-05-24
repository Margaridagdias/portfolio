import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SidebarData from './SidebarData';
import './Navbar.css';
import {IconContext} from 'react-icons';


const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar =() => setSidebar(!sidebar)


        return (
          <>
            <IconContext.Provider value={{ color: "#fff" }}>
              <div className="navbar">
                {/* Header Logo */}
                <a href="/" className="nav-logo">
                  <img
                    src="/images/grayM.png"
                    alt="/"
                    width="40px"
                    height="40px"
                  />
                </a>

                {/* Header Button */}
                <Link to="#" className="menu-bars">
                  <FaIcons.FaBars onClick={showSidebar} />
                </Link>

                {/* Header Nav Menu */}

                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                  <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                      <Link to="#" className="menu-bars">
                        <IconContext.Provider value={{ color: "#000" }}>
                          <AiIcons.AiOutlineClose />
                        </IconContext.Provider>
                      </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                      return (
                        <li key={index} className={item.className}>
                          <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </IconContext.Provider>
          </>
        );
    }


export default Navbar;