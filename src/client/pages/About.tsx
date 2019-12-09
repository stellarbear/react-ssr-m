import React from "react";
import { I18nContext } from "../components/I18nProvider";
import { Typography } from "@material-ui/core";

const About: React.FC = () => {
	const { t } = React.useContext(I18nContext);

	return (
		<div>
			<Typography>
				{t.about.title}
			</Typography>

			<Typography>
				{t.about.version}
			</Typography>
		</div>
	)
}

export default About;