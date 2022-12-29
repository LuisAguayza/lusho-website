export type ThemeContextType = ThemeState & {
  toggleTheme: () => void;
};

export type ThemeState = {
  mode: 'dark' | 'light';
};