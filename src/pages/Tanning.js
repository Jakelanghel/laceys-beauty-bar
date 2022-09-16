import React from "react";
import { images } from "../constants/images";
import { StyledServiceContainer } from "../components/styled/ServiceContainer.Styled";
import Carousel from "../components/Carousel";
import Gallery from "../components/galleries/Gallery";

const Tanning = () => {
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
          <h1 className="mobile-title">Tanning</h1>
          <h2 className="tanning-subtitle">( Heat-Infused Spray Tanning )</h2>
          <h2 className="desktop-title">Title about your skin</h2>

          <p>
            At Lacey's Beauty Bar, we offer the best spray tanning on the
            market! We offer a healthy and safe method using organic
            ingredients. Our all-natural solution provides a beautiful golden
            glow that you can achieve year round. Lacey is specifically trained
            to provide luxurious tans that leave you with a beautiful and
            natural color.
          </p>
        </div>

        <div className="container-2 ">
          <img src={images.logoWhite} alt="" />
          <div className="container-service">
            <div>
              <div className="container">
                <div className="container-service">
                  <h2>Level 1</h2>
                  <p className="description">Light Spray Tan</p>
                </div>
                <div className="container-service">
                  <h2>Level 2</h2>
                  <p className="description">Medium Spray Tan</p>
                </div>
              </div>

              <div className="container">
                <div className="container-service">
                  <h2>Level 3</h2>
                  <p className="description">Dark Spray Tan</p>
                </div>
                <div className="container-service">
                  <h2>Level 4</h2>
                  <p className="description">Ultra Spray Tan</p>
                </div>
              </div>
            </div>

            <p className="price">$30 - $40</p>
          </div>
        </div>
      </div>
      <Gallery className="gallery" />
    </StyledServiceContainer>
  );
};

export default Tanning;
