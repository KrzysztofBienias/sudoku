import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
    }

    *, *::after, *::before {
        box-sizing: inherit;
        font-family: 'Montserrat', sans-serif;
    }
    /* Removed arrows from input[number] */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type='number'] {
        -moz-appearance: textfield;
    }

`;
