import React, { useState } from "react";
import { StyledCarousel } from "../components/styled/Carousel.Styled";
import { images } from "../constants/images";
import { nanoid } from "nanoid";

const Carousel = (props) => {
  const [carouselCount, setCarouselCount] = useState(0);
  const [shopImages, setCarouselImages] = useState([
    images.shopImg_1,
    images.shopImg_2,
    images.shopImg_3,
    images.shopImg_4,
    images.shopImg_5,
    images.shopImg_6,
    images.shopImg_7,
    images.shopImg_8,
  ]);

  const nextImg = (e) => {
    if (props.carousel === "shop-carousel") {
      if (carouselCount === shopImages.length - 1) {
        setCarouselCount(0);
      } else {
        setCarouselCount((oldState) => oldState + 1);
      }
    }
  };

  const prevImg = (e) => {
    if (carouselCount === 0) {
      setCarouselCount(shopImages.length - 1);
    } else {
      setCarouselCount((oldState) => oldState - 1);
    }
  };

  return (
    <StyledCarousel>
      <div className="carousel-img-container">
        <img
          className="carousel-img"
          src={shopImages[carouselCount]}
          alt="shop"
        />
      </div>

      <div className="carousel-actions">
        <button onClick={prevImg} className="prev-btn">
          <img
            src={images.arrowLeft}
            alt="previous button"
            className="actions-btn filter-white prev-btn"
          />
        </button>
        <button onClick={nextImg} className="next-btn">
          <img
            src={images.arrowRight}
            alt="next button"
            className="actions-btn filter-white next-btn"
          />
        </button>
      </div>
    </StyledCarousel>
  );
};

export default Carousel;
