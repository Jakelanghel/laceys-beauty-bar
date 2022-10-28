import React from "react";
import { StyledAbout } from "./About.Styled";
import Profile from "../profile/Profile";
import profileData from "./profileData";
import ProfileMotionLeft from "../motion/ProfileMotionLeft";
import ProfileMotionRight from "../motion/ProfileMotionRight";

const About = () => {
  return (
    <StyledAbout>
      <Profile
        img={profileData.lacey.img}
        name="lacey"
        bio={profileData.lacey.bio}
        inverted={false}
      />

      <ProfileMotionLeft>
        <Profile
          img={profileData.cailyn.img}
          name="cailyn"
          bio={profileData.cailyn.bio}
          inverted={true}
        />
      </ProfileMotionLeft>

      <ProfileMotionRight>
        <Profile
          img={profileData.sydni.img}
          name="sydni"
          bio={profileData.sydni.bio}
          inverted={false}
        />
      </ProfileMotionRight>
    </StyledAbout>
  );
};

export default About;
