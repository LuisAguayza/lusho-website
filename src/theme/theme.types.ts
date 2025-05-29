import { ThemeStateEnum } from "theme";

export type ThemeContextType = {
  toggleTheme: () => void;
  isDarkTheme: boolean;
};

export type ThemeState = {
  mode: ThemeStateEnum;
};