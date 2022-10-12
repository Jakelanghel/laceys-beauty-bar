import React from "react";
import { images } from "../constants/images";
import { StyledHome } from "../components/pages/Home.Styled";
import About from "../components/about/About";
import DesktopCarousel from "../components/carousels/desktop-carousel/Desktop-Carousel";
import { motion } from "framer-motion";
import PageMotion from "../components/motion/PageMotion";

const Home = () => {
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
    <PageMotion>
      <StyledHome>
        <section className="hero">
          <div className="container-hero-img">
            <img src={images.logo} alt="logo" />
          </div>
          <div className="container-hero-copy">
            <div className="container-contact">
              <a
                href="https://www.google.com/maps/dir/40.8925342,-80.3422202/lacey's+beauty+bar/@40.8239872,-80.3962792,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x883471311d06923b:0xcfa671488a4d69dd!2m2!1d-80.3191563!2d40.7554826"
                className="address"
              >
                1414 7th Ave, Beaver Falls PA,
              </a>
              <a href="724 513 1415" className="phone-number">
                724-513-1415
              </a>
            </div>

            <div className="container-hero-slogan">
              <p>
                Premium <span>services</span>
              </p>
              <p>
                High quality <span>products</span>
              </p>
              <p>
                Experienced <span>professionals</span>
              </p>
            </div>

            <div className="cta">
              <a href="https://booksy.com/en-us/593905_laceys-beauty-bar-llc_eyebrows-lashes_33092_beaver-falls">
                book now
              </a>
            </div>
          </div>
        </section>

        <DesktopCarousel imgArr={beautyBarImgs} />

        <About className="about" carouselClass="about-carousel" />
      </StyledHome>
    </PageMotion>
  );
};

export default Home;
