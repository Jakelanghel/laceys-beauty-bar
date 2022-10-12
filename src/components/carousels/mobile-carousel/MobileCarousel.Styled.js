import styled from "styled-components";

export const StyledMobileCarousel = styled.div`
  position: relative;
  max-width: 600px;
  padding: 0;
  margin: 0 auto;

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

  .about-carousel {
    width: 100%;
    img {
      width: 100%;
      height: 600px;
      object-fit: cover;
      border-radius: 15px;
    }
  }

  .img-container {
    width: 100%;
    padding: 1rem;
    img {
      width: 100%;
      max-width: 500px;
      height: 450px;
      object-fit: cover;
      border-radius: 15px;
    }
  }
`;
