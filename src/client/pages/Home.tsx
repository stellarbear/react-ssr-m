import React from "react";
import { I18nContext } from "../components/I18nProvider";
import { Typography, Button } from "@material-ui/core";

const Home: React.FC = () => {
	const { t } = React.useContext(I18nContext);

	return (
		<div>
			<Typography>
				{t.home.title}
			</Typography>
			<Button>{t.home.button}</Button>
		</div>
	)
}

export default Home;