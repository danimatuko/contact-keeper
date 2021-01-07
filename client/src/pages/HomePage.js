import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import ContactForm from "../components/ContactForm";
import Contacts from "../components/Contacts";

const HomePage = () => {
	return (
		<Grid columns={2}>
			<GridColumn>
				<ContactForm />
			</GridColumn>
			<GridColumn textAlign="center">
				<Contacts />
			</GridColumn>
		</Grid>
	);
};

export default HomePage;
