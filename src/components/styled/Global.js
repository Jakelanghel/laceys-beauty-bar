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
    }

    body {
        
        font-family: 'Poppins', sans-serif;
        background-color: var(--white);
        /* background-color: rgba(250, 245, 241, 1); */
        color: var(--off-black);
    }

    img {
        display: block;
    }

    h1, h2 {
        font-size: 1.75rem;
        color: var(--hot-pink);

    }

    h1 {
        line-height: 2.25rem;
    }

    p {
        font-size: .85rem;
        line-height: 2rem;
        letter-spacing: 1px;
        color: var(--grey);
    }

    @media screen and (min-width: 1200px){
        p {
        font-size: 1rem;
    }
    }

    .container-app {
        min-height: 100vh;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }

    .active {
        color: var(--hot-pink);
        /* border-bottom: solid 2px var(--hot-pink); */
    }

    .filter-pink {
        filter: invert(61%) sepia(25%) saturate(5931%) hue-rotate(285deg) brightness(91%) contrast(87%)
    }

    .filter-white {
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(138deg) brightness(103%) contrast(102%);
    }

    

    

`;

export default GlobalStyles;
