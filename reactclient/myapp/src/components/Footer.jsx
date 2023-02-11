import React from 'react';
import './footer.scss';
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import Instagram from '../img/instagram.png'
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="left">
          <div className="menu">ABOUT</div>
          <div className="menu">CONTACT</div>
          <div className="menu">HELP</div>
          <div className="menu">LEGAL</div>
        </div>
        <div className="center">
          <div className="socials">
            <div className="icons">
            <InstagramIcon />
              {/* <img src={Instagram} alt="" className='instagram'/> */}
            </div>
            <div className="icons">
              <TwitterIcon />
            </div>
            <div className="icons">
              <FacebookIcon />
            </div>
          </div>
        </div>
        <div className="right">©2023 Postit.com An awesome blog</div>
      </div>
    </div>
  );
}

export default Footer