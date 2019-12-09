import React from 'react';
import { renderToString } from "react-dom/server"
import App from '../client/App';
import { StaticRouter } from 'react-router-dom';
import { I18nProvider } from '../client/components/I18nProvider';
import { ThemeProvider, ServerStyleSheets } from '@material-ui/core';
import theme from '../client/theme';
import { getLanguageFromUrl } from '../client/i18n/language';

export default (location: string) => {
	const language = getLanguageFromUrl(location);
	const sheets = new ServerStyleSheets();
	const context = {}

	const content = renderToString(
		sheets.collect(
			<ThemeProvider theme={theme}>
				<StaticRouter context={context} location={location}>
					<I18nProvider init={language}>
						<App />
					</I18nProvider>
				</StaticRouter>
			</ThemeProvider>
		),
	);

	const lang = JSON.stringify(language);
	const css = sheets.toString();

	const html = `
	<html>
		<head>
        	<style id="jss-server-side">${css}</style>
			<script>
				window.i18nLanguage = JSON.parse('${lang}');
			</script>
		</head>
		<body>
			<div id="root">${content}</div>
			<script src="/bundle.js"></script>
		</body>
	</html>
  `;

	return html;
}