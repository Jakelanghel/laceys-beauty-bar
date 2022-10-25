import React from "react";
import { images } from "../constants/images";
import { StyledServiceContainer } from "../components/shared/ServiceContainer.Styled";
import Gallery from "../components/gallery/Gallery";
import SwiperCarousel from "../components/carousels/mobile-swiper/SwiperCarousel";
import PageMotion from "../components/motion/PageMotion";

const Brows = () => {
  const desktopBrowsArr = [
    images.browsImg_1,
    images.browsImg_2,
    images.browsImg_3,
    images.browsImg_4,
    images.browsImg_5,
    images.browsImg_6,
    images.browsImg_7,
  ];
  const mobileBrowsArr = [
    images.mobileBrowsImg_1,
    images.browsImg_2,
    images.mobileBrowsImg_3,
    images.browsImg_4,
    images.browsImg_5,
    images.mobileBrowsImg_6,
    images.browsImg_7,
  ];

  return (
    <PageMotion>
      <StyledServiceContainer>
        <div className="container">
          <div className="container-1">
            <h1 className="title">Eyebrows</h1>
            <div>
              <p>
                At Lacey's Beauty Bar, we specialize in eyebrow shaping. We're
                very precise and detail oriented when deciding on a shape that
                best suits your face. We offer a number of services for your
                brows.
              </p>
            </div>
          </div>

          <div className="container-2">
            <img src={images.logoWhite} alt="" />

            <div className="container-service">
              <h2>Eyebrow lamination</h2>
              <p className="description">
                Achieve the "brow gel" look for 3-6 weeks
              </p>
              <p className="price">$60</p>
            </div>

            <div className="container-service">
              <h2>Eyebrow shaping & tint</h2>
              <p className="price">$40</p>
            </div>

            <div className="container-service">
              <h2>Eyebrow shaping & henna</h2>
              <p className="price">$60</p>
            </div>

            <div className="container-service">
              <h2>Eyebrow shaping</h2>
              <p className="description">Wax / Trim / Pluck</p>
              <p className="price">$20</p>
            </div>
          </div>
        </div>

        <div className="container-carousel">
          <SwiperCarousel imgArr={mobileBrowsArr} />
        </div>

        <Gallery class="brows-gallery" imgs={desktopBrowsArr} />
      </StyledServiceContainer>
    </PageMotion>
  );
};

export default Brows;
