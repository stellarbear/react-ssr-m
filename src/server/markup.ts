import { ILocale } from "../client/i18n/locale";

interface IMarkup {
	css: string;
	lang: ILocale;
	content: string;
}

export default ({
	css,
	lang,
	content
}: IMarkup) => `
	<!DOCTYPE html>
	<html lang=${lang.meta.code}>
		<head>
        	<style id="jss-server-side">${css}</style>
			<script>
				window.i18nLanguage = JSON.parse('${JSON.stringify(lang)}');
			</script>
		</head>
		<body>
			<div id="root">${content}</div>
			<script async src="/bundle.js"></script>
		</body>
	</html>
`;