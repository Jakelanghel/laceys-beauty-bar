import styled from "styled-components";

export const HomeCarousel = styled.div`
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;
  .gallery {
    position: relative;
    max-width: 1200px;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 250px 300px;
    grid-template-areas:
      "img1 img1 img1 img1 img2 img2 img2 img2 img4 img4 img4 img4"
      "img1 img1 img1 img1 img2 img2 img2 img2 img4 img4 img4 img4";

    margin: 8rem auto;
    margin-bottom: 11rem;
  }

  .img-1 {
    grid-area: img1;
  }
  .img-2 {
    grid-area: img2;
  }
  .img-3 {
    grid-area: img3;
    object-fit: cover;
  }
  .img-4 {
    grid-area: img4;
  }

  .carousel-actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    button {
      border: none;
      padding: 55px 15px;
      border-radius: 5px;
      background-color: rgba(219, 90, 186, 0.2);
    }

    .actions-btn {
      width: 20px;
    }
  }

  .gallery-item {
    width: 100%;
    background-color: var(--off-black);
    border-radius: 5px;
  }

  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    opacity: 0.7;
    border-radius: 5px;
  }

  button:hover {
    background-color: rgba(219, 90, 186, 0.4);
    img {
      opacity: 1;
    }
  }

  @media screen and (max-width: 950px) {
    display: none;
  }
`;
