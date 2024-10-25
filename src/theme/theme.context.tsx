import { createContext, FC, PropsWithChildren, useContext, useEffect, useReducer, useState } from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme, ThemeContextType, themeReducer, ThemeState } from ".";
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
  
  const [state, dispatch] = useReducer(themeReducer, stateStorage);

  const toggleTheme = () => dispatch({ type: 'SWITCH_THEME' });

  useEffect(() => {
    setStorage(state);
  }, [state]);

  return (
    <ThemeContext.Provider
      value={{
        mode: state.mode,
        toggleTheme
      }}
    >
      <ThemeProvider theme={state.mode === ThemeStateEnum.LIGHT ? LightTheme : DarkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
};

export const useTheme = () => useContext(ThemeContext);