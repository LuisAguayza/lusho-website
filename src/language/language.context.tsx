import { useStorage } from "hooks";
import { createContext, FC, PropsWithChildren, useCallback, useContext, useEffect, useReducer } from "react";
import { IntlProvider } from 'react-intl';
import { defaultLocale, LanguageContextType, LanguageState, localeMessages, reducer } from ".";

const LanguageContext = createContext({} as LanguageContextType);

const INITIAL_STATE: LanguageState = {
	locale: defaultLocale,
};

export const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {

	const { setStorage, stateStorage: language } = useStorage<LanguageState>({
    key: 'language',
    payload: INITIAL_STATE
  });
  
	const [state, dispatch] = useReducer(reducer, language);

	const changeLanguage = useCallback(() => {
		dispatch({ type: 'SWITCH_LANGUAGE' });
	}, []);

	useEffect(() => {
		setStorage(state);
	}, [state]);

	return (
		<LanguageContext.Provider
			value={{
				locale: state.locale,
				changeLanguage
			}}
		>
			<IntlProvider locale={state.locale} messages={localeMessages[state.locale]}>
				{children}
			</IntlProvider>
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => useContext(LanguageContext);
