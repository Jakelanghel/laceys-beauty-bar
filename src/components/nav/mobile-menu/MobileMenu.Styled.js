import styled from "styled-components";

export const StyledMobileMenu = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  align-items: center;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: var(--translucent-black);
  padding-top: 5rem;
  z-index: 1;

  .link {
    text-align: center;
    flex: 1;
  }

  .nav-link {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.5rem;
    font-weight: 300;
    text-align: center;
    color: var(--hot-pink);
    text-decoration: none;
    text-transform: capitalize;
    letter-spacing: 4px;
    padding: 1rem 1.5rem;
  }

  .store-link-container {
    margin-top: auto;
  }

  .store-link {
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    text-transform: capitalize;
    letter-spacing: 1px;
    color: var(--white);

    background-color: var(--hot-pink);
    border-radius: 25px;
    padding: 1rem 2.5rem;
  }

  .active {
    font-weight: 700;
    color: var(--hot-pink);
    border-bottom: solid 1px var(--hot-pink);
  }

  @media screen and (min-width: 950px) {
    display: none;
  }
`;
