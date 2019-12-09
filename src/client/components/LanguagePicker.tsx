import React from 'react';
import { MenuItem, Select, Input } from '@material-ui/core';
import { I18nContext } from './I18nProvider';
import { getLanguageFromCode, languages } from '../i18n/language';
import { ILocale } from '../i18n/locale';

interface LanguagePickerProps {}

const LanguagePicker: React.FC<LanguagePickerProps> = (): JSX.Element => {
	const { m, changeLanguage } = React.useContext(I18nContext);

	const onLanguageChange = (code: string) => {
		changeLanguage(code)
	}

	return (
		<Select
			value={m.code}
			onChange={({ target: { value } }, child) => onLanguageChange(value as string)}
			input={<Input name="lang" />}
		>
			{languages.map((language: ILocale): JSX.Element =>
				<MenuItem key={language.meta.code} value={language.meta.code}>
					{language.meta.name}
				</MenuItem>
			)}
		</Select>
	);
}

export default LanguagePicker;