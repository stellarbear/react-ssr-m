export interface IMetaData {
	asset: string;
	name: string;
	code: string;
}
export interface ITranslation {
	home: {
		title: string;
		button: string;
	};
	about: {
		title: string;
		version: number;
	};
}

export interface ILocale {
	meta: IMetaData;
	translation: ITranslation;
}