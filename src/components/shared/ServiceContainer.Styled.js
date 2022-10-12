import styled from "styled-components";
import { images } from "../../constants/images";

export const StyledServiceContainer = styled.main`
  text-align: center;
  margin: 8rem 0;
  padding: 0 2rem;

  .container-carousel {
    width: 100%;
  }

  .container-1,
  .container-2 {
    background-color: var(--white);
  }

  .container-1 {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -70px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -50px,
      rgba(15, 37, 64, 0.35) 0px -2px 6px 0px inset;
    padding: 2rem;
    border-radius: 15px;
    max-width: 450px;
    margin: 0 auto;

    div {
      margin-top: 1rem;
    }

    p {
      font-size: 1rem;
      margin-top: 0.5rem;
    }
  }

  .container-2 {
    padding: 2rem 1rem;
    border-radius: 15px;
    max-width: 450px;
    margin: 3rem auto;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -70px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -50px,
      rgba(15, 37, 64, 0.35) 0px -2px 6px 0px inset;
    img {
      display: none;
    }
  }

  .title {
    max-width: 170px;
    font-weight: 700;
    margin: 0 auto;
    border-bottom: solid 2px var(--hot-pink);
  }

  .container-service {
    margin: 1.5rem 0;

    h2 {
      font-size: 1.25rem;
      text-transform: capitalize;
      letter-spacing: 1px;
    }

    h3 {
      font-size: 0.575rem;
      font-weight: 500;
      color: var(--hot-pink);
    }

    p {
      font-size: 0.8rem;
      max-width: 300px;
      margin: 0 auto;
    }

    .price {
      font-size: 1.25rem;
      color: var(--hot-pink);
      font-weight: 700;
      margin-top: 0.25rem;
    }

    span {
      display: block;
    }

    ul {
      max-width: 300px;
      color: var(--txt-grey);
      margin: 0 auto;
      margin-top: 0.5rem;
      display: flex;
      list-style: none;

      li {
        font-size: 0.75rem;
        margin-bottom: 0.5rem;
      }

      .left {
        margin-right: 1rem;
      }
    }
  }

  h3 {
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--hot-pink);
  }

  /* =========================================================== */
  /* =========================================================== */
  /* =========================================================== */
  /* =========================================================== */

  @media screen and (max-width: 950px) {
    .container-gallery {
      display: none;
    }
  }

  @media screen and (min-width: 950px) {
    width: 100%;
    margin-bottom: 10rem;
    margin: 0;
    padding: 12rem 2rem;

    .gallery {
      z-index: 2;
    }

    .lashes-gallery {
      margin-top: 3rem;
    }

    .brows-gallery {
      margin-top: 7rem;
    }

    .skin-gallery {
      margin-top: 9rem;
    }

    .container-carousel {
      display: none;
    }

    .container {
      margin: 0 auto;
      position: relative;
      max-width: 1000px;
      padding: 0 2rem;
    }

    .container-1,
    .container-2 {
      border: none;
    }

    .container-1 {
      width: 50%;
      min-width: 300px;
      padding: 2rem;
      margin: 0 2rem;
      position: relative;
      border-radius: 15px;
      margin: 0;

      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }

    .container-copy {
      .title {
        font-size: 2.5rem;
        display: block;
        max-width: 600px;
        border: none;
        margin-bottom: 0.5rem;
      }

      p {
        max-width: 400px;
        margin: 0 auto;
        margin-bottom: 1rem;
        line-height: 1.75rem;
      }

      div {
        margin-top: 0;
      }
    }

    .container-service {
      margin-bottom: 1.5rem;
      h2 {
        font-size: 1rem;
        line-height: 1.25rem;
        margin-bottom: 0.25rem;
      }

      p {
        line-height: 1.75rem;
        max-width: 350px;
        line-height: 1.15rem;
      }

      .price {
        color: var(--hot-pink);
        font-weight: 700;
        margin: 0;
        margin-top: 0.5rem;
      }
    }

    .container-2 {
      max-width: 300px;
      margin-bottom: 0;
      background-color: var(--white);
      position: absolute;
      top: -120px;
      right: 3rem;
      z-index: 1;
      padding: 0 2rem;
      border-radius: 15px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

      img {
        display: block;
        width: 200px;
        margin: 2rem auto;
      }
    }
  }
`;
