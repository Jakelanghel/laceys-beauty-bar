import styled from "styled-components";

export const StyledGallery = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;

  .gallery {
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 200px 250px;
    grid-template-areas:
      "img1 img1 img2 img2 img2 img4 img4 img5 img5 img5 img7 img7"
      "img1 img1 img3 img3 img3 img4 img4 img6 img6 img6 img6 img6";
  }

  @media screen and (min-width: 1000px) {
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

  .gallery-item {
    width: 100%;
    background-color: var(--off-black);
    border-radius: 5px;
  }

  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    opacity: 0.8;
    border-radius: 5px;
  }

  img:hover {
    opacity: 1;
  }

  .skin-img-1 {
    object-fit: none;
  }

  @media screen and (max-width: 900px) {
    display: none;

    .brows-gallery {
      margin-top: 50rem;
    }
  }
`;
