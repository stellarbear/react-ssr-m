import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Switch, withRouter } from "react-router";
import { RouteComponentProps } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	enter: {
		opacity: 0,
	},
	enterActive: {
		transition: "opacity .3s linear",
		opacity: 1,
	},
	exit: {
		transition: "opacity .2s linear",
		opacity: 1,
	},
	exitActive: {
		opacity: 0,
	},

	outer: {
		position: "relative",
		overflow: "none"
	},
	inner: {
		position: "absolute",
		display: "flex",
		left: 15,
		right: 15,
	}
})

const AnimatedSwitch: React.FC<RouteComponentProps> = ({
	location,
	children
}): JSX.Element => {
	const classes = useStyles({});

	return (
		<TransitionGroup component="main" className={classes.outer}>
			<CSSTransition key={location.pathname} timeout={300} classNames={{
				enter: classes.enter,
				enterActive: classes.enterActive,
				exit: classes.exit,
				exitActive: classes.exitActive,
			}} unmountOnExit>
				<section className={classes.inner}>
					<Switch location={location}>
						{children}
					</Switch>
				</section>
			</CSSTransition>
		</TransitionGroup>
	);
}

export default withRouter(AnimatedSwitch);