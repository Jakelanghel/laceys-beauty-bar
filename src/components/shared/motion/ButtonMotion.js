import React from "react";
import { motion } from "framer-motion";
import { StyledButton } from "./Button.Styled";

const ButtonMotion = (props) => {
  const buttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(225,225,225)",
      boxShadow: "0px 0px 8px rgb(225,225,225)",
      transition: {
        duration: 1,
        repeat: Infinity,
      },
    },
  };
  return (
    <StyledButton>
      <motion.button
        whileHover="hover"
        variants={buttonVariants}
        className={props.class}
      >
        <a href="https://booksy.com/en-us/593905_laceys-beauty-bar-llc_eyebrows-lashes_33092_beaver-falls">
          book now
        </a>
      </motion.button>
    </StyledButton>
  );
};

export default ButtonMotion;
