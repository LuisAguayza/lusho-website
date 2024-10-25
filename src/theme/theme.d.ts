import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      title: string;
      titleAlternative: string;
      text: string;
      body: string;
    },
    typography: {
      bodyFont: string;
      bigSize: string;
      h1: string;
      h2: string;
      h3: string;
      normal: string;
      small: string;
      smaller: string;
      tiny: string;
      responsive: {
        bigSize: string,
        h1: string,
        h2: string,
        h3: string,
        normal: string,
        small: string,
        smaller: string,
      }
    }
    fontWeight: {
      normal: number,
      medium: number,
      semiBold: number,
    },
    spacing: {
      light: string,
      medium: string,
      max: string,
    },
    zIndex: {
      tooltip: number,
      fixed: number,
      modal: number
    },
    breakpoints: {
      lg: string,
      md: string,
      sm: string,
      xs: string,
    }
  }
}