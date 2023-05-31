import React from "react";
import VW_Icon from "../assets/images/icons/VW_Logo.png";
import WalletIcon from "../assets/images/icons/Wallet_Icon.png";
import FaqIcon from "../assets/images/icons/Faq_Icon.png";
import DsiteIcon from "../assets/images/icons/D_site_Icon.png";
import { useNavigate } from "react-router-dom";
import { useExperience } from "@vatom/experience-sdk";

const Homepage = () => {
  const navigate = useNavigate();
  const { openSpace, navigateToExternalBrowser, navigateToWallet } =
    useExperience();
  const dSiteURL =
    "https://www2.deloitte.com/us/en/pages/consulting/solutions/enterprise-metaverse-consulting.html";
  const space = "@mwcstaging";
  const vatomSpaceURL =
    "https://spaces.vatom.com/gather/7535414001";
  

  return (
    <>
      <div className="homepage">
        <div className="hompage-list-container">
          <div
            onClick={() => {
              navigateToExternalBrowser(vatomSpaceURL);
            }}
            className="hompage-icon-container"
          >
            <img className="hompage-img-icon" alt="VR world" src={VW_Icon} />
            <span className="homepage-text-icon">VIRTUAL WORLD</span>
          </div>

          <div
            onClick={() => navigateToWallet()}
            className="hompage-icon-container"
          >
            <img className="hompage-img-icon" alt="Wallet" src={WalletIcon} />
            <span className="homepage-text-icon">WALLET</span>
          </div>

          <div
            onClick={() => {
              navigate("/faq");
            }}
            className="hompage-icon-container"
          >
            <img className="hompage-img-icon" alt="FAQ" src={FaqIcon} />
            <span className="homepage-text-icon">FAQ</span>
          </div>

          <div
            onClick={() => {
              navigateToExternalBrowser(dSiteURL);
            }}
            className="hompage-icon-container"
          >
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
