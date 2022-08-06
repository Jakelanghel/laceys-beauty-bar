import React from "react";
import { images } from "../constants/images";
import { StyledServiceContainer } from "../components/styled/ServiceContainer.Styled";
import Carousel from "../components/Carousel";
import LashesGallery from "../components/galleries/LashesGallery";

const Lashes = () => {
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
        <div className="container-1">
          <h1 className="mobile-title">Lashes</h1>
          <h2 className="desktop-title">Title about your lashes</h2>

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
            <h2>Full set of eyelash extensions</h2>
            <p className="description">Classic, Hybrid, Volume, Mega Volume</p>
            <p className="price">$120 - $150</p>
          </div>

          <div className="container-service">
            <h2>Eyelash refill</h2>
            <p className="description">Needed every 2-3 weeks</p>
            <p className="price">$60 - $80</p>
          </div>

          <div className="container-service">
            <h2>Eyelash lift and tint</h2>
            <p className="description">
              Give your natural lashes the perfect curl
            </p>
            <p className="price">$70</p>
          </div>
        </div>
      </div>

      <div className="container-gallery">
        <LashesGallery className="gallery" />
      </div>
    </StyledServiceContainer>
  );
};

export default Lashes;
