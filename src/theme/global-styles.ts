import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    margin: 0;
    /* background-color: ${({ theme }) => theme.color.primary}; */
  }
  
  * {
    transition: color 0.3s linear, background-color 0.3s linear, border-color 0.3s linear;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  a {
    color: inherit;
    text-decoration: none;
    transition: none !important;
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

  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.color.primary}
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.card};
    border-radius: 5px;
    &:hover {
      background: ${({ theme }) => theme.color.title};
    }
  }
`;