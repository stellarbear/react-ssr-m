import { ILocale } from "../locale";

const ru: ILocale = {
	meta: {
		asset: "rus.png",
		name: "Русский",
		code: "ru",
	},
	translation: {
		home: {
			title: 'Главная страница',
			button: 'Просто кнопка',
		},
		about: {
			title: 'SSR+React без примесей',
			version: 1,
		}
	}
}

export default ru;