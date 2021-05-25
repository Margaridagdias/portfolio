import React, {useState} from "react";
import "./Navbar.css";

const Dropdown = () => {
const [click, setClick] = useState(false);

const handleClick = () => setClick(!click);


  return (<>
        <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
        
        </ul>

  </>
  )
};

export default Dropdown;
