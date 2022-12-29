import { useStorage } from "hooks";
import { createContext, FC, PropsWithChildren, useCallback, useContext, useMemo, useReducer } from "react";
import { IntlProvider } from 'react-intl';
import { StorageConfigType } from "types";
import { defaultLocale, LanguageContextType, LanguageState, localeMessages, LocaleType, LOCALE_COOKIE, reducer } from ".";
import { setCookie } from "../utils";

const LanguageContext = createContext({} as LanguageContextType);

const INITIAL_STATE: LanguageState = {
  locale: defaultLocale,
};

export const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  console.log(state)

  const changeLanguage = useCallback(
    () => {
      dispatch({ type: 'SWITCH_LANGUAGE' });
      document.documentElement.lang = state.locale;
      setCookie(LOCALE_COOKIE, state.locale);
    },
    [],
  );

  const rehydrateLocalState = useCallback(
    (payload: LanguageState) => {
      dispatch({ type: 'REHYDRATE', payload });
    },
    [],
  );

  const config = useMemo<StorageConfigType<LanguageState>>(() => ({
    key: 'languaje',
    version: 1,
    migrate: (state) => ({...state})
  }), []);

  useStorage({ state, setState: rehydrateLocalState, config });

  return (
    <LanguageContext.Provider
      value={{
        locale: state.locale,
        changeLanguage
      }}
    >
      <IntlProvider locale={state.locale} messages={localeMessages[state.locale]}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
