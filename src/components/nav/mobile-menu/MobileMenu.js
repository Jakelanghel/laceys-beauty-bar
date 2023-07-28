import React from "react";
import { StyledMobileMenu } from "./MobileMenu.Styled";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const MobileMenu = () => {
  const menuVariants = {
    hidden: {
      position: "fixed",
      zIndex: 2,
      y: "-100vh",
      width: "100vw",
      height: "100vh",
      transition: {
        type: "spring",
        damping: 20,
        ease: "easeInOut",
      },
    },
    visible: {
      y: 0,
      width: "100vw",
      height: "100vh",
      transition: {
        type: "spring",
        damping: 20,
        ease: "easeInOut",
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        type: "spring",
        damping: 20,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <StyledMobileMenu>
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
      </StyledMobileMenu>
    </motion.div>
  );
};

export default MobileMenu;
