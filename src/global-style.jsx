import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        color: #F3F3F3;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        -webkit-tap-highlight-color: transparent;
    }

    body {
        min-width: 250px;
        overflow-x: hidden;
        background-color: #0A0A0A;
        transition: background-color 300ms, color 300ms;
    }

    p {
        font-size: 16px;
    }

    a {
        transition: 300ms;
        display: inline-flex;
        text-decoration: none;
    }

    button {
        border: none;
        display: block;
        cursor: pointer;
        background: none;
        transition: 300ms;

        &:focus {
            outline: none;
        }
    }
`;

export default GlobalStyle;