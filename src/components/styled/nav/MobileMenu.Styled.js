import styled from "styled-components";

export const StyledMobileMenu = styled.div`
  .container-nav-links {
    position: absolute;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--translucent-black);
    padding-top: 5rem;
  }

  .link {
    text-align: center;
    margin-bottom: 3.5rem;
  }

  .nav-link {
    color: var(--hot-pink);
    font-size: 1.5rem;
    font-weight: 300;
    text-transform: capitalize;
    letter-spacing: 4px;
    padding: 1.5rem;
    text-decoration: none;
  }

  .store-link-container {
    margin-top: 5rem;
  }

  .store-link {
    font-size: 1.25rem;
    font-weight: 500;
    text-transform: capitalize;
    text-align: center;
    background-color: var(--hot-pink);
    color: var(--black);
    border-radius: 25px;
    padding: 1rem 2.5rem;
    text-decoration: none;
    color: var(--white);
  }

  .active {
    color: var(--hot-pink);
    font-weight: 700;
    border-bottom: solid 1px var(--hot-pink);
  }

  .nav-link .active:hover {
    font-weight: 700;
  }
`;
