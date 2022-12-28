import { createContext, PropsWithChildren, useContext, useEffect, useReducer } from "react";
import { defaultLocale, getInitialLocale, LanguageState, localeMessages, LocaleType, LOCALE_COOKIE, reducer } from ".";
import { IntlProvider } from 'react-intl';
import { setCookie } from "../utils";

export type LanguageContextType = {
  locale: LocaleType;
  changeLanguage: (newLocale: LocaleType) => void;
}

const LanguageContext = createContext({} as LanguageContextType);

const INITIAL_STATE: LanguageState = {
  locale: defaultLocale,
};

export type LanguageProviderProps = {}

export const LanguageProvider = ({ children }: PropsWithChildren<LanguageProviderProps>) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { locale } = state;

  const changeLanguage = (newLocale: LocaleType): void => {
    dispatch({ type: 'SET_LANGUAGE', payload: newLocale });
    document.documentElement.lang = newLocale;
    setCookie(LOCALE_COOKIE, newLocale);
  };

  useEffect(() => {
    const initialLocale = getInitialLocale();
    changeLanguage(initialLocale);
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        locale: locale,
        changeLanguage,
      }}
    >
      <IntlProvider locale={locale} messages={localeMessages[locale]}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
