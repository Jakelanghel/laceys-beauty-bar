import React, { useState } from "react";
import { images } from "../../constants/images";
import { HomeCarousel } from "./DesktopCarousel.Styled";

const DesktopCarousel = (props) => {
  const [indexArr, setIndexArr] = useState([0, 1, 2]);
  const length = props.imgArr.length - 1;

  const nextImg = () => {
    let index_1 = indexArr[0] + 1 <= length ? indexArr[0] + 1 : 0;
    let index_2 = indexArr[1] + 1 <= length ? indexArr[1] + 1 : 0;
    let index_3 = indexArr[2] + 1 <= length ? indexArr[2] + 1 : 0;

    setIndexArr((oldState) => [index_1, index_2, index_3]);
  };

  const prevImg = (e) => {
    let index_1 = indexArr[0] === 0 ? length : indexArr[0] - 1;
    let index_2 = indexArr[1] === 0 ? length : indexArr[1] - 1;
    let index_3 = indexArr[2] === 0 ? length : indexArr[2] - 1;

    setIndexArr((oldState) => [index_1, index_2, index_3]);
  };

  return (
    <HomeCarousel>
      <div className="gallery">
        <div className="gallery-item img-1">
          <img
            src={props.imgArr[indexArr[0]]}
            alt=""
            className="img-1 box-shadow-2"
          />
        </div>

        <div className="gallery-item img-2">
          <img
            src={props.imgArr[indexArr[1]]}
            alt=""
            className="img-2 box-shadow-2"
          />
        </div>

        <div className="gallery-item img-4">
          <img
            src={props.imgArr[indexArr[2]]}
            alt=""
            className="img-4 box-shadow-2"
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
      </div>
    </HomeCarousel>
  );
};

export default DesktopCarousel;
