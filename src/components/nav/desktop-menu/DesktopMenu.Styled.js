import styled from "styled-components";

export const StyledDesktopMenu = styled.div`
  @media screen and (max-width: 900px) {
    display: none;
  }
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
