import React from "react";
import { StyledDesktopMenu } from "./DesktopMenu.Styled";
import Menu from "../Menu";
import MenuMotion from "../../motion/MenuMotion";

const DesktopMenu = () => {
  return (
    <MenuMotion>
      <StyledDesktopMenu>
        <Menu />
      </StyledDesktopMenu>
    </MenuMotion>
  );
};

export default DesktopMenu;
