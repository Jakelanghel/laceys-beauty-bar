import styled from "styled-components";

export const StyledCarousel = styled.div`
  padding: 0;
  position: relative;
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

  .service-carousel {
    width: 100%;
    img {
      width: 100%;
      height: 350px;
      object-fit: cover;
      opacity: 0.7;
    }
  }
`;
