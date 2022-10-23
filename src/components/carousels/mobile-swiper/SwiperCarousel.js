import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { StyledSwiperContainer } from "./SwiperContainer.Styled";

import { images } from "../../../constants/images";

const SwiperCarousel = (props) => {
  return (
    <StyledSwiperContainer>
      <Swiper
        modules={[Navigation, EffectFade]}
        navigation
        effect={"fade"}
        speed={800}
        slidesPerView={1}
        loop
        className="swiper"
      >
        <SwiperSlide className="swiper-slide">
          <img src={props.imgArr[0]} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={props.imgArr[1]} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={props.imgArr[2]} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={props.imgArr[3]} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={props.imgArr[4]} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={props.imgArr[5]} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={props.imgArr[6]} alt="" />
        </SwiperSlide>
      </Swiper>
    </StyledSwiperContainer>
  );
};

export default SwiperCarousel;
