import styled from "styled-components";

export const StyledHome = styled.div`
  width: 100%;
  margin: 0 auto;
  z-index: 0;
  margin: 6rem 0;
  margin-bottom: 3rem;

  /* ================================================================= */
  /* HERO========================================================= */
  /* ================================================================= */

  .hero {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
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
      font-size: 1.15rem;
      font-weight: 00;
      text-transform: capitalize;
      color: var(--txt-grey);
      line-height: 2.25rem;

      span {
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

      font-size: 1.25rem;
      font-weight: 700;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 2px;
      color: var(--off-white);
      background: var(--hot-pink);

      padding: 0.75rem 2rem;
      margin: 0 auto;
      border: none;
      border-radius: 25px;
    }
  }

  @media screen and (min-width: 950px) {
    max-width: 1500px;
    margin: 8rem 0;
    padding: 0 1rem;

    .hero {
      width: 100%;
      flex-direction: row;
      max-width: none;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 3rem 0;

      .container-hero-img {
        width: 45%;

        img {
          margin: 0 auto;
          min-width: 450px;
          /* max-width: 550px; */
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
        font-size: 1.25rem;
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
`;
