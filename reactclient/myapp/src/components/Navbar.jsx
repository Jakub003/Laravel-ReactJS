import React from "react";
import './navbar.scss'
import CreateIcon from "@mui/icons-material/Create";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import Logo from '../img/logo.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
      <Link to='/'>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
      </Link>
        <div className="items">
          <div className="icon">
            <CreateIcon />
          </div>
          <div className="icon">
            <NotificationsNoneIcon />
          </div>
          <div className="icon">
            <SettingsIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
