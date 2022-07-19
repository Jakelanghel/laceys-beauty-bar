import styled from "styled-components";
import { images } from "../../constants/images";

export const StyledAbout = styled.section`
  width: 100%;
  text-align: left;

  .about-me {
    .container {
      z-index: 0;

      .img-container {
        width: 100%;
        display: flex;
        justify-content: center;
        background-image: url(${images.pinkBg});
        /* background-size: cover; */
        padding-bottom: 4.5rem;
      }
    }

    .about-img {
      width: 90%;
      border-radius: 50%;
      padding: 0.5rem;
      border: solid 2px var(--hot-pink);
    }
  }

  .container-copy {
    padding: 0 1.25rem;
    margin: 2rem 0;

    p {
      margin-bottom: 0.5rem;
    }

    h3 {
      color: var(--hot-pink);
      margin-top: 0.25rem;
    }

    button {
      display: block;
      font-weight: 700;
      color: var(--hot-pink);
      background-color: var(--white);
      text-decoration: underline;
      border: none;
      padding: 0;
      margin-top: 1rem;
    }
  }

  .shop {
  }
`;
