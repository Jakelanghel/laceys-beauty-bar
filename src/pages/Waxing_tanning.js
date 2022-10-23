import React from "react";
import { images } from "../constants/images";
import { StyledMultiServiceContainer } from "../components/shared/multiServiceContainer.Styled";
import PageMotion from "../components/motion/PageMotion";

const WaxingAndTanning = () => {
  return (
    <PageMotion>
      <StyledMultiServiceContainer>
        <div className="container ">
          <div className="container-1 spacer">
            <h1 className="title">Waxing</h1>
            <div>
              <p>
                We are waxing queens at the beauty bar! We offer a variety of
                waxes, from full face to full Brazilian. Whether you're looking
                to have smooth legs or smooth underarms, we have you covered!
                Book your wax today for smooth skin year round!
              </p>
            </div>
          </div>

          <div className="container-2 inverse">
            <img src={images.logoWhite} alt="" />
            <div className="container-services">
              <div className="container-service">
                <h2>Brazilian Wax</h2>
                <p className="price mgn-tp">$80</p>
              </div>

              <div className="container-service">
                <h2>Bikini Wax</h2>
                <p className="price mgn-tp">$50</p>
              </div>

              <div className="container-service">
                <h2>Leg Wax</h2>
                <p className="price mgn-tp">$50</p>
              </div>

              <div className="container-service">
                <h2>Full Face Wax</h2>
                <p className="description">Sideburns, lip and chin</p>
                <p className="price">$30 - $40</p>
              </div>

              <div className="container-service">
                <h2>Men's Back / Chest Wax</h2>
                <p className="price mgn-tp">$40</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="container-1 inverse-1 waxing">
            <div className="container-copy">
              <h1 className="title">Tanning</h1>

              <div>
                <p>
                  At Lacey's Beauty Bar, we offer the best spray tanning on the
                  market! We offer a healthy and safe method using organic
                  ingredients. Our all-natural solution provides a beautiful
                  golden glow that you can achieve year round. Lacey is
                  specifically trained to provide luxurious tans that leave you
                  with a beautiful and natural color.
                </p>
              </div>
            </div>
          </div>

          <div className="container-2 inverse-2 spacer tanning">
            <img src={images.logoWhite} alt="" />
            <div className="tanning">
              <div className="container-service">
                <h2>Level 1</h2>
                <p className="description">Light Spray Tan</p>
              </div>
              <div className="container-service">
                <h2>Level 2</h2>
                <p className="description">Medium Spray Tan</p>
              </div>

              <div className="container-service">
                <h2>Level 3</h2>
                <p className="description">Dark Spray Tan</p>
              </div>
              <div className="container-service">
                <h2>Level 4</h2>
                <p className="description">Ultra Spray Tan</p>
              </div>
              <p className="price">$30 - $40</p>
            </div>
          </div>
        </div>
      </StyledMultiServiceContainer>
    </PageMotion>
  );
};

export default WaxingAndTanning;
