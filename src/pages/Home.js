import React from "react";
import { images } from "../constants/images";
import { StyledHome } from "../components/styled/pages/Home.Styled";
import About from "../components/About";
import HomeGallery from "../components/galleries/HomeGallery";

const Home = () => {
  return (
    <StyledHome>
      <div className="container-col">
        <section className="hero">
          <div className="container-hero-img">
            <img
              src={images.logoWhite}
              alt="store front"
              className="hero-img"
            />
          </div>

          <div className="cta">
            <h1>Your one stop shop for everything beauty!</h1>
            <p>
              eyelash extensions, facials, eyebrow waxing, tinting, henna,
              dermaplane and other body waxing
            </p>
            <a href="https://booksy.com/en-us/593905_laceys-beauty-bar-llc_eyebrows-lashes_33092_beaver-falls">
              book now
            </a>
          </div>
        </section>

        <HomeGallery className="desktop-carousel" />
      </div>

      <About className="about" carouselClass="about-carousel" />
    </StyledHome>
  );
};

export default Home;
