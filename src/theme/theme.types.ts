import { DARK_THEME_STATE, LIGHT_THEME_STATE } from "theme";

export type ThemeContextType = ThemeState & {
  toggleTheme: () => void;
};

export type ThemeState = {
  mode: typeof DARK_THEME_STATE | typeof LIGHT_THEME_STATE;
};