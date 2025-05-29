import { createContext, FC, PropsWithChildren, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme, ThemeContextType, ThemeState } from ".";
import { useStorage } from "../hooks";

export enum ThemeStateEnum {
  DARK = 'dark',
  LIGHT = 'light'
}

export const ThemeContext = createContext({} as ThemeContextType);

export const CustomThemeProvider: FC<PropsWithChildren> = ({ children }) => {

  const isLightSystemTheme = window.matchMedia("(prefers-color-scheme: light)").matches;

  const { setStorage, stateStorage } = useStorage<ThemeState>({
    key: 'theme', 
    payload: isLightSystemTheme ? { mode: ThemeStateEnum.LIGHT } : { mode: ThemeStateEnum.DARK }
  });
  
  const toggleTheme = () => setStorage(
    stateStorage.mode === ThemeStateEnum.DARK
    ? { mode: ThemeStateEnum.LIGHT }
    : { mode: ThemeStateEnum.DARK });

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
        isDarkTheme: stateStorage.mode === ThemeStateEnum.DARK
      }}
    >
      <ThemeProvider
        theme={stateStorage.mode === ThemeStateEnum.LIGHT ? LightTheme : DarkTheme}
      >
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
};

export const useTheme = () => useContext(ThemeContext);