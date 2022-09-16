import styled from "styled-components";
import { images } from "../../constants/images";

export const StyledProfile = styled.div`
  margin: 5rem 0;

  .box-shadow-1 {
    box-shadow: none;
  }
  .box-shadow-2 {
    box-shadow: none;
  }

  .img-container {
    display: flex;
    justify-content: center;
    background-image: url(${images.pinkBg});
    background-size: 50%;
    padding: 3rem 0.5rem;
  }

  .profile-img {
    width: 90%;
    max-width: 355px;
    max-height: 400px;
    border-radius: 50%;
    object-fit: cover;
  }

  .card {
    max-width: 500px;
    padding: 2rem 1rem;
    margin: 2.5rem auto;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    h2 {
      letter-spacing: 1px;

      span {
        display: block;
      }
    }

    .margin-btm {
      margin-bottom: 1rem;
    }
  }

  @media screen and (min-width: 900px) {
    padding: 0 2rem;

    .box-shadow-1 {
      border-radius: 15px;

      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }

    .img-container {
      max-width: 550px;

      padding: 3rem;
      width: 47%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 15px;
    }

    .row {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .inverted-container {
      .card {
        order: 1;
      }

      .img-container {
        order: 2;
      }
    }

    .profile-img {
      width: 100%;
      max-height: 400px;
      min-height: 400px;
      max-width: 350px;
      object-fit: cover;
    }

    .card {
      width: 47%;
      max-width: 450px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      padding: 0;
      margin: 0;
      padding: 3rem 2rem;
      border-radius: 15px;
    }
  }

  @media screen and (min-width: 1200px) {
  }

  @media screen and (min-width: 1100px) {
    padding: 0 4rem;
  }
`;
