import { createGlobalStyle } from "styled-components";


// title: `${config.titleColor}`,
//     titleAlternative: `${config.titleAlternativeColor}`,
//     text: `${config.textColor}`,
//     body: `${config.bodyColor}`,
//     container: `${config.containerColor}`
export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smoot;
  }

  body,
  button,
  input,
  textarea {
    font-family: ${({ theme }) => theme.typography.bodyFont};
    font-size: ${({ theme }) => theme.typography.normal};
  }

  body: {
    background-color: ${({ theme }) => theme.color.body};
    color: ${({ theme }) => theme.color.text}
  }

  a {
    text-decoration: none;
  }

  button: {
    cursor: pointer;
    border: none;
    outline: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;