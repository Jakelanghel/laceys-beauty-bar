import styled from "styled-components";
import { images } from "../../constants/images";

export const StyledCarousel = styled.div`
  padding: 0;
  position: relative;

  .carousel-actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 0.5rem;

    button {
      border: none;
      padding: 10px 20px;
      border-radius: 50%;
      background-color: var(--hot-pink);
      opacity: 0.7;
    }

    .actions-btn {
      width: 15px;
    }
  }

  .carousel-img-container {
    width: 100%;
    background-image: url(${images.pinkBg});
    /* background-size: cover; */
    /* background-position: top center; */

    img {
      width: 100%;
      height: 400px;
      object-fit: contain;
    }
  }
`;
