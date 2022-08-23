import styled from "styled-components";

export const StyledDesktopMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    display: none;
  }

  .container-nav-links {
    display: flex;
    justify-content: space-between;
    border-top: solid 2px var(--light-pink);
    border-bottom: solid 2px var(--light-pink);
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
    color: var(--light-pink);
    text-decoration: none;
    padding: 0.75rem;
  }

  .nav-link:hover {
    color: var(--hot-pink);
  }
`;
