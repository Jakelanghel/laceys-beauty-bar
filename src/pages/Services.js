import React from "react";
import { StyledServices } from "../components/styled/Services.Styled";
import { HashLink as Link } from "react-router-hash-link";
import { images } from "../constants/images";

const Services = () => {
  return (
    <StyledServices className="padding-top">
      <nav>
        <div className="container-links">
          <Link smooth to="/Services#lashes" className="link">
            Lashes
          </Link>

          <Link smooth to="/Services#brows" className="link">
            Brows
          </Link>
        </div>

        <div className="container-links">
          <Link smooth to="/Services#skin" className="link">
            Skin
          </Link>

          <Link smooth to="/Services#waxing" className="link">
            Waxing
          </Link>
        </div>
      </nav>

      <div id="lashes" className="container">
        <h2 className="title">Lashes</h2>

        <img src={images.lashesImg} alt="" className="services-img" />

        <div className="container-services-copy">
          <div className="container-service">
            <h3>Full set of eyelash extensions</h3>
            <p className="description">Classic, Hybrid, Volume, Mega Volume</p>
            <p className="price">$120 - $150</p>
          </div>

          <div className="container-service">
            <h3>Eyelash refill</h3>
            <p className="description">Needed every 2-3 weeks</p>
            <p className="price">$60 - $80</p>
          </div>

          <div className="container-service">
            <h3>Eyelash lift and tint</h3>
            <p className="description">
              Give your natural lashes the perfect curl
            </p>
            <p className="price">$70</p>
          </div>
        </div>
      </div>

      <div id="brows" className="container">
        <h2>Brows</h2>

        <img src={images.browsImg} alt="" className="services-img" />

        <div className="container-services-copy">
          <div className="container-service">
            <h3>Eyebrow lamination</h3>
            <p className="description">
              Achieve the "brow gel" look for 3-6 weeks
            </p>
            <p className="price">$55</p>
          </div>

          <div className="container-service">
            <h3>Eyebrow shaping</h3>
            <p className="description">Wax / Trim / Pluck</p>
            <p className="price">$20</p>
          </div>

          <div className="container-service">
            <h3>Eyebrow tint</h3>
            <p className="price">$15</p>
          </div>

          <div className="container-service">
            <h3>Eyebrow henna</h3>
            <p className="price">$25</p>
          </div>
        </div>
      </div>

      <div id="skin" className="container">
        <h2 className="skin-title">Skin</h2>

        <img src={images.faceImg} alt="" className="services-img" />

        <div className="container-services-copy">
          <div className="container-service">
            <h3>One hour facial with mini massage</h3>
            <p className="description">
              Customize your facial with farmhouse fresh & Esthemax products.
            </p>
            <p className="price">$70</p>
          </div>

          <div className="container-service">
            <h3>Dermaplane</h3>
            <p className="description">
              Achieve an even skin tone & texture by removing dead skin cells.
            </p>
            <p className="price">$65</p>
          </div>

          <div className="container-service">
            <h3>"Pick me up" facial</h3>
            <p className="description">30 min facial</p>
            <p className="price">$40</p>
          </div>

          <div className="container-services container-waxing" id="waxing">
            <div className="container-service">
              <h2 className="title">Waxing</h2>
            </div>

            <div className="container-service">
              <ul>
                <li>
                  chin: <span>$5</span>
                </li>

                <li>
                  upper / lower lip: <span>$10</span>
                </li>

                <li>
                  back: <span>$30</span>
                </li>

                <li>
                  chest: <span>$30</span>
                </li>

                <li>
                  arms: <span>$35</span>
                </li>

                <li>
                  underarm: <span>$40</span>
                </li>

                <li>
                  full face: <span>$40</span>
                </li>

                <li>
                  legs: <span>$40</span>
                </li>

                <li>
                  bikini: <span>$50</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </StyledServices>
  );
};

export default Services;
