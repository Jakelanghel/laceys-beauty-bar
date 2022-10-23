import styled from "styled-components";

export const StyledDesktopMenu = styled.div`
  @media screen and (max-width: 950px) {
    display: none;
  }
  width: 100%;
  max-width: 1200px;
  padding: 0 3rem;
  margin: 0 auto;

  .container-nav-links {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .nav-link,
  .store-link {
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 4px;
    text-transform: capitalize;
  }

  @media screen and (min-width: 1100px) {
    .nav-link {
      font-size: 1rem;
    }
  }

  .nav-link {
    color: var(--hot-pink);
    text-decoration: none;
    padding: 0.75rem;
  }

  .nav-link:hover {
    font-weight: 700;
    cursor: pointer;
  }

  .active {
    color: var(--hot-pink);
    font-weight: 700;
    border-bottom: solid 1px var(--hot-pink);
    border-top: solid 1px var(--hot-pink);
  }
`;
