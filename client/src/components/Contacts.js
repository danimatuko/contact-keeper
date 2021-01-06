import React, { useContext } from "react";
import ContactItem from "./ContactItem";
import contactContext from "../context/contacts/contactContext";
const Contacts = () => {
	const { contacts } = useContext(contactContext);
	return (
		<div className="contacts" style={{ float: "right" }}>
			{contacts.map((contact) => (
				<ContactItem key={contact.id} contact={contact} />
			))}
		</div>
	);
};

export default Contacts;
