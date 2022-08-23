import React from "react";
import { images } from "../constants/images";
import { StyledHome } from "../components/styled/Home.Styled";
import About from "../components/About";
import HomeGallery from "../components/galleries/HomeGallery";

const Home = () => {
  return (
    <StyledHome>
      <div className="container-col">
        <section className="hero">
          <div className="container-hero-img">
            <img src={images.logoWhite} alt="logo" className="hero-img" />
          </div>

          <div className="container-contact">
            <a
              href="https://www.google.com/maps/dir/40.8925342,-80.3422202/lacey's+beauty+bar/@40.8239872,-80.3962792,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x883471311d06923b:0xcfa671488a4d69dd!2m2!1d-80.3191563!2d40.7554826"
              className="address"
            >
              1414 7th Ave, Beaver Falls, PA 15010
            </a>
            <a href="724 513 1415" className="phone-number">
              724-513-1415
            </a>
          </div>

          <div className="cta">
            <p>
              eyelash extensions, facials, eyebrow waxing, tinting, henna,
              dermaplane and other body waxing
            </p>
            <a href="https://booksy.com/en-us/593905_laceys-beauty-bar-llc_eyebrows-lashes_33092_beaver-falls">
              book now
            </a>
          </div>
        </section>

        <HomeGallery />
      </div>

      <About className="about" carouselClass="about-carousel" />
    </StyledHome>
  );
};

export default Home;
