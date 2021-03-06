import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root{
        /* Colores: Declaracion de variables */
        --bitcoin-orange: #F7931A;
        --soft-orange: #FFE9D5;
        --secondary-blue: #1A9AF7;
        --soft-blue: #E7F5FF;
        --warm-black: #201E1C;
        --black: #282623;
        --grey: #BABABA;
        --off-white: #FAF8F7;
        --just-white:#FFFFFF;
    }
    *{
        box-sizing: border-box;
        margin: 0;
        padding:0;
    }

    html{
        font-size: 62.5%;
        font-family: 'DM Sans', sans-serif;

    }
`
export const Main = styled.main`
  width: 100%;
  height: auto;
  background-color: var(--off-white);
`
