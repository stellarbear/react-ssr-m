import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { I18nProvider } from './components/I18nProvider';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';

const Main: React.FC = () => {
	React.useEffect(() => {
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	const language = (window as any).i18nLanguage;
	console.log(language)

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<I18nProvider init={language}>
					<App />
				</I18nProvider>
			</BrowserRouter>
		</ThemeProvider>
	);
}

ReactDOM.hydrate(
	<Main />,
	document.querySelector('#root')
);