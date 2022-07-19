import styled from "styled-components";

export const StyledHome = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  z-index: 0;

  .hero {
    .container-hero-img {
      width: 100%;

      .hero-img {
        width: 100%;
        /* height: 100%; */
      }
    }
  }

  .cta {
    text-align: center;
    padding: 1rem;

    h1 {
      margin-bottom: 1rem;
      line-height: 2rem;
    }

    p {
      margin-bottom: 3rem;
      font-size: 1rem;
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
`;
