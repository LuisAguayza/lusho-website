import { DefaultTheme } from "styled-components";
const theme: Omit<DefaultTheme, 'color'> = {
  typography: {
    bodyFont: `'Poppins', sans-serif`,
    bigSize: '3.5rem',
    h1: '2.25rem',
    h2: '1.5rem',
    h3: '1.25rem',
    normal: '1rem',
    small: '0.875rem',
    smaller: '0.813rem',
    tiny: '0.625rem',
    responsive: {
      bigSize: '2.75rem',
      h1: '1.5rem',
      h2: '1.25rem',
      h3: '1rem',
      normal: '0.938rem',
      small: '0.813rem',
      smaller: '0.75rem',
    }
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semiBold: 600
  },
  spacing: {
    light: '1rem',
    medium: '1.5rem',
    max: '3rem'
  },
  zIndex: {
    tooltip: 10,
    fixed: 100,
    modal: 1000
  },
  breakpoints: {
    lg: '992px',
    md: '768px',
    sm: '576px',
    xs: '350px',
  }
}

export const LightTheme: DefaultTheme = {
  ...theme,
  color: {
    primary: '#fff',
    secondary: '',
    body: 'hsl(0, 0%, 98%)',
    text: 'hsl(0, 0%, 46%)',
    title: 'hsl(0, 0%, 20%)',
    titleAlternative: '#242424'
  },
}

export const DarkTheme: DefaultTheme = {
  ...theme,
  color: {
    primary: '#242424',
    secondary: '',
    body: 'hsl(0, 0%, 2%)',
    text: 'hsl(0, 0%, 96%)',
    title: 'hsl(0, 0%, 100%)',
    titleAlternative: 'hsl(0, 0%, 80%)'
  },
} 
