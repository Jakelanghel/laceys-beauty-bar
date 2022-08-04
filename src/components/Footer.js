import React from "react";
import { images } from "../constants/images";
import { StyledFooter } from "./styled/Footer.Styled";

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="container-soc-links filter-pink">
        <img src={images.instagramIcon} alt="" className="soc-link bigger" />
        <img src={images.facebookIcon} alt="" className="soc-link" />
        <img src={images.phoneIcon} alt="" className="soc-link bigger" />
        <img src={images.locationIcon} alt="" className="soc-link" />
      </div>
    </StyledFooter>
  );
};

export default Footer;
