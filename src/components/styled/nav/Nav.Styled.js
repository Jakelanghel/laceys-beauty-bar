import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  z-index: 2;
  background-color: transparent;

  .desktop {
    display: none;
  }

  .nav-left {
    .eye-icon {
      width: 27px;
      margin: 0 auto;
    }

    p {
      font-size: 1rem;
      letter-spacing: 2px;
    }
  }

  .menu-icon {
    width: 25px;
  }

  .active {
    color: var(--hot-pink);
    font-weight: 700;
  }

  @media screen and (min-width: 900px) {
    .menu-icon {
      display: none;
    }

    padding: 1.5rem 2rem;
  }
`;
