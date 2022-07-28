import React from "react";
import { StyledDesktopMenu } from "./styled/DesktopMenu.Styled";
import { NavLink } from "react-router-dom";

const DesktopMenu = (props) => {
  return (
    <StyledDesktopMenu>
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
          <a href="https://tinyurl.com/2p8vkjtm" className="nav-link">
            clothing
          </a>
        </div>
      </div>
    </StyledDesktopMenu>
  );
};

export default DesktopMenu;
