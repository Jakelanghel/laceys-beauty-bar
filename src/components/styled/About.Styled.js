import styled from "styled-components";
import { images } from "../../constants/images";

export const StyledAbout = styled.section`
  width: 100%;
  max-width: 1500px;
  text-align: left;
  margin: 5rem auto;
  margin-bottom: 0;

  .box-shadow-1 {
    box-shadow: none;
  }

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

  .container-row {
    margin-bottom: 5rem;
  }

  .container-copy {
    max-width: 500px;
    margin: 0 auto;
  }

  .card {
    padding: 2rem;
    margin: 2rem;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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

  @media screen and (min-width: 900px) {
    padding: 0 2rem;
    .box-shadow-1 {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }
    .about-me {
      margin: 5rem 0;
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
    }

    .about-img {
      width: 100%;
      max-width: 500px;
      object-fit: cover;
    }

    .container-copy {
      width: 47%;
      margin: 0;
      max-width: 600px;
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .hero-copy {
      border-radius: 15px;
      padding: 3rem 2rem;
    }

    .card {
      padding: 3rem 2rem;
      border-radius: 15px;
    }

    .more-info {
      margin-top: 0.5rem;
    }

    .container-carousel {
      width: 47%;
      padding: 30px;
      border-radius: 15px;
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

  @media screen and (min-width: 1100px) {
    padding: 0 4rem;
  }
`;
