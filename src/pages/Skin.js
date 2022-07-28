import React from "react";
import { StyledServiceContainer } from "../components/styled/ServiceContainer.Styled";
import { images } from "../constants/images";

const Skin = () => {
  return (
    <StyledServiceContainer>
      <div className="container-img">
        <img src={images.faceImg} alt="" className="services-img" />
      </div>

      <div className="container-services-copy">
        <h1>Skin</h1>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque,
          minima. Non, sapiente! Ipsa hic aut, quis libero voluptatem
          repellendus sed fuga nostrum, dignissimos, non placeat vel cumque
          possimus amet tempora natus molestias pariatur nulla. A?
        </p>
        <div className="container-service">
          <h2>One hour facial with mini massage</h2>
          <p className="description">
            Customize your facial with farmhouse fresh & Esthemax products.
          </p>
          <p className="price">$70</p>
        </div>

        <div className="container-service">
          <h2>Dermaplane</h2>
          <p className="description">
            Achieve an even skin tone & texture by removing dead skin cells.
          </p>
          <p className="price">$65</p>
        </div>

        <div className="container-service">
          <h2>"Pick me up" facial</h2>
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
    </StyledServiceContainer>
  );
};

export default Skin;
