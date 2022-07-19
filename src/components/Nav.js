import React, { useState } from "react";
import { images } from "../constants/images";
import { StyledNav } from "./styled/Nav.Styled";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuIsOpen((oldState) => !oldState);
  };
  return (
    <StyledNav>
      <div className="nav-left filter-pink">
        <img src={images.eyeIcon} alt="" className="eye-icon " />
        <p className="logo">LBB</p>
      </div>

      {menuIsOpen && (
        <div className="container-nav-links">
          <div className="link">
            <NavLink
              to="/"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
            >
              Home
            </NavLink>
          </div>

          <div className="link">
            <NavLink
              to="/about"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
            >
              About
            </NavLink>
          </div>

          <div className="link">
            <NavLink
              to="/services"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
            >
              Services
            </NavLink>
          </div>

          <div className="link">
            <NavLink
              to="/gallery"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
            >
              Gallery
            </NavLink>
          </div>

          <div className="link">
            <a href="https://tinyurl.com/2p9h699n" className="nav-link">
              Reviews
            </a>
          </div>

          <div className="link store-link-container">
            <a href="https://tinyurl.com/2p8vkjtm" className="store-link">
              thread & sew clothing
            </a>
          </div>
        </div>
      )}

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
