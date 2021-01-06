import React from "react";
import { Grid, GridColumn, Header } from "semantic-ui-react";
import ContactForm from "../components/ContactForm";
import Contacts from "../components/Contacts";

const HomePage = () => {
	return (
		<Grid columns={2}>
			<GridColumn>
				<Header as="h1" size="huge" color="grey">Add Contact</Header>
				<ContactForm />
			</GridColumn>
			<GridColumn textAlign="center">
				<Contacts />
			</GridColumn>
		</Grid>
	);
};

export default HomePage;
