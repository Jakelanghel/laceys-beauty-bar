import React from "react";
import { images } from "../../constants/images";
import { HomeGalleryStyled } from "../styled/galleries/HomeGallery.Styled";

const DesktopHomeCarousel = () => {
  return (
    <HomeGalleryStyled>
      <div className="gallery">
        <div className="gallery-item img-1">
          <img src={images.homeImg_1} alt="" className="img-1 box-shadow-2" />
        </div>

        <div className="gallery-item img-2">
          <img src={images.homeImg_2} alt="" className="img-2 box-shadow-2" />
        </div>

        <div className="gallery-item img-3">
          <img src={images.homeImg_3} alt="" className="img-3 box-shadow-2" />
        </div>

        <div className="gallery-item img-4">
          <img src={images.homeImg_4} alt="" className="img-4 box-shadow-2" />
        </div>

        <div className="gallery-item img-5">
          <img src={images.homeImg_5} alt="" className="img-5 box-shadow-2" />
        </div>

        <div className="gallery-item img-6">
          <img src={images.homeImg_6} alt="" className="img-6 box-shadow-2" />
        </div>

        <div className="gallery-item img-7">
          <img src={images.homeImg_7} alt="" className="img-7 box-shadow-2" />
        </div>

        <div className="gallery-item img-8">
          <img src={images.homeImg_8} alt="" className="img-8 box-shadow-2" />
        </div>
      </div>
    </HomeGalleryStyled>
  );
};

export default DesktopHomeCarousel;

{
  /* <div className="gallery-item img-8">
          <img src={images.homeImg_8} alt="" className="img-8" />
    </div> */
  /* <div className="gallery-item img-6">
          <img src={images.homeImg_6} alt="" className="img-6" />
    </div> */
  /* <div className="gallery-item img-5">
          <img src={images.homeImg_5} alt="" className="img-5" />
    </div> */
}
