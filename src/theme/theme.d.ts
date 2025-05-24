import 'styled-components';

declare module 'styled-components' {

  export type Direction = 'row' | 'column';

  const xs = 'xs';
  const sm = 'sm';
  const md = 'md';
  const lg = 'lg';
  const xl = 'xl';
  
  export type Breakpoint = {
    [xs]: string;
    [sm]: string,
    [md]: string,
    [lg]: string,
    [xl]: string,
  }

  export type BreakpoinyKey = keyof Breakpoint;

  export type Responsive<T> = T | Partial<Record<BreakpoinyKey, T>>;
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
    spacing: Breakpoint,
    zIndex: {
      tooltip: number,
      fixed: number,
      modal: number
    },
    breakpoints: Breakpoint
  }
}