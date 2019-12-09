import React from 'react';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
//import AnimatedSwitch from './components/AnimatedSwitch';
import en from './i18n/locales/en';
import { Redirect, Route, Switch } from 'react-router-dom';
import { baseUrl } from './i18n/language';
import NavigationWrapper from './navigation';
import About from './pages/About';


const prefix = `/:lng(${baseUrl})?`

const App: React.FC = () => {
	return (
		<NavigationWrapper>
			<Switch>
				<Route exact path={`${prefix}/home`} component={Home} />
				<Route exact path={`${prefix}/about`} component={About} />
				<Redirect from={`${prefix}/`} exact to={`/${en.meta.code}/home`} />
				<Route component={NotFound} />
			</Switch>
		</NavigationWrapper>
	)
}

export default App;