import React from "react";
import { images } from "../../constants/images";
import { StyledAbout } from "./About.Styled";
import Profile from "../profile/Profile";
import { motion } from "framer-motion";
import profileData from "./profileData";
const About = () => {
  return (
    <StyledAbout>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Profile
          img={profileData.lacey.img}
          name="lacey"
          bio={profileData.lacey.bio}
          inverted={false}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Profile
          img={profileData.cailyn.img}
          name="cailyn"
          bio={profileData.cailyn.bio}
          inverted={true}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Profile
          img={profileData.sydni.img}
          name="sydni"
          bio={profileData.sydni.bio}
          inverted={false}
        />
      </motion.div>
    </StyledAbout>
  );
};

export default About;
