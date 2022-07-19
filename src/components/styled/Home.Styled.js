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

    p {
      margin-bottom: 3rem;
      font-size: 1.15rem;
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

  .more-info {
    text-align: center;
    padding: 1rem;

    h2 {
      font-size: 1.75rem;
      font-weight: 700;
      letter-spacing: 2px;
      color: var(--hot-pink);
      border-bottom: solid 2px var(--hot-pink);
      padding-bottom: 0.5rem;
      margin: 0 5rem;
      margin-bottom: 3rem;
    }

    .card {
      padding: 2.5rem 1rem;
      margin-bottom: 5rem;
      border-radius: 10px;
      background-color: var(--off-white);
      box-shadow: rgb(248, 200, 220) 0px 5px 25px;
    }

    .card-img {
      width: 100px;
      margin-bottom: 1rem;
    }

    .prices-img {
      width: 30%;
      border: solid 5px var(--black);
      border-radius: 50%;
      padding: 0.75rem 1.5rem;
    }

    .card-title {
      font-size: 1.5rem;
      text-transform: capitalize;
      color: var(--hot-pink);
      margin-bottom: 0.5rem;
    }
  }
`;
