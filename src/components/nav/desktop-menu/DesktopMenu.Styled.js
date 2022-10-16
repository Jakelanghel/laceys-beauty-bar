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
    font-size: 1rem;
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

  @media screen and (min-width: 1200px) {
    .nav-link,
    .store-link {
      font-size: 1.15rem;
      font-weight: 500;
      letter-spacing: 4px;
      text-transform: capitalize;
    }
  }
`;
