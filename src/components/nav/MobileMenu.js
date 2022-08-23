import React from "react";
import { NavLink } from "react-router-dom";
import { StyledMobileMenu } from "../styled/nav/MobileMenu.Styled";

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
            Eyebrows
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

        <div className="link">
          <NavLink
            to="/tanning"
            onClick={props.toggle}
            className={({ isActive }) =>
              isActive ? "active nav-link" : "nav-link"
            }
          >
            Tanning
          </NavLink>
        </div>

        <div className="link">
          <NavLink
            to="/waxing"
            onClick={props.toggle}
            className={({ isActive }) =>
              isActive ? "active nav-link" : "nav-link"
            }
          >
            Waxing
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
