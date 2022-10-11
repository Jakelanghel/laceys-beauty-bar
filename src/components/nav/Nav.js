import React, { useState } from "react";
import { images } from "../../constants/images";
import { StyledNav } from "../nav/Nav.Styled";
import Menu from "./Menu";
import { AnimatePresence } from "framer-motion";

export const Nav = (props) => {
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
      <AnimatePresence>{props.menuIsOpen && <Menu />}</AnimatePresence>
    </>
  );
};

export default Nav;
