import React from "react";
import { StyledLashesGallery } from "../styled/galleries/LashesGallery.Styled";
import { images } from "../../constants/images";

const LashesGallery = () => {
  return (
    <StyledLashesGallery>
      <div className="gallery">
        <div className="gallery-item img-1">
          <img src={images.lashesImg_1} alt="" className="img-1 box-shadow-2" />
        </div>

        <div className="gallery-item img-2">
          <img src={images.lashesImg_2} alt="" className="img-2 box-shadow-2" />
        </div>

        <div className="gallery-item img-3">
          <img src={images.lashesImg_3} alt="" className="img-3 box-shadow-2" />
        </div>

        {/* <div className="gallery-item img-4">
          <img src={images.lashesImg_4} alt="" className="img-4 box-shadow-2" />
        </div> */}

        <div className="gallery-item img-5">
          <img src={images.lashesImg_5} alt="" className="img-5 box-shadow-2" />
        </div>

        <div className="gallery-item img-6">
          <img src={images.lashesImg_6} alt="" className="img-6 box-shadow-2" />
        </div>

        <div className="gallery-item img-7">
          <img src={images.lashesImg_7} alt="" className="img-7 box-shadow-2" />
        </div>

        <div className="gallery-item img-8">
          <img src={images.lashesImg_8} alt="" className="img-8 box-shadow-2" />
        </div>
        {/* <div className="gallery-item img-9">
          <img src={images.lashesImg_9} alt="" className="img-8 box-shadow-2" />
        </div> */}
      </div>
    </StyledLashesGallery>
  );
};

export default LashesGallery;
