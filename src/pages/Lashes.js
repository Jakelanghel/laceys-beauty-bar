import React from "react";
import { images } from "../constants/images";
import { StyledServiceContainer } from "../components/shared/ServiceContainer.Styled";
import Carousel from "../components/mobile-carousel/MobileCarousle";
import Gallery from "../components/gallery/Gallery";
import PageMotion from "../components/motion/PageMotion";

const Lashes = () => {
  const mobileLashImgsArr = [
    images.mobileLashesImg_1,
    images.mobileLashesImg_2,
    images.mobileLashesImg_3,
    images.mobileLashesImg_4,
    images.mobileLashesImg_5,
    images.mobileLashesImg_6,
    images.mobileLashesImg_7,
  ];

  const desktopLashImgArr = [
    images.lashesImg_1,
    images.lashesImg_2,
    images.lashesImg_3,
    images.lashesImg_4,
    images.lashesImg_5,
    images.lashesImg_6,
    images.lashesImg_7,
  ];

  return (
    <PageMotion>
      <StyledServiceContainer>
        <div className="container">
          <div className="container-1">
            <div className="container-copy">
              <h1 className="title">Lashes</h1>
              <div>
                <p>
                  At Lacey's Beauty Bar, we know our stuff! Your lash health is
                  the most important aspect to us! We take pride in our ability
                  to customize each set to your lashes!
                </p>

                <p>
                  We offer different styles of lashes depending on what you're
                  looking to get! We offer classic, hybrid, volume and mega
                  volume lash extensions. We offer a variety of lengths and
                  curls. We use nothing but the best products that the Industry
                  has to offer!
                </p>

                <p>
                  We are patient, thorough and trained to properly apply
                  extensions. Quality care, quality products and quality service
                  are our main goals at LBB!
                </p>
              </div>
            </div>
          </div>

          <div className="container-2">
            <img src={images.logoWhite} alt="" />
            <div className="container-service">
              <h2>Full set of eyelash extensions</h2>
              <p className="description">
                Classic, Hybrid, Volume, Mega Volume
              </p>
              <p className="price">$140 - $170</p>
            </div>

            <div className="container-service">
              <h2>
                Full Set of Teen Lashes<span></span>
              </h2>
              <p className="description">18 & Under</p>

              <p className="price">$130</p>
            </div>

            <div className="container-service">
              <h2>Eyelash refill</h2>
              <p className="description">Needed every 2-3 weeks</p>
              <p className="price">$60 - $80</p>
            </div>

            <div className="container-service">
              <h2>Eyelash lift and tint</h2>
              <p className="description">
                Give your natural lashes the perfect curl
              </p>
              <p className="price">$70</p>
            </div>

            <div className="container-service">
              <h2>seven day mini fill</h2>
              <p className="description">
                Give your natural lashes the perfect curl
              </p>
              <p className="price">$50</p>
            </div>
          </div>
        </div>

        <div className="container-carousel">
          <Carousel
            imgArr={mobileLashImgsArr}
            carouselClassName="service-carousel"
          />
        </div>

        <Gallery class="lashes-gallery" imgs={desktopLashImgArr} />
      </StyledServiceContainer>
    </PageMotion>
  );
};

export default Lashes;
