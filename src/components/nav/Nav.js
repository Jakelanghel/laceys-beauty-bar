import React from "react";
import { images } from "../../constants/images";
import { NavLink } from "react-router-dom";
import { StyledNav } from "../nav/Nav.Styled";
import DesktopMenu from "./desktop-menu/DesktopMenu";

export const Nav = (props) => {
  return (
    <StyledNav>
      <NavLink to="/" className="nav-icon filter-pink">
        <img src={images.eyeIcon} alt="" className="eye-icon" />
        <p>LBB</p>
      </NavLink>

      <img
        src={images.menuIcon}
        alt=""
        className=" nav-icon menu-icon filter-pink"
        onClick={props.toggleMenu}
      />

      <DesktopMenu />
    </StyledNav>
  );
};

export default Nav;
