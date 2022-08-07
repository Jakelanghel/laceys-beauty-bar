import React, { useState } from "react";
import { images } from "../constants/images";
import { StyledAbout } from "./styled/About.Styled";
import Carousel from "./Carousel";

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

  return (
    <StyledAbout>
      <div className="about-me">
        <div className="container-row">
          <div className="img-container box-shadow-1">
            <img
              src={images.profileImg}
              alt="lacey dean"
              className="about-img"
            />
          </div>

          <div className="container-copy hero-copy box-shadow-1 card">
            <h2>
              Hi!! <span>I'm Lacey</span>
            </h2>
            <p>
              I attended beauty school at North Hills Beauty Academy and became
              a licensed esthetician. I've been a licensed esthetician for the
              past 4 years specializing in eyelash extensions, facials, eyebrow
              waxing, tinting & henna, dermaplane and other body waxing.
            </p>

            {showMoreInfo && (
              <p className="more-info mobile-more-info">
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

            <p className="more-info desktop-more-info">
              Ever since I was a little girl, I knew I wanted to be in the
              industry. I love having a profession that I truly enjoy! I cherish
              the opportunity that I have getting to know my clients, which has
              allowed me to develop many close friendships! Outside of work, I
              stay busy raising my two children, Scarlett & Miles. Being a
              mother has taught me many valuable lessons and I wouldn't trade it
              for the world! I look forward to meeting you and learning more
              about your beauty desires!
            </p>
            <button className="more-info-btn" onClick={showInfo}>
              {!showMoreInfo && "Read more"}
            </button>
          </div>
        </div>
      </div>

      <div className="container-row inverted-container">
        <div className="container-carousel box-shadow-1">
          <Carousel carouselClassName="about-carousel" imgArr={beautyBarImgs} />
        </div>

        <div className="container-copy">
          <div className="card box-shadow-1">
            <h2>Beauty Bar</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi
              illum blanditiis tenetur ipsum nobis eum suscipit mollitia
              deserunt facere id accusantium ea, incidunt recusandae inventore
              pariatur qui. Aperiam, incidunt! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Vel nisi illum blanditiis tenetur
              ipsum nobis eum suscipit mollitia deserunt facere id accusantium
              ea, incidunt recusandae inventore pariatur qui. Aperiam, incidunt!
            </p>
          </div>
        </div>
      </div>

      <div className="container-row">
        <div className="container-carousel box-shadow-1">
          <Carousel carouselClassName="about-carousel" imgArr={beautyBarImgs} />
        </div>

        <div className="container-copy">
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
      </div>

      <div className="container-row inverted-container">
        <div className="container-carousel box-shadow-1">
          <Carousel carouselClassName="about-carousel" imgArr={beautyBarImgs} />
        </div>

        <div className="container-copy card-copy">
          <div className="card box-shadow-1">
            <h2 className="thread-sew-title">Shop</h2>

            <h3>"Thread & Sew" </h3>
            <p>
              We have an assortment of shirts, bodysuits, dresses, sweaters and
              shorts to choose from. We're still growing our inventory and
              adding to our collection. selection!
            </p>
          </div>
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
