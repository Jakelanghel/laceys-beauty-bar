import React from "react";
import { images } from "../constants/images";
import { StyledServiceContainer } from "../components/styled/ServiceContainer.Styled";

const Lashes = () => {
  return (
    <StyledServiceContainer>
      <div className="container-img">
        <img src={images.lashesImg} alt="" className="services-img" />
      </div>

      <div className="container-services-copy">
        <h1>Lashes</h1>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque,
          minima. Non, sapiente! Ipsa hic aut, quis libero voluptatem
          repellendus sed fuga nostrum, dignissimos, non placeat vel cumque
          possimus amet tempora natus molestias pariatur nulla. A?
        </p>

        <div className="container-service">
          <h2>Full set of eyelash extensions</h2>
          <p className="description">Classic, Hybrid, Volume, Mega Volume</p>
          <p className="price">$120 - $150</p>
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
      </div>
    </StyledServiceContainer>
  );
};

export default Lashes;
