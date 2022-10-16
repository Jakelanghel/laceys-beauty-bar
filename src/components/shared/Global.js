import { createGlobalStyle } from "styled-components";
import { images } from "../../constants/images";

const GlobalStyles = createGlobalStyle`


    :root {
        --white: #ffff;
        --off-white: #fdfbf7; 
        --black: #010101;
        --off-black: #424242;
        --translucent-black: hsl(0,0%,0%, .92);
        --grey: #6E675F;
        --txt-grey: #808080;
        --hot-pink: #ff69b4;
        --light-pink: rgba(219, 90, 186, .5);

    }
    * {
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 0;
    }

    html, body {
        height: 100%;
        overflow-x: hidden;
    }

    body {
        font-family: 'Poppins', sans-serif;
    }

    img {
        display: block;
    }

    h1, h2, h3 {
        color: var(--hot-pink);
    }

    p {
        font-size: .95rem;
        color: var(--txt-grey);
        font-weight: 500;
    }

    

    .box-shadow-1 {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -70px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -50px,
        rgba(15, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }

    .box-shadow-2 {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }


    .container-app {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        background-image: url(${images.flowerBg});

    }

    

    .filter-pink {
        filter: invert(59%) sepia(11%) saturate(6756%) hue-rotate(299deg) brightness(106%) contrast(101%);
    }
    .filter-white {
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(138deg) brightness(103%) contrast(102%);
    }

    

    

`;

export default GlobalStyles;
