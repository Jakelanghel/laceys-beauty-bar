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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .link {
    text-align: center;
    flex: 1;
  }

  .nav-link {
    color: var(--hot-pink);
    font-size: 1.5rem;
    font-weight: 300;
    text-transform: capitalize;
    letter-spacing: 4px;
    padding: 1rem 1.5rem;
    text-decoration: none;
  }

  .store-link-container {
    margin-top: auto;
  }

  .store-link {
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: capitalize;
    text-align: center;
    letter-spacing: 1px;
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
    border-top: solid 1px var(--hot-pink);
  }

  .nav-link .active:hover {
    font-weight: 700;
  }
`;
