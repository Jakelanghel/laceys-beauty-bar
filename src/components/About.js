import React, { useState } from "react";
import { images } from "../constants/images";
import { StyledAbout } from "./styled/About.Styled";
import Profile from "./Profile";
const About = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const showInfo = () => {
    setShowMoreInfo((oldState) => !oldState);
  };

  const beautyBarImgs = [
    images.shopImg_1,
    images.shopImg_2,
    images.shopImg_3,
    images.shopImg_4,
    images.shopImg_5,
    images.shopImg_6,
    images.shopImg_7,
    images.shopImg_8,
  ];

  const laceysBio = [
    `               Hello everyone, my name is Lacey and I'm the owner of the beauty
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
      <Profile
        img={images.imgLacey}
        name={"Lacey"}
        bio={laceysBio}
        inverted={false}
      />

      <Profile
        img={images.imgCailyn}
        name="Cailyn"
        bio={cailynBio}
        inverted={true}
      />

      <Profile
        img={images.imgSyndi}
        name="Sydni"
        bio={sydniBio}
        inverted={false}
      />

      {/* <div className="container-row">
        <div className="container-carousel box-shadow-1">
          <Carousel carouselClassName="about-carousel" imgArr={beautyBarImgs} />
        </div>

        <div className="container">
          <div className="card box-shadow-1">
            <h2>Products</h2>
            <p>
              We carry a variety of skincare and body care products from
              Farmhouse Fresh. Everything is locally grown and made on a farm in
              Texas. Farmhouse fresh is a certified organic brand, paraben and
              sulfate free, and mostly everything is gluten free and vegan. We
              also carry a variety of Esthemax hydro jelly masks. Esthemax is a
              well known brand whose products are only available to licensed
              professionals.
            </p>
          </div>
        </div>
      </div> */}
    </StyledAbout>
  );
};

export default About;
