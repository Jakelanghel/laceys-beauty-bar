import styled from "styled-components";

export const StyledServiceContainer = styled.main`
  text-align: center;
  margin: 5.5rem 0;

  .container-img {
    width: 100%;
    background-color: var(--black);
  }

  .services-img {
    width: 100%;
    opacity: 0.7;
    height: 350px;
    object-fit: cover;
  }

  .brows-img {
    object-position: bottom center;
  }

  .skin-img {
    object-position: top center;
  }

  .container-services-copy {
    padding: 0 1rem;
  }

  h1,
  .title {
    max-width: 170px;
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
  }

  h2 {
    font-size: 1.35rem;
  }

  .description {
  }

  .price {
    color: var(--hot-pink);
    font-weight: 700;
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
`;
