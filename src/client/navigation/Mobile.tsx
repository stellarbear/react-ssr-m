import React from "react";
import { AppBar, Button, Divider, Drawer, IconButton, Toolbar } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Clear, Menu } from "@material-ui/icons";
import { I18nContext } from "../components/I18nProvider";
import LanguagePicker from "../components/LanguagePicker";
import ElevationScroll from "./ElevationScroll";

const useStyles = makeStyles((_: Theme) =>
	createStyles({
		appBar: {
		},
		toolbar: {
			left: 4,
			position: "absolute",
			width: "94vw",
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center"
		},
		menu: {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center"
		},
		drawer: {
			width: "100%"
		},
		drawerContent: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "stretch"
		},
		drawerHeader: {
			display: "flex",
			margin: 8
		}
	})
);

interface IMobile {
	handleNavigation(path: string): void;
	rtl?: boolean;
}

const Mobile: React.FC<IMobile> = ({
	handleNavigation,
	rtl = false
}) => {
	const classes = useStyles({});
	const { t } = React.useContext(I18nContext);
	const [open, setOpen] = React.useState<boolean>(false);

	const closeDrawer = () => setOpen(false);
	const toggleDrawer = () => setOpen(!open);

	const navigate = (destination: string): void => {
		closeDrawer();
		handleNavigation(destination);
	};

	const renderNavigation = () => (
		<React.Fragment>
			<Button onClick={() => navigate('/home')}>{t.home.title}</Button>
			<Button onClick={() => navigate('/about')}>{t.about.title}</Button>
		</React.Fragment>
	);

	const MenuButton = () => {
		return (
			<IconButton
				color="inherit"
				aria-label="Open drawer"
				onClick={toggleDrawer}
			>
				<Menu />
			</IconButton>
		);
	}

	const renderAppBar = (): JSX.Element => {
		return (
			<ElevationScroll>
				<AppBar className={classes.appBar}>
					<Toolbar>
						<div className={classes.toolbar}>
							{MenuButton()}
							<div className={classes.menu}>
								<img height={32} width={32} src={`/logo.png`} />
							</div>
							<LanguagePicker />
						</div>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
		);
	};

	const renderDrawer = (): JSX.Element => (
		<Drawer
			variant="temporary"
			open={open}
			onClose={closeDrawer}
			anchor={rtl ? "right" : "left"}
			classes={{ paper: classes.drawer, }}
		>
			<div className={classes.drawerContent}>
				<div className={classes.drawerHeader}>
					<IconButton onClick={toggleDrawer}>
						<Clear />
					</IconButton>
				</div>
				<Divider />
				{renderNavigation()}
			</div>
		</Drawer>

	);

	return (
		<React.Fragment>
			{renderAppBar()}
			{renderDrawer()}
		</React.Fragment>
	)
}

export default Mobile;