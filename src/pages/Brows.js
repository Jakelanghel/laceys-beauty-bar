import React from "react";
import { images } from "../constants/images";
import { StyledServiceContainer } from "../components/styled/ServiceContainer.Styled";
import Carousel from "../components/Carousel";
import LashesGallery from "../components/galleries/LashesGallery";

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

      <div className="container-services-copy">
        <div className="container-1 brows">
          <h1 className="mobile-title">Brows</h1>
          <h2 className="desktop-title">Title about your brows</h2>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Doloremque, minima. Non, sapiente! Ipsa hic aut, quis libero
            voluptatem repellendus sed fuga nostrum, dignissimos, non placeat
            vel cumque possimus amet tempora natus molestias pariatur nulla. A?
          </p>
        </div>

        <div className="container-2">
          <img src={images.logoWhite} alt="" />

          <div className="container-service">
            <h2>Eyebrow lamination</h2>
            <p className="description">
              Achieve the "brow gel" look for 3-6 weeks
            </p>
            <p className="price">$55</p>
          </div>
          <div className="container-service">
            <h2>Eyebrow shaping</h2>
            <p className="description">Wax / Trim / Pluck</p>
            <p className="price">$20</p>
          </div>

          <div className="container-service">
            <h2>Eyebrow tint</h2>
            <p className="price">$15</p>
          </div>

          <div className="container-service">
            <h2>Eyebrow henna</h2>
            <p className="price">$25</p>
          </div>
        </div>
      </div>

      <div className="container-gallery brows-gallery">
        <LashesGallery className="gallery" />
      </div>
    </StyledServiceContainer>
  );
};

export default Brows;
