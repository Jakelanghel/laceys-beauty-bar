import React from "react";
import { images } from "../constants/images";
import { StyledServiceContainer } from "../components/styled/ServiceContainer.Styled";
import Carousel from "../components/Carousel";
import LashesGallery from "../components/galleries/LashesGallery";

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
      <div className="container-services-copy">
        <div className="container-1 skin">
          <h1 className="mobile-title">Skin</h1>
          <h2 className="desktop-title">Title about your skin</h2>

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
            <h2>"Pick me up" facial</h2>
            <p className="description">30 min facial</p>
            <p className="price">$40</p>
          </div>

          <div className="container-service">
            <h2>Dermaplane</h2>
            <p className="description">
              Achieve an even skin tone & texture by removing dead skin cells.
            </p>
            <p className="price">$65</p>
          </div>

          <div className="container-service">
            <h2>One hour facial </h2>
            <h3>(with mini massage)</h3>
            <p className="description">
              Customize your facial with farmhouse fresh & Esthemax products.
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

export default Skin;
