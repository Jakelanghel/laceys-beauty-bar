import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  z-index: 1;

  .container-nav-links {
    position: absolute;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--translucent-black);
    padding: 3rem 1rem;
    padding-bottom: 1rem;
    padding-top: 5rem;

    a {
      text-decoration: none;
    }

    .link {
      text-align: center;
      margin-bottom: 3.5rem;
    }

    .active {
      border-bottom: solid 2px var(--hot-pink);
    }

    .nav-link {
      color: var(--hot-pink);
      font-size: 1.5rem;
      font-weight: 500;
      text-transform: capitalize;
      letter-spacing: 4px;
      padding: 1.5rem;
    }

    .nav-link:hover {
      font-weight: 300;
    }

    .store-link-container {
      margin-top: 5rem;
    }

    .store-link {
      font-size: 1.25rem;
      font-weight: 700;
      text-transform: capitalize;
      text-align: center;
      background-color: var(--hot-pink);
      color: var(--black);
      border-radius: 25px;
      padding: 1rem 2.5rem;
    }
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
`;
