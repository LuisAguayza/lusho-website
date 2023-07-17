import { createContext, FC, PropsWithChildren, useContext, useEffect, useReducer } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContextType, themeReducer, ThemeState } from ".";
import { useStorage } from "../hooks";

export const DARK_THEME_STATE = 'dark';
export const LIGHT_THEME_STATE = 'light';

export const ThemeContext = createContext({} as ThemeContextType);

export const CustomThemeProvider: FC<PropsWithChildren> = ({ children }) => {

  const isLightSystemTheme = window.matchMedia("(prefers-color-scheme: light)").matches;

  const { setStorage, stateStorage } = useStorage<ThemeState>({
    key: 'theme', 
    payload: isLightSystemTheme ? { mode: LIGHT_THEME_STATE } : { mode: DARK_THEME_STATE }
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
      <ThemeProvider theme={{ mode: state.mode }}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
};

export const useTheme = () => useContext(ThemeContext);