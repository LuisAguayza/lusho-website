import 'styled-components';

declare module 'styled-components' {

  export type Direction = 'row' | 'column';

  const xs = 'xs' as const;
  const sm = 'sm' as const;
  const md = 'md' as const;
  const lg = 'lg' as const;
  const xl = 'xl' as const;
  
  export type Breakpoint = {
    [xs]: string;
    [sm]: string,
    [md]: string,
    [lg]: string,
    [xl]: string,
  }

  export type BreakpointBoolean = {
    [xs]?: boolean;
    [sm]?: boolean,
    [md]?: boolean,
    [lg]?: boolean,
    [xl]?: boolean,
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
      card: string;
      error: string;
      success: string;
      info: string;
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