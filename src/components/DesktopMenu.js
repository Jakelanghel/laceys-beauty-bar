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
      </div>
    </StyledDesktopMenu>
  );
};

export default DesktopMenu;
