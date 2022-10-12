import React from "react";
import { StyledMobileMenu } from "./MobileMenu.Styled";
import { NavLink } from "react-router-dom";
import MenuMotion from "../../motion/MenuMotion";
import Menu from "../Menu";

const MobileMenu = (props) => {
  return (
    <MenuMotion>
      <StyledMobileMenu>
        <Menu />
      </StyledMobileMenu>
    </MenuMotion>
  );
};

export default MobileMenu;
