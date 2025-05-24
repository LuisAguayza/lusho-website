import { locales } from ".";

export type LocaleType = typeof locales[number];

export type LocaleMessagesType = {
  [key in LocaleType]?: Record<string, string> | Record<string, any[]>;
};

export type LanguageContextType = {
  locale: LocaleType;
  changeLanguage: () => void;
};

export type LanguageState = {
  locale: LocaleType;
};