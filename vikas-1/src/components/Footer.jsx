import React from "react";
import HomeLogo from '../assets/images/icons/Home.png';
import WalletLogo from '../assets/images/icons/Wallet.png';

const Footer = () => {
  return (
    <div className="footer">
        <div>
          <img alt="Home" src={HomeLogo} />
        </div>
        <div>
          <img alt="Wallet" src={WalletLogo}  />
        </div>
      </div>
  );
};

export default Footer;
