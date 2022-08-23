import React, { useState } from "react";
import { images } from "../../constants/images";
import { StyledNav } from "../styled/nav/Nav.Styled";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

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
    </StyledNav>
  );
};

export default Nav;
