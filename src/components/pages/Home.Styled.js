import styled from "styled-components";

export const StyledHome = styled.div`
  width: 100%;
  z-index: 0;
  margin: 6rem auto;
  margin-bottom: 3rem;

  /* ================================================================= */
  /* HERO========================================================= */
  /* ================================================================= */

  .hero {
    width: 95%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background-color: var(--white);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -70px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -50px,
      rgba(15, 37, 64, 0.35) 0px -2px 6px 0px inset;
    border-radius: 15px;
  }

  .container-hero-img {
    width: 100%;
    img {
      width: 100%;
    }
  }

  .container-contact {
    font-size: 0.75rem;
    letter-spacing: 2px;
    text-align: center;

    a {
      display: block;
      text-decoration: none;
      color: var(--txt-grey);
    }

    .phone-number {
      margin-left: 0.5rem;
    }
  }

  .container-hero-slogan {
    text-align: center;
    margin: 1rem 0;
    letter-spacing: 2px;

    p {
      font-size: 1rem;
      font-weight: 00;
      text-transform: capitalize;
      color: var(--txt-grey);
      line-height: 2.5rem;

      span {
        font-size: 1.75rem;
        font-family: "Dancing Script", cursive;
        color: var(--hot-pink);
        font-weight: 700;
      }
    }
  }

  .cta {
    text-align: center;
    margin-top: 2.5rem;

    p {
      font-size: 1rem;
      text-transform: capitalize;
      max-width: 350px;
      padding: 0.5rem 0;
      padding-bottom: 1rem;
    }

    a {
      width: 225px;
      display: block;

      font-size: 1.5rem;
      font-weight: 500;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 2px;
      color: var(--off-white);
      background: var(--hot-pink);
      padding: 0.75rem 2rem;
      margin: 1.5rem auto;
      border: none;
      border-radius: 25px;
    }
  }

  @media screen and (min-width: 400px) {
    .hero {
      width: 90%;
    }
  }

  @media screen and (min-width: 950px) {
    margin: 8rem 0;
    padding: 0 1rem;

    .hero {
      width: 100%;
      max-width: none;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      padding: 4rem 2rem;
      background-color: transparent;
      box-shadow: none;

      .container-hero-img {
        width: 450px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
          rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
          rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        background-color: var(--white);
        border-radius: 15px;

        img {
          margin: 0 auto;
          width: 450px;
        }
      }

      .container-hero-copy {
        width: 42%;
        max-width: 400px;
        margin-left: 3rem;
        padding: 2rem;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
          rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
          rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        background-color: var(--white);
        border-radius: 15px;
      }
    }

    .container-contact {
      text-align: left;

      .phone-number {
        margin: 0;
      }
    }

    .container-hero-slogan {
      text-align: left;

      p {
        font-size: 1rem;

        span {
          font-size: 1.75rem;
        }
      }
    }

    .cta {
      margin-top: 1.5rem;
      a {
        margin: 0;
        border-radius: 10px;
      }
    }
  }

  @media screen and (min-width: 1100px) {
    .hero {
      padding: 4rem 4rem;
    }
  }

  @media screen and (min-width: 1200px) {
    .hero {
      .container-hero-img {
        width: 550px;

        img {
          width: 550px;
        }
      }
    }
  }
  @media screen and (min-width: 1300px) {
    .hero {
      .container-hero-img {
        width: 600px;

        img {
          width: 600px;
        }
      }
    }
  }
  @media screen and (min-width: 1400px) {
    .hero {
      max-width: 1400px;
      padding: 4rem 2rem;
      .container-hero-img {
        width: 650px;

        img {
          width: 650px;
        }
      }
    }
  }
`;
