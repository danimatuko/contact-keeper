import React, { useContext } from "react";
import {
	Card,
	CardContent,
	Button,
	CardHeader,
	CardMeta
} from "semantic-ui-react";

import contactContext from "../context/contacts/contactContext";

const ContactItem = ({ contact }) => {
	const { deleteContact, updateContact, setUpdateContact } = useContext(
		contactContext
	);

	return (
		<Card>
			<CardContent>
				<CardHeader>{contact.name}</CardHeader>
				<CardMeta className="contact-type">{contact.type}</CardMeta>
				<Card.Description>
					<div className="email">
						<i className="fas fa-envelope" />
						{contact.email}
					</div>
					<div>
						<i className="fas fa-phone" />
						{contact.phone}
					</div>
				</Card.Description>
			</CardContent>
			<CardContent extra>
				<div className="ui two buttons">
					<Button
						basic
						color="green"
						onClick={() => {
							updateContact(contact);
							setUpdateContact(contact);
						}}>
						Edit
					</Button>
					<Button basic color="red" onClick={() => deleteContact(contact.id)}>
						Delete
					</Button>
				</div>
			</CardContent>
		</Card>
	);
};

export default ContactItem;
