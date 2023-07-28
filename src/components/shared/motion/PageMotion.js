import React from "react";
import { motion } from "framer-motion";

const PageMotion = ({ children }) => {
  const pageVariants = {
    hidden: {
      opacity: 1,
      // x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", delay: 0.5 },
    },
    exit: {
      x: "-100vh",
      transition: { ease: "easeInOut" },
    },
  };
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
};

export default PageMotion;
