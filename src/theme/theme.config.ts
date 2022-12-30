import theme from 'styled-theming';

export const containerColor: theme.ThemeSet = theme('mode', {
  light: '#fff',
  dark: 'hsl(0, 0%, 14%)',
});

export const titleColor: theme.ThemeSet = theme('mode', {
  light: 'hsl(0, 0%, 20%)',
  dark: 'hsl(0, 0%, 100%)',
});

export const titleAlternativeColor: theme.ThemeSet = theme('mode', {
  light: 'hsl(0, 0%, 0%)',
  dark: 'hsl(0, 0%, 80%)',
});

export const textColor: theme.ThemeSet = theme('mode', {
  light: 'hsl(0, 0%, 46%)',
  dark: 'hsl(0, 0%, 96%)',
});

export const bodyColor: theme.ThemeSet = theme('mode', {
  light: 'hsl(0, 0%, 98%)',
  dark: 'hsl(0, 0%, 2%)',
});
