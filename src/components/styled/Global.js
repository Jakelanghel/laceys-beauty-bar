import { createGlobalStyle } from "styled-components";
import { images } from "../../constants/images";

const GlobalStyles = createGlobalStyle`


    :root {
        /* ORIGINAL COLORS */
        
        --white: #ffff;
        --off-white: #fdfbf7; 
        --black: #010101;
        --off-black: #424242;
        --translucent-black: hsl(0,0%,0%, .92);
        --grey: #6E675F;

        --pink: #e4a0b2;
        --white-pink: #FFE6F2;
        --hot-pink: #DB5ABA;
        --pastel-pink: rgb(248, 200, 220);

    }
    * {
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }

    html, body {
        height: 100%;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
        background-color: var(--white);
        /* background-color: rgba(250, 245, 241, 1); */
        color: var(--off-black);
    }

    h1,
    h2,
    h3,
    p {
        margin: 0;
        padding: 0;

    }

    h1, h2 {
        font-size: 1.75rem;
        color: var(--hot-pink);

    }

    h1 {
      
    }

    

    p {
        font-size: .95rem;
        line-height: 1.75rem;
        letter-spacing: 1px;
        color: var(--grey);
    }

    .padding-top {
        padding-top: 5.75em;
    }

    .container-app {
        height: 100vh;
        display: flex;
        flex-direction: column;

    }

    .filter-pink {
        filter: invert(61%) sepia(25%) saturate(5931%) hue-rotate(285deg) brightness(91%) contrast(87%)
    }

    .filter-white {
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(138deg) brightness(103%) contrast(102%);
    }

    

`;

export default GlobalStyles;
