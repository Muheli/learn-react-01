import React from "react";
import VW_Icon from "../assets/images/icons/VW_Logo.png";
import WalletIcon from "../assets/images/icons/Wallet_Icon.png";
import FaqIcon from "../assets/images/icons/Faq_Icon.png";
import DsiteIcon from "../assets/images/icons/D_site_Icon.png";

import Footer from './Footer'
import Header from './Header'


const Homepage = () => {
  return (
    <>

      <div className="homepage">
        <div className="hompage-list-container">
          <div className="hompage-icon-container">
            <img className="hompage-img-icon" alt="VR world" src={VW_Icon} />
            <span className="homepage-text-icon">VIRTUAL WORLD</span>
          </div>

          <div className="hompage-icon-container">
            <img className="hompage-img-icon" alt="Wallet" src={WalletIcon} />
            <span className="homepage-text-icon">WALLET</span>
          </div>

          <div className="hompage-icon-container">
            <img className="hompage-img-icon" alt="FAQ" src={FaqIcon} />
            <span className="homepage-text-icon">FAQ</span>
          </div>

          <div className="hompage-icon-container">
            <img
              className="hompage-img-icon"
              alt="Deloitte Website"
              src={DsiteIcon}
            />
            <span className="homepage-text-icon">WEBSITE</span>
          </div>
        </div>
      </div>

    </>
  );
};

export default Homepage;
