import { ThemeStateEnum } from "theme";

export type ThemeContextType = ThemeState & {
  toggleTheme: () => void;
};

export type ThemeState = {
  mode: ThemeStateEnum;
};