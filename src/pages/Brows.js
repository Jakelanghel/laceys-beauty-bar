import React from "react";
import { images } from "../constants/images";
import { StyledServiceContainer } from "../components/styled/ServiceContainer.Styled";
import Carousel from "../components/Carousel";
import Gallery from "../components/galleries/Gallery";

const Brows = () => {
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
          <h1 className="mobile-title">Brows</h1>
          <h2 className="desktop-title">Title about your brows</h2>

          <p>
            Eyebrows" for the text "At Lacey's Beauty Bar, we specialize in
            eyebrow shaping. We're very precise and detail oriented when
            deciding on a shape that best suits your face. We offer a number of
            services for your brows.
          </p>
        </div>

        <div className="container-2">
          <img src={images.logoWhite} alt="" />

          <div className="container-service">
            <h2>Eyebrow lamination</h2>
            <p className="description">
              Achieve the "brow gel" look for 3-6 weeks
            </p>
            <p className="price">$60</p>
          </div>

          <div className="container-service">
            <h2>Eyebrow wax & tint</h2>
            <p className="price">$30</p>
          </div>

          <div className="container-service">
            <h2>Eyebrow wax & henna</h2>
            <p className="price">$25</p>
          </div>

          <div className="container-service">
            <h2>Eyebrow shaping</h2>
            <p className="description">Wax / Trim / Pluck</p>
            <p className="price">$20</p>
          </div>
        </div>
      </div>

      <Gallery class="brows-gallery" />
    </StyledServiceContainer>
  );
};

export default Brows;
