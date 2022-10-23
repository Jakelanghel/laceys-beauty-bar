import React from "react";
import { images } from "../constants/images";
import { StyledServiceContainer } from "../components/shared/ServiceContainer.Styled";
import SwiperCarousel from "../components/carousels/mobile-swiper/SwiperCarousel";
import Gallery from "../components/gallery/Gallery";
import PageMotion from "../components/motion/PageMotion";

const Skin = () => {
  const skinImgs = [
    images.skinImg_1,
    images.skinImg_2,
    images.skinImg_3,
    images.skinImg_4,
    images.skinImg_5,
    images.skinImg_6,
    images.skinImg_7,
  ];

  return (
    <PageMotion>
      <StyledServiceContainer>
        <div className="container">
          <div className="container-1">
            <h1 className="title">Skin</h1>

            <div>
              <p>
                At Lacey's Beauty Bar, we offer top tier services using some of
                the Industry's leading brands and products. We offer a variety
                of facials using Farmhouse Fresh Products and Esthemax hydro
                jelly masks. We have facials formulated for all skin types. Our
                facial services include a mini massage focusing on your neck,
                décolleté, arms and hands. We look forward to enhancing your
                natural beauty and helping to perfect your skin!
              </p>
            </div>
          </div>

          <div className="container-2">
            <img src={images.logoWhite} alt="" />

            <div className="container-service">
              <h2>One hour facial </h2>
              <h3>(with mini massage)</h3>
              <ul>
                <div className="left">
                  <li>Charcoal Blemish Control</li>
                  <li>Rosacea Reducing</li>
                  <li>Intensive Healing</li>
                </div>
                <div>
                  <li>Lighten, Tighten & Brighten</li>
                  <li>Collagen & Elasticity</li>

                  <li>Anti-Aging</li>
                </div>
              </ul>

              <p className="price">$70</p>
            </div>

            <div className="container-service">
              <h2>Vajacial Treatments</h2>
              <p className="price">$60 - $100</p>
            </div>

            <div className="container-service">
              <h2>Dermaplaning</h2>
              <p className="description">
                Achieve an even skin tone & texture by removing dead skin cells.
              </p>
              <p className="price">$65</p>
            </div>

            <div className="container-service">
              <h2>Mini facial</h2>
              <p className="description">30 min facial</p>
              <p className="price">$40</p>
            </div>
          </div>
        </div>

        <div className="container-carousel">
          <SwiperCarousel imgArr={skinImgs} />
        </div>
        <Gallery class="skin-gallery" imgs={skinImgs} />
      </StyledServiceContainer>
    </PageMotion>
  );
};

export default Skin;

// eZEa5Wg5MFysSKy
