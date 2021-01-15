import React, { useContext, useEffect } from "react";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import ContactForm from "../components/ContactForm";
import Contacts from "../components/Contacts";
import FilterForm from "../components/FilterForm";
import authContext from "../context/auth/authContext";
const HomePage = () => {
	const { getLoggedInUser } = useContext(authContext);

	useEffect(() => {
		getLoggedInUser();
	}, []);

	return (
		<Grid columns={2}>
			<GridColumn>
				<ContactForm />
			</GridColumn>
			<GridColumn>
				<GridRow style={{ marginLeft: "100px" }}>
					<FilterForm />
					<Contacts />
				</GridRow>
			</GridColumn>
		</Grid>
	);
};

export default HomePage;
