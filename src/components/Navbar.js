import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import PersonIcon from "@mui/icons-material/Person";
import { NavLink } from "react-router-dom";
import ContactMailIcon from "@mui/icons-material/ContactMail";

import "./Navbar.css";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="nav">
      <div className={`${showMenu ? "nav_menu show_menu" : "nav_menu"}`}>
        <ul className="nav_list">
        <li className="nav_item">
             <NavLink
             to={"home"}
             onClick={()=>setShowMenu(!showMenu)}

             className={({isActive})=>isActive?'nav_link active_nav':'nav_link'}        
            >
            <HomeIcon className="nav_icon" />

            <h3 className="nav_name">Home</h3>
            </NavLink>
          </li>
          
          <li className="nav_item">
           <NavLink
           to={"portfolio"}
           onClick={()=>setShowMenu(!showMenu)}

           className={({isActive})=>isActive?'nav_link active_nav':'nav_link'}        
            >
            <FolderOpenIcon className="nav_icon" />

            <h3 className="nav_name">Portfolio </h3>
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink
            to={"/contact"}
              className={({isActive})=>isActive?'nav_link active_nav':'nav_link'}
              onClick={()=>setShowMenu(!showMenu)}
            >
              <ContactMailIcon className="nav_icon" />
              <h3 className="nav_name">Contact</h3>
            </NavLink>
          </li>
          
          <li className="nav_item">
              <NavLink
              onClick={()=>setShowMenu(!showMenu)}

              to={"about"}
              className={({isActive})=>isActive?'nav_link active_nav':'nav_link'}        
            >
            <PersonIcon className="nav_icon" />

            <h3 className="nav_name">About </h3>
            </NavLink>
          </li>
        </ul>
      </div>
      <div
        className={`${showMenu ? "nav_toggle animate_toggle" : "nav_toggle"}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
