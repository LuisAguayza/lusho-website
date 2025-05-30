import { LocaleType } from "context/i18n";
import { LangIcon, LangLabel, LanguageWrapper } from ".";

export interface ILanguageButtonProps {
  currentLang: LocaleType;
}

export const LanguageToggle = ({ currentLang }: ILanguageButtonProps) => {
  return (
    <LanguageWrapper>
      <LangIcon className="uil uil-language" />
      <LangLabel>{currentLang === 'en' ? 'EN' : 'ES'}</LangLabel>
    </LanguageWrapper>
  )
};