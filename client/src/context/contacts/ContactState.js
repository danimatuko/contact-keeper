import React, { useReducer, useContext } from "react";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import actions from "../actions";
import { v4 as uuid } from "uuid";
const ContactState = (props) => {
	const contactContext = useContext(ContactContext);

	const {
		ADD_CONTACT,
		UPDATE_CONTACT,
		SET_UPDATE_CONTACT,
		DELETE_CONTACT
	} = actions;

	const initialState = {
		contacts: [
			{
				id: 1,
				name: "Dani Matuko",
				email: "matuko305@gmail.com",
				phone: "050211346",
				type: "personal"
			},
			{
				id: 2,
				name: "Bilal Freeman",
				email: "bilal@gmail.com",
				phone: "050216896",
				type: "personal"
			},
			{
				id: 3,
				name: "Jane Smith",
				email: "jsmith@gmail.com",
				phone: "052136898",
				type: "professional"
			}
		],
		contactToUpdate: null
	};

	const [state, dispatch] = useReducer(contactReducer, initialState);

	const addContact = (contact) => {
		contact.id = uuid();
		dispatch({
			type: ADD_CONTACT,
			payload: contact
		});
	};
	const updateContact = (contact) => {
		dispatch({
			type: UPDATE_CONTACT,
			payload: contact
		});
	};

	const setUpdateContact = (contact) => {
		dispatch({
			type: SET_UPDATE_CONTACT,
			payload: contact
		});
	};
	const deleteContact = (id) => {
		console.log("deleteContact", id);
		dispatch({
			type: DELETE_CONTACT,
			payload: id
		});
	};

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				contactToUpdate: state.contactToUpdate,
				addContact,
				updateContact,
				setUpdateContact,
				deleteContact
			}}>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
