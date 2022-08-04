import React, { useState } from "react";
import { images } from "../constants/images";
import { StyledNav } from "./styled/Nav.Styled";
import MobileMenu from "../components/MobileMenu";
import DesktopMenu from "../components/DesktopMenu";

export const Nav = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen((oldState) => !oldState);
  };

  return (
    <StyledNav>
      <div className="nav-left filter-pink">
        <img src={images.eyeIcon} alt="" className="eye-icon " />
        <p className="logo">LBB</p>
      </div>

      <DesktopMenu />
      {menuIsOpen && <MobileMenu className="mobile" toggle={toggleMenu} />}

      <img
        src={images.menuIcon}
        alt=""
        className="menu-icon filter-pink"
        onClick={toggleMenu}
      />
      <img src={images.logoWhite} alt="" className="brand-logo" />
    </StyledNav>
  );
};

export default Nav;
