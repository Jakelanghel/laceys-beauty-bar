import styled from "styled-components";
import { images } from "../../constants/images";

export const StyledAbout = styled.section`
  width: 100%;
  text-align: left;
  margin: 5rem 0;

  .desktop-more-info {
    display: none;
  }

  .mobile-more-info {
    margin-top: 0.5rem;
  }

  h1 {
    text-align: left;
    letter-spacing: 1px;
    /* margin-bottom: 0.5rem; */

    span {
      display: block;
    }
  }

  .container {
    width: 100%;
    z-index: 0;
    .img-container {
      display: flex;
      justify-content: center;
      background-image: url(${images.pinkBg});
      background-size: contain;
      padding: 5.5rem 0;
    }

    .about-img {
      width: 90%;
      max-width: 400px;
      border-radius: 50%;
      padding: 0.5rem;
      border: solid 2px var(--hot-pink);
    }
  }

  .container-copy {
    padding: 2rem 1.25rem;
    max-width: 600px;
    margin: 0 auto;
  }

  h3 {
    color: var(--hot-pink);
  }

  button {
    display: block;
    font-weight: 700;
    color: var(--hot-pink);
    background-color: var(--white);
    text-decoration: underline;
    border: none;
    padding: 0;
    margin-top: 0.5rem;
  }

  @media screen and (min-width: 600px) {
    .container-copy {
      padding: 1.5rem 1.5rem;
    }
  }

  @media screen and (min-width: 900px) {
    .about-me {
      padding-bottom: 3rem;
    }
    .container {
      display: flex;
      justify-content: space-between;
    }

    .img-container {
      width: 50%;
      padding: 5.5rem 3.5rem;
    }

    .about-img {
      object-fit: cover;
    }

    .container-copy {
      width: 50%;
      max-width: none;
      margin: 0;
      padding: 0 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .container-carousel {
      width: 50%;
    }

    .inverted-container {
      .container-copy {
        order: 1;
      }

      .container-carousel {
        order: 2;
      }
    }

    .desktop-more-info {
      display: block;
    }

    .mobile-more-info {
      display: none;
    }

    button {
      display: none;
    }
  }
`;
