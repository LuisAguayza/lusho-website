import { locales } from ".";

export type LocaleType = typeof locales[number];

export type LocaleMessagesType<T = string> = {
  [key in LocaleType]?: Record<string, T>;
};

export type LanguageContextProps = {
  translate: (key: string, defaultMessage?: string) => string;
  changeLanguage: () => void;
  currentLanguage: LocaleType; 
};

export type LanguageState = {
  locale: LocaleType;
};