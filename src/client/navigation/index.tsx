import { Hidden, Toolbar, } from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import { I18nContext } from "../components/I18nProvider";

interface INavigationProps extends RouteComponentProps {
	rtl?: boolean;
}

const NavigationWrapper: React.FC<INavigationProps> = ({
	rtl = false,
	children,
	history,
}) => {
	const { m } = React.useContext(I18nContext);

	const handleNavigation = (destination: string) =>
		history.push(`/${m.code}${destination}`);

	return (
		<React.Fragment>
			<Hidden smUp>
				<Mobile rtl={rtl} handleNavigation={handleNavigation} />
			</Hidden>
			<Hidden xsDown>
				<Desktop handleNavigation={handleNavigation} />
			</Hidden>
			<Toolbar />
			{children}
		</React.Fragment >
	);
}

export default
	withRouter(NavigationWrapper);

/*
<CssBaseline />
<Hidden smUp implementation="css" >
	<Mobile rtl={rtl} handleNavigation={handleNavigation} />
</Hidden>
<Hidden xsDown implementation="css" >
	<Desktop handleNavigation={handleNavigation} />
</Hidden>
<Toolbar />
*/