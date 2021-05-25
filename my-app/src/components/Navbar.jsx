import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SidebarData from './SidebarData';
import './Navbar.css';
import {IconContext} from 'react-icons';


const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)


        return (
          <>
           
              <div className="navbar">
                {/* Header Logo */}
                <Link to="/" className="nav-logo">
                  <img
                    src="/images/grayM.png"
                    alt="/"
                    width="40px"
                    height="40px"
                  />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : ' fas fa-bars'}>
                    
                  </i>
                </div>
          </div>
          </>
        );
    }


export default Navbar;