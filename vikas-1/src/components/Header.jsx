import React from "react";
import urLogo from '../assets/images/logos/UR_logo.svg';

const Header = () => {
  return (
    <div className="header-logo">
      <img
        className="image"
        alt="Header logo"
        src={urLogo} 
      />
    </div>
  );
};

export default Header;
