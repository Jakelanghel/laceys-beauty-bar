import React from "react";
import { NavLink } from "react-router-dom";
import { StyledMobileMenu } from "./styled/MobileMenu.Styled";

const MobileMenu = (props) => {
  return (
    <StyledMobileMenu>
      <div className="container-nav-links">
        <div className="link">
          <NavLink
            to="/"
            onClick={props.toggle}
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
            onClick={props.toggle}
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
            onClick={props.toggle}
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
            onClick={props.toggle}
            className={({ isActive }) =>
              isActive ? "active nav-link" : "nav-link"
            }
          >
            Gallery
          </NavLink>
        </div>

        <div className="link store-link-container">
          <a href="https://tinyurl.com/2p8vkjtm" className="store-link">
            thread & sew clothing
          </a>
        </div>
      </div>
    </StyledMobileMenu>
  );
};

export default MobileMenu;
