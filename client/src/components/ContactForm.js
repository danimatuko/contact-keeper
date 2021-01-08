import React, { useState, useContext, useEffect, Fragment } from "react";
import { Button, Form, Header } from "semantic-ui-react";
import contactContext from "../context/contacts/contactContext";

const ContactForm = () => {
	const {
		addContact,
		contactToUpdate,
		setUpdateContact,
		updateContact
	} = useContext(contactContext);

	const initialState = {
		name: "",
		email: "",
		phone: "",
		type: "personal"
	};

	const [contact, setContact] = useState(initialState);

	useEffect(() => {
		contactToUpdate ? setContact(contactToUpdate) : setContact(initialState);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [contactToUpdate]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setContact({ ...contact, [name]: value });
	};

	const handleSubmit = (e) => {
		// e.preventDefault();
		contactToUpdate ? updateContact(contact) : addContact(contact);
		clearAll();
	};

	const clearAll = () => {
		setContact(initialState);
		setUpdateContact(null);
	};

	const { name, email, phone, type } = contact;

	return (
		<Fragment>
			<Header as="h1" size="huge" color="grey">
				{contactToUpdate ? " Update Contact" : "Add Contact"}
			</Header>

			<Form size="large" onSubmit={(e) => handleSubmit(e)}>
				<Form.Field>
					<label>Name</label>
					<input
						placeholder="Name"
						name="name"
						value={name}
						onChange={(e) => handleChange(e)}
					/>
				</Form.Field>
				<Form.Field>
					<label>Email</label>
					<input
						placeholder="Email"
						name="email"
						value={email}
						onChange={(e) => handleChange(e)}
					/>
				</Form.Field>
				<Form.Field>
					<label>Phone</label>
					<input
						placeholder="Phone"
						name="phone"
						value={phone}
						onChange={(e) => handleChange(e)}
					/>
				</Form.Field>

				<Form.Group inline>
					<label>Type:</label>
					<Form.Field>
						<label>Personal</label>
						<input
							className="ui radio checkbox"
							type="radio"
							value="personal"
							name="type"
							checked={type === "personal"}
							onChange={(e) => handleChange(e)}
						/>
					</Form.Field>
					<Form.Field>
						<label>Professional</label>
						<input
							className="ui radio checkbox"
							type="radio"
							value="professional"
							name="type"
							checked={type === "professional"}
							onChange={(e) => handleChange(e)}
						/>
					</Form.Field>
				</Form.Group>

				<Button type="submit" color="linkedin">
					{contactToUpdate ? " Update Contact" : "Add Contact"}
				</Button>
				{contactToUpdate && (
					<Button type="button" color="grey" onClick={clearAll}>
						Cancel
					</Button>
				)}
			</Form>
		</Fragment>
	);
};

export default ContactForm;
