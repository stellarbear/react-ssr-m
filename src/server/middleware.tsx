import express from 'express';
import React from 'react';
import { renderToString } from "react-dom/server"
import App from '../client/App';
import { StaticRouterContext } from 'react-router';
import { StaticRouter } from 'react-router-dom';
import { I18nProvider } from '../client/components/I18nProvider';
import { ThemeProvider, ServerStyleSheets } from '@material-ui/core';

import markup from './markup';
import theme from '../client/theme';
import { getLanguageFromUrl } from '../client/i18n/language';

export default (req: express.Request, res: express.Response) => {
	const location = req.url;
	const lang = getLanguageFromUrl(location);
	const sheets = new ServerStyleSheets();
	const context: StaticRouterContext = {}

	const content = renderToString(
		sheets.collect(
			<ThemeProvider theme={theme}>
				<StaticRouter context={context} location={location}>
					<I18nProvider init={lang}>
						<App />
					</I18nProvider>
				</StaticRouter>
			</ThemeProvider>
		),
	);

	//	If react-router is redirecting, do it on the server side
	if (context.url) {
		res.redirect(301, context.url);
	} else {
		const css = sheets.toString();

		const html = markup({
			css,
			lang,
			content
		});

		res.send(html);
	}
};