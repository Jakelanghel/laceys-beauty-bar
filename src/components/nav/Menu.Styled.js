import styled from "styled-components";

export const StyledMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--translucent-black);
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 3;

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
  @media screen and (min-width: 900px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    .container-nav-links {
      min-width: 700px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-top: solid 2px var(--hot-pink);
      border-bottom: solid 2px var(--hot-pink);
      padding: 0.75rem 1.25rem;
    }

    .nav-link,
    .store-link {
      font-size: 0.85rem;
      font-weight: 500;
      letter-spacing: 4px;
      text-transform: capitalize;
    }

    .nav-link {
      color: var(--hot-pink);
      text-decoration: none;
      padding: 0.75rem;
    }

    .nav-link:hover {
      color: var(--hot-pink);
    }
  }

  @media screen and (min-width: 1200px) {
    .nav-link,
    .store-link {
      font-size: 1rem;
      font-weight: 500;
      letter-spacing: 4px;
      text-transform: capitalize;
    }
  }
`;
