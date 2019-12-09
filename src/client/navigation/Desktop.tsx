import { AppBar, Toolbar, makeStyles, Theme, createStyles, Button, } from "@material-ui/core";
import React from "react";
import { I18nContext } from "../components/I18nProvider";
import LanguagePicker from "../components/LanguagePicker";

const useStyles = makeStyles((_: Theme) =>
	createStyles({
		appBar: {
			width: "100vw",
			left: 0
		},
		toolbar: {
			margin: 8,
			position: "relative",
			padding: "0px 48px",
			width: "92vw",
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		},
		right: {
			position: "absolute",
			right: 0,
		}
	})
);

interface IDesktop {
	handleNavigation(path: string): void;
}

const Desktop: React.FC<IDesktop> = ({
	handleNavigation
}) => {
	const classes = useStyles({});
	const { t } = React.useContext(I18nContext);
	const navigate = (destination: string) => handleNavigation(destination);

	const renderNavigation = () => (
		<React.Fragment>
			<Button onClick={() => navigate('/home')}>{t.home.title}</Button>
			<Button onClick={() => navigate('/about')}>{t.about.title}</Button>
		</React.Fragment>
	);
	//<img height={48} width={48} src={`/logo.png`} />

	const renderAppBar = (): JSX.Element => (
		<AppBar className={classes.appBar}>
			<Toolbar>
				<div className={classes.toolbar}>
					{renderNavigation()}
					<div className={classes.right}>
						<LanguagePicker />
					</div>
				</div>
			</Toolbar>
		</AppBar>
	);

	return (
		<React.Fragment>
			{renderAppBar()}
		</React.Fragment>
	);
}
export default Desktop;