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

  h2 {
    text-align: left;
    letter-spacing: 1px;

    span {
      display: block;
    }
  }

  .img-container {
    display: flex;
    justify-content: center;
    background-image: url(${images.pinkBg});
    background-size: 50%;
    padding: 5.5rem 0;
  }

  .about-img {
    width: 90%;
    max-width: 400px;
    border-radius: 50%;
    padding: 0.5rem;
    border: solid 2px var(--hot-pink);
  }

  .container-copy {
    padding: 2rem 1rem;
    max-width: 500px;
    margin: 0 auto;
    margin-bottom: 0.5rem;
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
      margin: 5rem 2rem;
    }

      .container-row {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }

      .img-container {
        width: 47%;
        padding: 5.5rem 3.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 15px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
          rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
          rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
      }

      .about-img {
        width: 100%;
        max-width: 500px;
        object-fit: cover;
      }

      .hero-copy {
        border-radius: 15px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
          rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
          rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
      }
    }

    .container-copy {
      width: 47%;
      margin: 0;
      max-width: none;
      padding: 2rem 3rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .card {
      padding: 3rem 2rem;
      border-radius: 15px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }

    .more-info {
      margin-top: 0.5rem;
    }

    .container-carousel {
      width: 47%;
      padding: 25px;
      border-radius: 15px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }

    .inverted-container {
      .container-copy {
        order: 1;
      }

      .container-carousel {
        order: 2;
      }
    }

    .more-info-btn {
      display: none;
    }
  }

  @media screen and (min-width: 1200px) {
    .desktop-more-info {
      display: block;
    }
  }
`;
