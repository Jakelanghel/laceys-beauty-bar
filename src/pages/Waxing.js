import React from "react";
import { images } from "../constants/images";
import { StyledServiceContainer } from "../components/styled/ServiceContainer.Styled";
import Carousel from "../components/Carousel";
import LashesGallery from "../components/galleries/LashesGallery";
const Waxing = () => {
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
          <h1 className="mobile-title">Waxing</h1>
          <h2 className="desktop-title">Title about your skin</h2>

          <p>
            We are waxing queens at the beauty bar! We offer a variety of waxes,
            from full face to full Brazilian. Whether you're looking to have
            smooth legs or smooth underarms, we have you covered! Book your wax
            today for smooth skin year round!
          </p>
        </div>

        <div className="container-2">
          <img src={images.logoWhite} alt="" />
          <div className="container-service">
            <div className="flex">
              <div className="container">
                <h2>Brazilian Wax</h2>
                <p className="description">$70</p>
                <h2>Leg Wax</h2>
                <p className="description">$50</p>
              </div>

              <div className="container">
                <h2>Bikini Wax</h2>
                <p className="description">$40</p>
                <h2>Full Face Wax</h2>
                <p className="description">Sideburns, lip and chin</p>
              </div>

              <div className="container">
                <h2>Men's Chest Wax</h2>
                <p className="description">$40</p>
                <h2>Men's Back Wax</h2>
                <p className="description">$40</p>
              </div>
            </div>

            <p className="price">$30 - $40</p>
          </div>
        </div>
      </div>
      <div className="container-gallery">
        <LashesGallery className="gallery" />
      </div>
    </StyledServiceContainer>
  );
};

export default Waxing;
