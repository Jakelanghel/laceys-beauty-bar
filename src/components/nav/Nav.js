import React, { useState } from "react";
import { images } from "../../constants/images";
import { StyledNav } from "../nav/Nav.Styled";
import MobileMenu from "./mobile-menu/MobileMenu";
import DesktopMenu from "./desktop-menu/DesktopMenu";
import { AnimatePresence } from "framer-motion";

export const Nav = (props) => {
  const screenWidth = window.screen.width;
  console.log(screenWidth);
  return (
    <>
      <StyledNav>
        <div className="nav-left filter-pink">
          <img src={images.eyeIcon} alt="" className="eye-icon " />
          <p>LBB</p>
        </div>

        <img
          src={images.menuIcon}
          alt=""
          className="menu-icon filter-pink"
          onClick={props.toggleMenu}
        />
      </StyledNav>
      <AnimatePresence>{props.menuIsOpen && <MobileMenu />}</AnimatePresence>
      <DesktopMenu />
    </>
  );
};

export default Nav;
