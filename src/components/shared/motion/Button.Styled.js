import styled from "styled-components";

export const StyledButton = styled.div`
  text-transform: capitalize;
  border: none;
  border-radius: 5px;

  button {
    width: 225px;
    display: block;

    background: var(--hot-pink);
    padding: 0.75rem 2rem;
    margin: 1.5rem auto;
    border: none;
    border-radius: 25px;
  }

  a {
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: uppercase;
    color: var(--off-white);
  }

  @media screen and (min-width: 950px) {
    button {
      margin: 0;
      border-radius: 10px;
    }

    .service-btn {
      margin: 0 auto;
    }
  }
`;
