import { locales } from ".";
import { MessageFormatElement } from "@formatjs/icu-messageformat-parser";

export type LocaleType = typeof locales[number];

export type LocaleMessagesType = {
  [key in LocaleType]?: Record<string, string> | Record<string, MessageFormatElement[]>;
};

export type LocaleNamesType = {
  [key in LocaleType]: string;
};