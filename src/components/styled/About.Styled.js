import styled from "styled-components";
import { images } from "../../constants/images";

export const StyledAbout = styled.section`
  width: 100%;
  max-width: 1500px;
  text-align: left;
  margin: 5rem auto;
  margin-bottom: 0;

  .box-shadow-1 {
    box-shadow: none;
  }

  h2 {
    text-align: left;
    letter-spacing: 1px;

    span {
      display: block;
    }
  }

  h3 {
    color: var(--hot-pink);
  }

  button {
    display: block;
    font-weight: 700;
    color: var(--hot-pink);
    background-color: var(--white);
    text-decoration: underline;
    border: none;
    padding: 0;
    margin-top: 0.5rem;
  }
`;
