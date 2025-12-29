import { locales } from ".";

export type LocaleType = typeof locales[number];

export type TranslationVars = Record<string, string | number | Date>;

export type LanguageContextProps = {
  translate: (key: string, vars?: TranslationVars, defaultMessage?: string) => string;
  changeLanguage: () => void;
  currentLanguage: LocaleType;
};

export type LanguageState = {
  locale: LocaleType;
};