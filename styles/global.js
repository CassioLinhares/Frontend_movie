import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 62.5%;
    }

    body{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.WHITE};

        outline: none;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    body,
    input,
    button,
    textarea{
        font-family: 'Roboto Slab', serif;
        font-size: 1.6rem;
    }

    a{
        text-decoration: none;
    }

    a,
    button{
        cursor: pointer;
        transition: 0.2s;
    }

    a:hover,
    button:hover{
        filter: brightness(0.9);
    }

    //SCROLL
    &::-webkit-scrollbar {
        width: .8rem;
    }
    /* Scroll bar background color */
    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
    /* Slider color (thumb) */
    &::-webkit-scrollbar-thumb {
        background-color: ${ ({theme}) => theme.COLORS.ROSE };  
        border-radius: 8px;
    }
`;