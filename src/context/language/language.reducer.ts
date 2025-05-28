import { LanguageState } from ".";

export type LanguageAction =
  | { type: 'REHYDRATE', payload: LanguageState }
  | { type: 'SWITCH_LANGUAGE' }
  ;

export const reducer = (state: LanguageState, action: LanguageAction): LanguageState => {
  switch (action.type) {
    case "REHYDRATE":
      return {  ...state, ...action.payload };

    case 'SWITCH_LANGUAGE':
      return { ...state, locale: state.locale === 'en' ? 'es' : 'en' };

    default:
      throw new Error(`Unknown action: ${JSON.stringify(action)}`);
  }
};
