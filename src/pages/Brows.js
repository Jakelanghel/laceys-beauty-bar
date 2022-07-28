import React from "react";
import { StyledServiceContainer } from "../components/styled/ServiceContainer.Styled";
import { images } from "../constants/images";

const Brows = () => {
  return (
    <StyledServiceContainer>
      <div className="container-img">
        <img src={images.EyeBrowImg} alt="" className="services-img" />
      </div>

      <div className="container-services-copy">
        <h1>Brows</h1>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque,
          minima. Non, sapiente! Ipsa hic aut, quis libero voluptatem
          repellendus sed fuga nostrum, dignissimos, non placeat vel cumque
          possimus amet tempora natus molestias pariatur nulla. A?
        </p>
        <div className="container-service">
          <h2>Eyebrow lamination</h2>
          <p className="description">
            Achieve the "brow gel" look for 3-6 weeks
          </p>
          <p className="price">$55</p>
        </div>

        <div className="container-service">
          <h2>Eyebrow shaping</h2>
          <p className="description">Wax / Trim / Pluck</p>
          <p className="price">$20</p>
        </div>

        <div className="container-service">
          <h2>Eyebrow tint</h2>
          <p className="price">$15</p>
        </div>

        <div className="container-service">
          <h2>Eyebrow henna</h2>
          <p className="price">$25</p>
        </div>
      </div>
    </StyledServiceContainer>
  );
};

export default Brows;
