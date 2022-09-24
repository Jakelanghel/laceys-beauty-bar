import styled from "styled-components";
import { images } from "../../constants/images";

export const StyledMultiServiceContainer = styled.div`
  text-align: center;
  margin: 5.5rem 0;

  .container-1 {
    .container-copy {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      margin: 2rem 1rem;
      padding: 3rem 1rem;
      border-radius: 15px;
      max-width: 450px;
    }

    div {
      margin-top: 1rem;
    }

    p {
      font-size: 1rem;
      margin-top: 0.5rem;
    }
  }

  .container-2 {
    img {
      display: none;
    }
  }

  .title {
    max-width: 170px;
    font-weight: 700;
    margin: 0 auto;
    border-bottom: solid 2px var(--hot-pink);
  }

  .container-service {
    margin: 1.5rem 0;

    h2 {
      font-size: 1.25rem;
      text-transform: capitalize;
      letter-spacing: 1px;
    }

    h3 {
      font-size: 0.575rem;
      font-weight: 500;
      color: var(--hot-pink);
    }

    p {
      font-size: 0.8rem;
    }

    span {
      display: block;
    }

    ul {
      color: var(--txt-grey);
      margin: 0 auto;
      margin-top: 0.5rem;
      display: flex;
      list-style: none;

      li {
        font-size: 0.75rem;
        margin-bottom: 0.5rem;
      }

      .left {
        margin-right: 1rem;
      }
    }
  }

  .price {
    font-size: 1rem;
    color: var(--hot-pink);
    font-weight: 700;
    margin-top: 0.25rem;
  }

  h3 {
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--hot-pink);
  }

  /* =========================================================== */
  /* =========================================================== */
  /* =========================================================== */
  /* =========================================================== */

  @media screen and (min-width: 950px) {
    padding: 7rem 4rem;
    margin: 0;
    width: 100%;
    background-image: url(${images.flowerBg});

    .container {
      width: 100%;
      max-width: 900px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
    }

    .container-1,
    .container-2 {
      border: none;
    }

    .container-1 {
      .container-copy {
        padding: 3rem;
        background-color: var(--white);
      }

      .title {
        font-size: 2.5rem;
        display: block;
        max-width: 600px;
        border: none;
        margin-bottom: 0.5rem;
      }

      p {
        max-width: 600px;
        margin: 0 auto;
        margin-bottom: 1rem;
      }

      div {
        margin-top: 0;
      }
    }

    .container-service {
      margin-bottom: 1.5rem;
      h2 {
        font-size: 1rem;
        line-height: 1rem;
      }

      p {
        line-height: 1.75rem;
        max-width: 350px;
        line-height: 1.5rem;
      }

      .price {
        color: var(--hot-pink);
        font-weight: 700;
        margin: 0;
      }

      .mgn-tp {
        margin-top: 0.5rem;
      }
    }

    .container-2 {
      max-width: 300px;
      margin-bottom: 0;
      background-color: var(--white);
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
    }

    .tanning {
      padding-bottom: 1rem;
    }

    .inverse-2 {
      order: 1;
    }

    .inverse-1 {
      order: 2;
    }

    .spacer {
      margin-right: 2rem;
    }
  }
`;
