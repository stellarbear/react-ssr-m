import en from './locales/en';
import ru from './locales/ru';
import { ILocale } from './locale';

const fallback = en;
const languages = [en, ru]
const codes = languages.map(l => l.meta.code);
const baseUrl = codes.join("|");

const getLanguageFromUrl = (pathname: string): ILocale => {
	const matches = pathname.match(baseUrl)

	if (!matches || matches.length == 0) {
		return fallback;
	}

	const code = matches[0];
	const lang = languages.find(l => l.meta.code == code);
	if (!lang) {
		return fallback;
	}

	return lang;
}

const getLanguageFromCode = (code: string) => {
	if (!codes.includes(code)) {
		return fallback;
	}

	return languages.find(l => l.meta.code == code);
}

export { codes, languages, fallback, baseUrl, getLanguageFromUrl, getLanguageFromCode }

/*
const changeLanguageSafe = (newLanguage = fallback): void => {
	i18n.changeLanguage(newLanguage);

	//  I'm not proud of this way, but i need to somehow replace url without page reloading
	//  #tricky
	const newUrl = `/${newLanguage}${getAfterPath(window.location.pathname)}`;
	window.history.replaceState("", "", newUrl);
}
*/
