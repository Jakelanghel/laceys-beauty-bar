import styled from "styled-components";

export const StyledHome = styled.div`
  width: 100%;
  max-width: 445px;
  margin: 0 auto;
  z-index: 0;
  margin-top: 5rem;

  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .container-hero-img {
      width: 100%;

      .hero-img {
        width: 100%;
      }
    }
  }

  .cta {
    text-align: center;
    padding: 1rem;

    h1 {
      margin-bottom: 1rem;
    }

    p {
      font-size: 1rem;
      max-width: 400px;
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

    /* p {
            font-size: 1.15rem;
            font-size: .95rem;
        } */
  }

  @media screen and (min-width: 900px) {
    /* max-width: 500px; */
  }
`;
