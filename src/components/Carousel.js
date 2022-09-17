import React, { useState } from "react";
import { StyledCarousel } from "../components/styled/Carousel.Styled";
import { images } from "../constants/images";

const Carousel = (props) => {
  const [index, setIndex] = useState(0);

  const nextImg = (e) => {
    if (index === props.imgArr.length - 1) {
      setIndex(0);
    } else {
      setIndex((oldState) => oldState + 1);
    }
  };

  const prevImg = (e) => {
    if (index === 0) {
      setIndex(props.imgArr.length - 1);
    } else {
      setIndex((oldState) => oldState - 1);
    }
  };

  return (
    <StyledCarousel>
      <div className={props.carouselClassName}>
        <img className="carousel-img" src={props.imgArr[index]} alt="shop" />
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
