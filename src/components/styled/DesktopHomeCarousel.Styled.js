import styled from "styled-components";

export const StyledDesktopHomeCarousel = styled.div`
  width: 100%;
  padding: 0 1rem;

  .gallery {
    max-width: 1000px;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 200px 250px;
    grid-template-areas:
      "img1 img1 img8 img8 img2 img2 img7 img7 img4 img4 img4 img4"
      "img1 img1 img8 img8 img3 img3 img7 img7 img5 img5 img6 img6";

    margin: 3rem auto;
  }

  .img-1 {
    grid-area: img1;
    object-position: -225px center;
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
  .img-5 {
    grid-area: img5;
  }
  .img-6 {
    grid-area: img6;
  }
  .img-7 {
    grid-area: img7;
  }
  .img-8 {
    grid-area: img8;
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
    opacity: 0.5;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  img:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
