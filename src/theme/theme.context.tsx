import { createContext, FC, PropsWithChildren, useCallback, useContext, useMemo, useReducer } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeState, ThemeContextType, themeReducer } from ".";
import { useStorage } from "../hooks";
import { StorageConfigType } from "../types";

export const ThemeContext = createContext({} as ThemeContextType);

const INITIAL_THEME_STATE: ThemeState = {
  mode: 'dark'
};

export const CustomThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  
  const [state, dispatch] = useReducer(themeReducer, INITIAL_THEME_STATE);

  const toggleTheme = useCallback(
    () => {
      dispatch({ type: 'SWITCH_THEME' });
    },
    [],
  );
  
  console.log('theme')
  const rehydrateLocalState = useCallback(
    (payload: ThemeState) => {
      dispatch({ type: 'REHYDRATE', payload });
    },
    [],
  );

  const config = useMemo<StorageConfigType<ThemeState>>(() => ({
    key: 'theme',
    version: 1,
    migrate: (state) => ({...state})
  }), []);

  useStorage({ state, setState: rehydrateLocalState, config });

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