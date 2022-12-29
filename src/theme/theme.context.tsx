import { createContext, FC, PropsWithChildren, useCallback, useContext, useEffect, useReducer } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContextType, themeReducer, ThemeState } from ".";
import { useStorage } from "../hooks";

export const ThemeContext = createContext({} as ThemeContextType);

const INITIAL_THEME_STATE: ThemeState = {
  mode: 'light'
};

export const CustomThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  
  const { setStorage, stateStorage} = useStorage<ThemeState>('theme', INITIAL_THEME_STATE);
  const [state, dispatch] = useReducer(themeReducer, stateStorage);

  const toggleTheme = useCallback(
    () => {
      dispatch({ type: 'SWITCH_THEME' });
    },
    [],
  );
  
  console.log('theme')

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