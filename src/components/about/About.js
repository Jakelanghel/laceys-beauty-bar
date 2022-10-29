import React from "react";
import { StyledAbout } from "./About.Styled";
import Profile from "../profile/Profile";
import profileData from "./profileData";

const About = () => {
  return (
    <StyledAbout>
      <Profile
        img={profileData.lacey.img}
        name="lacey"
        bio={profileData.lacey.bio}
        inverted={false}
      />

      <Profile
        img={profileData.cailyn.img}
        name="cailyn"
        bio={profileData.cailyn.bio}
        inverted={true}
      />

      <Profile
        img={profileData.sydni.img}
        name="sydni"
        bio={profileData.sydni.bio}
        inverted={false}
      />
    </StyledAbout>
  );
};

export default About;
