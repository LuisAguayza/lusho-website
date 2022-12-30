import { createContext, FC, PropsWithChildren, useCallback, useContext, useEffect, useReducer } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContextType, themeReducer, ThemeState } from ".";
import { useStorage } from "../hooks";

export const ThemeContext = createContext({} as ThemeContextType);

export const CustomThemeProvider: FC<PropsWithChildren> = ({ children }) => {

  const isLightSystemTheme = window.matchMedia("(prefers-color-scheme: light)").matches;

  const { setStorage, stateStorage } = useStorage<ThemeState>({
    key: 'theme', 
    payload: isLightSystemTheme ? { mode: 'light' } : { mode: 'dark' }
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