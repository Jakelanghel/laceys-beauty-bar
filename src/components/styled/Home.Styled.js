import styled from "styled-components";

export const StyledHome = styled.div`
  width: 100%;
  margin: 0 auto;
  z-index: 0;
  margin: 6rem 0;
  margin-bottom: 3rem;

  .hero {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    .container-hero-img {
      width: 100%;

      .hero-img {
        width: 100%;
      }
    }
  }

  .container-contact {
    padding-top: 1rem;
    a {
      display: block;
      font-size: 0.95rem;
      font-weight: 700;
      letter-spacing: 1px;
      text-align: center;
      text-decoration: none;
      color: var(--hot-pink);
    }
  }

  .cta {
    text-align: center;
    padding: 1.75rem 1rem;
    padding-top: 0;

    p {
      font-size: 1rem;
      text-transform: capitalize;
      max-width: 500px;
      margin: 0 auto;
      margin-bottom: 3rem;
    }

    a {
      font-size: 1.25rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--off-white);
      background: var(--hot-pink);
      padding: 0.75rem 2rem;
      border: none;
      border-radius: 5px;
      text-decoration: none;
    }
  }

  @media screen and (min-width: 700px) {
    .padding-top {
      padding-top: 8em;
    }

    h1,
    h2 {
      font-size: 1.75rem;
      font-size: 2rem;
    }

    h1 {
      line-height: 2.5rem;
    }
  }

  @media screen and (min-width: 900px) {
    max-width: none;
    margin-top: 7rem;
    margin-bottom: 3rem;

    .container-col {
      display: flex;
      flex-direction: column;
    }

    .container-hero-img {
      max-width: none;
      margin: 0 auto;
      margin-bottom: 2rem;
    }

    .hero {
      max-width: none;

      .container-hero-img {
        width: 100%;

        .hero-img {
          max-width: 600px;
        }
      }
    }

    .container-contact {
      padding: 0;
    }
  }
`;
