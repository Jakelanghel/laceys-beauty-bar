import React from "react";
import { images } from "../../constants/images";
import { StyledAbout } from "./About.Styled";
import Profile from "../profile/Profile";
import { motion } from "framer-motion";
const About = () => {
  const laceysBio = [
    `Hello everyone, my name is Lacey and I'm the owner of the beauty
                    bar. I recently opened the shop in December of 2021 and I've been
                    practicing the trade for 4 years. I studied the Esthetics course
                    at North Hills Beauty Academy and obtained my Esthetician License.
                    `,
    `I've always had a passion for the Beauty Industry and making
                    others look and feel their absolute best! I love having a
                    profession that I truly enjoy! I cherish the opportunity that I
                    have getting to know my clients, which has allowed me to develop
                    many friendships! I look forward to meeting you and learning more
                    about your beauty desires!`,
  ];

  const sydniBio = [
    `Sydni is a talented esthetician with a loving passion for making
                    others feel empowered! She has always wanted to be in the beauty
                    industry and recently she obtained her Esthetics License. Sydni
                    specializes in eyelash extensions and eyebrow services. She is an
                    amazing lash technician and we're so happy to have her!`,
  ];
  const cailynBio = [
    `Cailyn has recently became an  Esthetician after changing her 
                      major from a musician to a beautician. She has always had a loving passion for 
                      the industry and making others feel beautiful in their skin! Cailyn mostly focuses 
                      on skincare and facial services. She is a knowledgeable esthetician and we're happy 
                      to have her!`,
  ];

  return (
    <StyledAbout>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Profile
          img={images.imgLacey}
          name="lacey"
          bio={laceysBio}
          inverted={false}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Profile
          img={images.imgCailyn}
          name="cailyn"
          bio={cailynBio}
          inverted={true}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Profile
          img={images.imgSyndi}
          name="sydni"
          bio={sydniBio}
          inverted={false}
        />
      </motion.div>
    </StyledAbout>
  );
};

export default About;
