
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    background-color: #121212;
    color: #f0f0f0;
    font-family: 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
