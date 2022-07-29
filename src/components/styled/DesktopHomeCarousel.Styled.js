import styled from "styled-components";

export const StyledDesktopHomeCarousel = styled.div`
  width: 100%;

  .gallery {
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 200px 300px;
    grid-template-areas:
      "img1 img1 img9 img9 img2 img2 img10 img10 img4 img4 img4 img4"
      "img1 img1 img9 img9 img3 img3 img10 img10 img5 img5 img7 img7";

    margin: 3rem;
  }

  .img-1 {
    grid-area: img1;
  }
  .img-2 {
    grid-area: img2;
  }
  .img-3 {
    grid-area: img3;
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
  .img-9 {
    grid-area: img9;
  }
  .img-10 {
    grid-area: img10;
  }

  .gallery-item {
    width: 100%;
    background-color: var(--black);
    background-color: var(--light-pink);
    background-color: var(--off-black);
  }

  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    opacity: 0.5;
  }

  img:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
