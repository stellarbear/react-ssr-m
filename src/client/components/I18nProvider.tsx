import React, { createContext, useEffect } from 'react';
import { fallback, getLanguageFromUrl, getLanguageFromCode, codes } from '../i18n/language';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { ILocale, ITranslation, IMetaData } from '../i18n/locale';

export interface II18nContext {
	m: IMetaData;
	t: ITranslation;
	changeLanguage: (language: string) => void;
}

const I18nContext = createContext<II18nContext>({} as II18nContext);

interface ILanguageWrapperProps extends RouteComponentProps {
	init?: ILocale;
}
const getAfterPath = (url: string): string => url.replace(new RegExp(`/(${codes.join('|')})`, "gm"), "");

const Provider: React.FC<ILanguageWrapperProps> = ({
	init = fallback,
	children,
	history
}): JSX.Element => {
	const [language, setLanguage] = React.useState(init);

	useEffect(() => {
		setLanguage(getLanguageFromUrl(history.location.pathname))
	}, [history.location.pathname])

	const changeLanguage = (code: string) => {
		const language = getLanguageFromCode(code);
		setLanguage(language);

		const path = getAfterPath(history.location.pathname)
		const url = `/${language.meta.code}${path}`;
		window.history.replaceState("", "", url);
	}

	return (
		<I18nContext.Provider value={{
			t: language.translation,
			m: language.meta,
			changeLanguage
		}}>
			<React.Fragment>
				{children}
			</React.Fragment>
		</I18nContext.Provider>
	);
}

const I18nProvider = withRouter(Provider);

export { I18nProvider, I18nContext }