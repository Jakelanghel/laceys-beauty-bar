import styled from "styled-components";

export const StyledServiceContainer = styled.main`
  text-align: center;
  margin: 5.5rem 0;

  .container-services-copy {
    padding: 0 1rem;
  }

  .mobile-title {
    max-width: 170px;
  }

  .desktop-title {
    display: none;
  }

  .mobile-title,
  .desktop-title {
    font-size: 3rem;
    font-weight: 700;
    font-family: "Dancing Script", cursive;
    padding: 0.5rem 0;
    margin: 2rem auto;
    margin-bottom: 2rem;
    border-bottom: solid 2px var(--hot-pink);
    border-top: solid 2px var(--hot-pink);
  }

  .skin-title {
    width: 85px;
  }

  .container-service {
    margin: 1.5rem 0;

    h2 {
      font-size: 1.35rem;
    }

    .price {
      color: var(--hot-pink);
      font-weight: 700;
    }
  }

  .container-2 {
    img {
      display: none;
    }
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

  @media screen and (min-width: 900px) {
    margin-bottom: 10rem;
    margin-top: 15rem;

    .container-services-copy {
      display: flex;
      padding-bottom: 1rem;
      max-width: 1200px;
      margin: 0 auto;
      position: relative;

      .container-1 {
        width: 50%;
        margin: 0 3rem;
        margin-bottom: 6rem;
        position: relative;
        z-index: 0;
        padding: 2rem;
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
          border: none;
          margin: 0 auto;
        }

        p {
          padding: 0 2rem;
          margin: 0 auto;
          max-width: 600px;
        }
      }

      .container-2 {
        margin: 3rem 0;
        margin-bottom: 0;
        background-color: var(--white);
        position: absolute;
        top: -125px;
        right: 3rem;

        z-index: 1;

        padding: 0 1.25rem;
        border-radius: 15px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
          rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
          rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

        img {
          display: block;
          width: 200px;
          margin: 1rem auto;
        }

        .container-service {
          margin: 2rem 0;
          h2 {
            font-size: 1.25rem;
            line-height: 1.5rem;
            margin-bottom: 0.25rem;
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
      }

      .brows {
        margin: 1rem 0;
      }
    }

    .container-carousel {
      display: none;
    }
  }

  .gallery {
    z-index: 2;
  }

  .skin {
    margin-bottom: 3rem;
  }
`;
