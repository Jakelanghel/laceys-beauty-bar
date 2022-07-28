import styled from "styled-components";
import { images } from "../../constants/images";

export const StyledAbout = styled.section`
  width: 100%;
  text-align: left;
  margin-top: 5rem;

  h1 {
    text-align: left;
    letter-spacing: 1px;

    span {
      display: block;
    }
  }

  .about-me {
    .container {
      z-index: 0;
      .img-container {
        width: 100%;
        display: flex;
        justify-content: center;
        background-image: url(${images.pinkBg});
        /* background-size: cover; */
        padding: 5.5rem 0;
      }
    }

    .about-img {
      width: 90%;
      max-width: 400px;
      border-radius: 50%;
      padding: 0.5rem;
      border: solid 2px var(--hot-pink);
    }
  }

  .container-copy {
    padding: 0 1.25rem;
    margin: 2rem 0;
    max-width: 600px;
    margin: 2rem auto;

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

  .container-thread-sew {
    margin-bottom: 5rem;
  }

  @media screen and (min-width: 600px) {
    .container-copy {
      padding: 1.5rem 1.5rem;
    }
  }

  @media screen and (min-width: 900px) {
    .profile {
      display: flex;
    }
  }
`;
