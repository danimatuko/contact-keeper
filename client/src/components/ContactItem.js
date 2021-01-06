import React from "react";
import {
	Card,
	CardContent,
	Button,
	CardHeader,
	CardMeta
} from "semantic-ui-react";

const ContactItem = ({ contact }) => {
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
					<Button basic color="green">
						Edit
					</Button>
					<Button basic color="red">
						Delete
					</Button>
				</div>
			</CardContent>
		</Card>
	);
};

export default ContactItem;
