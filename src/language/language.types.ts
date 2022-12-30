import { locales } from ".";
import { MessageFormatElement } from "@formatjs/icu-messageformat-parser";

export type LocaleType = typeof locales[number];

export type LocaleMessagesType = {
  [key in LocaleType]?: Record<string, string> | Record<string, MessageFormatElement[]>;
};

export type LanguageContextType = {
  locale: LocaleType;
  changeLanguage: () => void;
};

export type LanguageState = {
  locale: LocaleType;
};