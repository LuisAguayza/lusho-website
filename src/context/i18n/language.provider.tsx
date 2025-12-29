import { useStorage } from "hooks";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { LanguageContextProps, LanguageState, LocaleType, TranslationVars } from ".";

type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

const I18nContext = createContext<LanguageContextProps>({} as LanguageContextProps);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {

  const [translations, setTranslations] = useState<Translations>();

  const { setStorage, stateStorage: language } = useStorage<LanguageState>({
    key: 'language',
    payload: {
      locale: 'en'
    }
  });

  const loadTranslations = async (locale: LocaleType) => {
    try {
      const response = await fetch(`/i18n/${locale}.json`);
      const data: Translations = await response.json();
      setTranslations(data);
    } catch (error) {
      console.error(error);
    }
  };

  const changeLanguage = () => setStorage({
    locale: language.locale === 'en'? 'es' : 'en'
  });

  useEffect(() => {
    loadTranslations(language.locale);
  }, [language.locale]);

  const translate = (
    key: string,
    vars: TranslationVars = {},
    defaultMessage: string = ''
  ): string => {
    const keys = key.split('.');
    let value: any = translations;

    for (let k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return defaultMessage || key;
      }
    }
    
    if (typeof value !== 'string') return defaultMessage || key;

    return value.replace(/\{\{(\w+)\}\}/g, (_, varName) => {
      return vars[varName] !== undefined ? String(vars[varName]) : '';
    });
  };

  return (
    <I18nContext.Provider value={{ translate, changeLanguage, currentLanguage: language.locale }}>
      {translations ? children : null}
    </I18nContext.Provider>
  );
};

export const useI18n = (): LanguageContextProps => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
};