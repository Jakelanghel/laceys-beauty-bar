import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  padding: 1rem;
  z-index: 5;

  .desktop {
    display: none;
  }

  .nav-icon {
    padding: 1rem;
    text-decoration: none;
  }

  .eye-icon {
    width: 27px;
    margin: 0 auto;
  }

  p {
    font-size: 1rem;
    letter-spacing: 2px;
  }

  .menu-icon {
    width: 60px;
    z-index: 5;
  }

  .menu-icon:hover,
  .eye-icon {
    cursor: pointer;
  }

  .active {
    color: var(--hot-pink);
    font-weight: 700;
  }

  @media screen and (min-width: 950px) {
    padding: 2rem 3rem;

    .menu-icon {
      display: none;
    }

    .nav-left {
      .eye-icon {
        width: 35px;
        margin: 0 auto;
      }

      p {
        font-size: 1.25rem;
        letter-spacing: 2px;
      }
    }
  }

  @media screen and (min-width: 1100px) {
    .eye-icon {
      width: 30px;
    }

    p {
      font-size: 1.15rem;
    }
  }

  @media screen and (min-width: 1400px) {
    .eye-icon {
      width: 35px;
    }

    p {
      font-size: 1.25rem;
    }
  }
`;
