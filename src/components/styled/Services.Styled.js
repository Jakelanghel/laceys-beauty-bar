import styled from "styled-components";
import { images } from "../../constants/images";

export const StyledServices = styled.div`
  text-align: center;
  margin-top: 1rem;

  nav {
    width: 100%;
    padding: 0 2rem;
    margin-bottom: 3rem;

    .container-links {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;

      .link {
        width: 45%;
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--hot-pink);
        border: solid 2px var(--hot-pink);
        border-radius: 8px;
      }
    }
  }

  .container {
    margin: 3rem 0;
  }

  .services-img {
    width: 350px;
    background-color: var(--hot-pink);
  }

  h2 {
    max-width: 200px;
    font-size: 3rem;
    font-weight: 700;
    font-family: "Dancing Script", cursive;

    margin: 0 auto;
    margin-bottom: 2rem;
    border-bottom: solid 2px var(--hot-pink);
    border-top: solid 2px var(--hot-pink);
  }

  .container-services-copy {
    margin: 0 1.5rem;
    .skin-title {
      width: 85px;
    }

    .container-service {
      margin: 1.5rem 0;

      h3 {
        color: var(--light-pink);
      }

      .description {
        margin-top: 0.25rem;
        margin-bottom: 0.5rem;
      }

      .price {
        font-weight: 700;
        color: var(--hot-pink);
      }
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
        border-bottom: solid 2px var(--grey);

        span {
          color: var(--hot-pink);
          font-weight: 500;
        }
      }
    }
  }
`;
