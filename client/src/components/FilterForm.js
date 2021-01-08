import React, { useContext } from "react";
import { Form, FormField, Input } from "semantic-ui-react";
import contactContext from "../context/contacts/contactContext";

const FilterForm = () => {
	const { filterContacts, clearFilter } = useContext(contactContext);

	const handleChange = (e) => {
		const { value } = e;
		console.log(value);
		value  ? filterContacts(value) : clearFilter();
	};

	return (
		<Form style={{ marginBottom: "3rem" }}>
			<FormField width={12}>
				<Input
					icon="search"
					placeholder="Filter..."
					onChange={(e) => handleChange(e.target)}
				/>
			</FormField>
		</Form>
	);
};

export default FilterForm;
