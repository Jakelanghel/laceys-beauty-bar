import React, { useState } from "react";
import { images } from "../constants/images";
import { StyledAbout } from "../components/styled/About.Styled";
import Carousel from "../components/Carousel";

const About = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const showInfo = () => {
    setShowMoreInfo((oldState) => !oldState);
  };

  return (
    <StyledAbout>
      <div className="about-me ">
        <div className="container">
          <div className="img-container padding-top">
            <img
              src={images.profileImg}
              alt="lacey dean"
              className="about-img"
            />
          </div>

          <div className="container-copy">
            <h1 className="about-title">About me</h1>

            <p>
              Hello, friends! Thanks for taking the time to learn more about me!
              My name is Lacey and I'm the owner of Lacey's Beauty Bar. I
              attended beauty school at North Hills Beauty Academy and became a
              licensed esthetician. I've been a licensed esthetician for the
              past 4 years specializing in eyelash extensions, facials, eyebrow
              waxing, tinting & henna, dermaplane and other body waxing.
              <button onClick={showInfo}>{!showMoreInfo && "Read more"}</button>
            </p>

            {showMoreInfo && (
              <p className="more-info">
                Ever since I was a little girl, I knew I wanted to be in the
                industry. I love having a profession that I truly enjoy! I
                cherish the opportunity that I have getting to know my clients,
                which has allowed me to develop many close friendships! Outside
                of work, I stay busy raising my two children, Scarlett & Miles.
                Being a mother has taught me many valuable lessons and I
                wouldn't trade it for the world! I look forward to meeting you
                and learning more about your beauty desires!
                <button onClick={showInfo}>Hide</button>
              </p>
            )}
          </div>
        </div>
      </div>

      <Carousel carousel="shop-carousel" />

      <div className="beauty-bar">
        <div className="container-copy">
          <h2>Beauty Bar</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi
            illum blanditiis tenetur ipsum nobis eum suscipit mollitia deserunt
            facere id accusantium ea, incidunt recusandae inventore pariatur
            qui. Aperiam, incidunt!
          </p>
        </div>
      </div>

      <Carousel carousel="store-carousel" />

      <div className="shop">
        <div className="products">
          <div className="container-copy">
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

        <Carousel carousel="shop-carousel" />

        <div className="container-copy">
          <h2>Shop</h2>
          <h3>"Thread & Sew" </h3>
          <h3></h3>
          <p>
            We have an assortment of shirts, bodysuits, dresses, sweaters and
            shorts to choose from. We're still growing our inventory and adding
            to our collection. selection!
          </p>
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
