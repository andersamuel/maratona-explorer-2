import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: content-box;
    font-family: 'Roboto', sans-serif;
  }
  
  body {
    width: 100vw;
    min-height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.background};
  }

  body.sc-h69tZM {
    transition: background-color 300ms ease-in-out;
  }
`;
