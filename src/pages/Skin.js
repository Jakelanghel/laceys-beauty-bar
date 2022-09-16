import React from "react";
import { images } from "../constants/images";
import { StyledServiceContainer } from "../components/styled/ServiceContainer.Styled";
import Carousel from "../components/Carousel";
import Gallery from "../components/galleries/Gallery";

const Skin = () => {
  const lashesImgs = [
    images.lashesImg_1,
    images.lashesImg_2,
    images.lashesImg_3,
    images.lashesImg_4,
    images.lashesImg_5,
    images.lashesImg_6,
    images.lashesImg_8,
    images.lashesImg_9,
  ];

  return (
    <StyledServiceContainer>
      <div className="container-carousel">
        <Carousel imgArr={lashesImgs} carouselClassName="service-carousel" />
      </div>
      <div className="container">
        <div className="container-1">
          <h1 className="mobile-title">Skin</h1>
          <h2 className="desktop-title">Title about your skin</h2>

          <p>
            At Lacey's Beauty Bar, we offer top tier services using some of the
            Industry's leading brands and products. We offer a variety of
            facials using Farmhouse Fresh Products and Esthemax hydro jelly
            masks. We have facials formulated for all skin types. Our facial
            services include a mini massage focusing on your neck, décolleté,
            arms and hands. We look forward to enhancing your natural beauty and
            helping to perfect your skin!
          </p>
        </div>

        <div className="container-2">
          <img src={images.logoWhite} alt="" />

          <div className="container-service">
            <h2>One hour facial </h2>
            <h3>(with mini massage)</h3>
            {/* <p className="description">
              Customize your facial with farmhouse fresh & Esthemax products.
            </p> */}
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
      <Gallery class="skin-gallery" />
    </StyledServiceContainer>
  );
};

export default Skin;
