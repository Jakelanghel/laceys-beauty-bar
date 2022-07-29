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
            to="/lashes"
            onClick={props.toggle}
            className={({ isActive }) =>
              isActive ? "active nav-link" : "nav-link"
            }
          >
            Lashes
          </NavLink>
        </div>

        <div className="link">
          <NavLink
            to="/Brows"
            onClick={props.toggle}
            className={({ isActive }) =>
              isActive ? "active nav-link" : "nav-link"
            }
          >
            Brows
          </NavLink>
        </div>

        <div className="link">
          <NavLink
            to="/Skin"
            onClick={props.toggle}
            className={({ isActive }) =>
              isActive ? "active nav-link" : "nav-link"
            }
          >
            Skin
          </NavLink>
        </div>

        <div className="link store-link-container">
          <a href="https://tinyurl.com/2p8vkjtm" className="store-link">
            "Thread & Sew" Clothing
          </a>
        </div>
      </div>
    </StyledMobileMenu>
  );
};

export default MobileMenu;
