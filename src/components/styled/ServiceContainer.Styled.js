import styled from "styled-components";

export const StyledServiceContainer = styled.main`
  text-align: center;
  margin: 5.5rem 0;

  .container-2 {
    img {
      display: none;
    }
  }

  .container-services-copy {
    padding: 0 1rem;
  }

  .mobile-title {
    max-width: 170px;
  }

  .desktop-title {
    display: none;
  }

  .tanning-subtitle {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .mobile-title,
  .desktop-title {
    /* font-size: 3rem; */
    font-weight: 700;
    /* font-family: "Dancing Script", cursive; */
    padding: 0.5rem 0;
    margin: 2rem auto;
    margin-bottom: 1rem;
    border-bottom: solid 2px var(--hot-pink);
    border-top: solid 2px var(--hot-pink);
  }

  .container-service {
    margin: 1.5rem 0;

    h2 {
      font-size: 1.25rem;
      text-transform: capitalize;
      letter-spacing: 1px;
    }

    h3 {
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--hot-pink);
    }

    p {
      font-size: 0.8rem;
      margin: 0 auto;
    }

    .price {
      font-size: 1rem;
      color: var(--hot-pink);
      font-weight: 700;
      margin-top: 0.25rem;
    }

    span {
      display: block;
    }

    ul {
      color: var(--hot-pink);
      margin: 0 auto;
      margin-top: 0.5rem;

      li {
        font-size: 0.85rem;
        margin-bottom: 0.5rem;
      }
    }
  }

  .flex {
    display: flex;
    flex-wrap: wrap;

    .container {
      width: 50%;

      p {
        margin-bottom: 1rem;
      }
    }
  }

  .container-1 {
    padding-bottom: 1rem;
  }

  .container-1,
  .container-2 {
    border-bottom: solid 2px var(--hot-pink);
  }

  h3 {
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--hot-pink);
  }

  .container-waxing {
    margin: 4rem 0;

    ul {
      padding: 0;
      margin: 2rem 0;
      list-style: none;

      li {
        width: 75%;
        font-size: 1.15rem;
        text-transform: capitalize;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        margin-bottom: 1.5rem;
        border-bottom: solid 2px var(--hot-pink);

        span {
          color: var(--hot-pink);
          font-weight: 500;
        }
      }
    }
  }

  .container-carousel {
    width: 100%;
    background-color: var(--black);
  }

  @media screen and (max-width: 950px) {
    .container-gallery {
      display: none;
    }
  }

  @media screen and (min-width: 950px) {
    margin-bottom: 10rem;
    margin-top: 16rem;

    .gallery {
      z-index: 2;
    }

    .brows-gallery {
      margin-top: 3rem;
    }

    .container-carousel {
      display: none;
    }

    .container-services-copy {
      max-width: 1200px;
      padding: 0 1rem;
      margin: 0 auto;
      position: relative;
    }

    .container-service {
      margin-bottom: 1.5rem;
      h2 {
        font-size: 1.25rem;
        line-height: 1.5rem;
      }

      p {
        line-height: 1.75rem;
        max-width: 350px;
      }

      .price {
        color: var(--hot-pink);
        font-weight: 700;
      }
    }

    .container-1,
    .container-2 {
      border: none;
    }

    .container-1 {
      width: 50%;
      min-width: 460px;

      margin: 0 2rem;
      margin-bottom: 5rem;
      position: relative;
      padding: 2rem 1rem;
      border-radius: 15px;

      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

      .mobile-title {
        display: none;
      }

      .desktop-title {
        display: block;
        max-width: 600px;
        min-width: 425px;

        border: none;
        margin: 0 auto;
      }

      p {
        max-width: 600px;
        min-width: 425px;
        margin: 0 auto;
      }
    }

    .brows {
      margin-bottom: 8rem;
    }

    .skin {
      margin-bottom: 9rem;
    }

    .container-2 {
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

      p {
        max-width: 325px;
      }
    }
  }

  @media screen and (min-width: 1000px) {
    .container-1 {
      padding: 2rem 3rem;
    }
  }
`;
