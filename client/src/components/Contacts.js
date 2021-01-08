import React, { useContext } from "react";
import ContactItem from "./ContactItem";
import contactContext from "../context/contacts/contactContext";
const Contacts = () => {
	const { contacts, filterdContacts } = useContext(contactContext);
	if (filterdContacts) {
		return (
			<div className="contacts">
				{filterdContacts.map((contact) => (
					<ContactItem key={contact.id} contact={contact} />
				))}
			</div>
		);
	} else {
		return (
			<div className="contacts">
				{contacts.map((contact) => (
					<ContactItem key={contact.id} contact={contact} />
				))}
			</div>
		);
	}
};

export default Contacts;
