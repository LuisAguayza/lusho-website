import { createGlobalStyle } from "styled-components";
import { styles } from './theme.styles';
import * as config from './theme.config';

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
    font-family: ${styles.typography.bodyFont};
    font-size: ${styles.typography.normal};
  }

  body: {
    background-color: ${config.bodyColor};
    color: ${config.textColor}
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