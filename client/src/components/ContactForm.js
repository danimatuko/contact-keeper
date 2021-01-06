import React, { useState, useContext } from "react";
import { Button, Form } from "semantic-ui-react";
import contactContext from "../context/contacts/contactContext";

const ContactForm = () => {
	const { addContact } = useContext(contactContext);
	const initialState = {
		name: "",
		email: "",
		phone: "",
		type: "personal"
	};

	const [contact, setContact] = useState(initialState);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setContact({ ...contact, [name]: value });
	};

	const handleSubmit = (e) => {
		console.log(contact);
		addContact(contact);
		setContact(initialState);
	};

	const { name, email, phone, type } = contact;

	return (
		<Form onSubmit={(e) => handleSubmit(e)}>
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
				<label>Type</label>

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
				Add Contact
			</Button>
		</Form>
	);
};

export default ContactForm;
