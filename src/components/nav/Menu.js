import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="link">
        <NavLink
          to="/"
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
          className={({ isActive }) =>
            isActive ? "active nav-link" : "nav-link"
          }
        >
          Skin
        </NavLink>
      </div>

      <div className="link">
        <NavLink
          to="/waxing-tanning"
          className={({ isActive }) =>
            isActive ? "active nav-link" : "nav-link"
          }
        >
          Waxing/Tanning
        </NavLink>
      </div>

      <div className="link">
        <a href="https://tinyurl.com/2p8vkjtm" className="nav-link">
          Clothing
        </a>
      </div>
    </>
  );
};

export default Menu;
