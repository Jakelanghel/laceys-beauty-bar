import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  z-index: 1;

  .brand-logo {
    display: none;
  }

  .desktop {
    display: none;
  }

  .nav-left {
    display: flex;
    flex-direction: column;

    .eye-icon {
      width: 27px;
      margin: 0 auto;
    }

    p {
      font-size: 1rem;
      font-weight: 700;
      letter-spacing: 2px;
    }
  }

  .menu-icon {
    width: 25px;
  }

  @media screen and (min-width: 900px) {
    .menu-icon {
      display: none;
    }

    .brand-logo {
      display: block;
      width: 100px;
    }

    padding: 1.5rem 2rem;
  }
`;
