/* <>
  <IconContext.Provider value={{ color: "#000" }}>
   
    <Link to="#" className="menu-bars">
      <FaIcons.FaBars onClick={showSidebar} />
    </Link>


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
  </IconContext.Provider>
</>; 
}
*/
