import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    margin: 0;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
    transition: all 0.2s linear;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  body,
  button,
  input,
  textarea {
    font-family: ${({ theme }) => theme.typography.bodyFont};
    font-size: ${({ theme }) => theme.typography.normal};
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  html {
    scroll-behavior: smoot;
  }
  
  a {
    text-decoration: none;
  }
`;