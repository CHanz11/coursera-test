import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, rgba(30,30,46,1) 1%, rgba(31,82,107,1) 100%);
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;