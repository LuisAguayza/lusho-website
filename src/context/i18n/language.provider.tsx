import { useStorage } from "hooks";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { LanguageContextProps, LanguageState, LocaleType } from ".";

type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

const I18nContext = createContext<LanguageContextProps>({} as LanguageContextProps);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {

  const [translations, setTranslations] = useState<Translations>({});

  const { setStorage, stateStorage: language } = useStorage<LanguageState>({
    key: 'language',
    payload: {
      locale: 'en'
    }
  });

  const loadTranslations = async (locale: LocaleType) => {
    try {
      const response = await fetch(`/src/context/i18n/${locale}.json`);
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

  // Función para traducir las claves
  const translate = (key: string, defaultMessage: string = ''): string => {
    const keys = key.split(".");
    let value: any = translations;

    // Recorrer las claves del objeto y buscar la traducción
    for (let k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        value = defaultMessage; // Mensaje por defecto si no se encuentra la clave
        break;
      }
    }

    return value;
  };

  return (
    <I18nContext.Provider value={{ translate, changeLanguage, currentLanguage: language.locale }}>
      {children}
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