import { LocaleMessagesType } from ".";
import messagesEn from './en.json';
import messagesES from './es.json';

export const LOCALE_COOKIE = "locale";

export const defaultLocale = 'en' as const;

export const locales = ['en', 'es'] as const;

export const localeMessages: LocaleMessagesType = {
  en: messagesEn,
  es: messagesES,
};

