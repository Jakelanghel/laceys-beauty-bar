import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  max-width: 100%;
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  z-index: 5;
  background-color: transparent;

  .desktop {
    display: none;
  }

  .nav-left {
    z-index: 5;

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
    z-index: 5;
  }

  .active {
    color: var(--hot-pink);
    font-weight: 700;
  }

  .container-desktop-menu {
    display: none;
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
`;
