import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  max-width: 700px;
  position: absolute;
  bottom: 0;
  padding: 0 1rem;
  .container-soc-links {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .soc-link {
    width: 50px;
    padding: 0.5rem 1rem;
  }

  .insta {
    width: 60px;
  }

  .fb {
    width: 49px;
  }

  .phone {
    width: 55px;
  }

  .loc {
    width: 52px;
  }
  @media screen and (min-width: 900px) {
    padding: 0 1rem;
    padding-top: 1rem;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;
