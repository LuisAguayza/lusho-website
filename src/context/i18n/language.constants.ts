import { LocaleMessagesType, LocaleType } from ".";
import en from './en.json';
import es from './es.json';

export const locales = ['en', 'es'] as const;

export const defaultLocale: LocaleType = 'en' as const;

export const localeMessages: LocaleMessagesType<any> = {
  en,
  es,
};

