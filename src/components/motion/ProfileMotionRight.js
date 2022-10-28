import React from "react";
import { motion } from "framer-motion";

const ProfileMotionRight = ({ children, ...props }) => {
  const profileVariants = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };
  return (
    <motion.div
      variants={profileVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default ProfileMotionRight;
