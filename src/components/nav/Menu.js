import React from "react";
import { StyledMenu } from "./Menu.Styled";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const MobileMenu = (props) => {
  return (
    <motion.div
      animate={{
        y: 0,
        width: "100vw",
        height: "100vh",
      }}
      initial={{
        position: "fixed",
        zIndex: 2,
        y: -1000,
        width: "100vw",
        height: "100vh",
      }}
      transition={{
        type: "spring",
        damping: 20,
      }}
    >
      <StyledMenu>
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
            to="/waxing-tanning"
            onClick={props.toggle}
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
      </StyledMenu>
    </motion.div>
  );
};

export default MobileMenu;
