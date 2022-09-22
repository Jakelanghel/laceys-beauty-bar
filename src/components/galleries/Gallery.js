import React from "react";
import { StyledGallery } from "../styled/galleries/Gallery";
import { images } from "../../constants/images";

const Gallery = (props) => {
  return (
    <StyledGallery className={props.class}>
      <div className="gallery">
        <div className="gallery-item img-1">
          <img src={props.imgs[0]} alt="" className="img-1 box-shadow-2" />
        </div>

        <div className="gallery-item img-2">
          <img src={props.imgs[1]} alt="" className="img-2 box-shadow-2" />
        </div>

        <div className="gallery-item img-3">
          <img src={props.imgs[2]} alt="" className="img-3 box-shadow-2" />
        </div>

        <div className="gallery-item img-4">
          <img src={props.imgs[3]} alt="" className="img-8 box-shadow-2" />
        </div>

        <div className="gallery-item img-5">
          <img src={props.imgs[4]} alt="" className="img-5 box-shadow-2" />
        </div>

        <div className="gallery-item img-6">
          <img src={props.imgs[5]} alt="" className="img-6 box-shadow-2" />
        </div>

        <div className="gallery-item img-7">
          <img src={props.imgs[6]} alt="" className="img-7 box-shadow-2" />
        </div>
      </div>
    </StyledGallery>
  );
};

export default Gallery;
