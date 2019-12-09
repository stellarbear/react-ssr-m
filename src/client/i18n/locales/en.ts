import { ILocale } from "../locale";

const en: ILocale = {
	meta: {
		asset: "eng.png",
		name: "English",
		code: "en",
	},
	translation: {
		home: {
			title: 'Home page',
			button: 'Just a button',
		},
		about: {
			title: 'SSR+React pure',
			version: 1,
		}
	}
}

export default en;