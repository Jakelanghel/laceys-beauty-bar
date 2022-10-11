import React from "react";
import { motion } from "framer-motion";

const MenuMotion = ({ children }) => {
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
      {children}
    </motion.div>
  );
};

export default MenuMotion;
