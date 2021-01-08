import React, { useReducer, useContext } from "react";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import actions from "../actions";
import { v4 as uuid } from "uuid";

const ContactState = (props) => {
	useContext(ContactContext);

	const {
		ADD_CONTACT,
		UPDATE_CONTACT,
		SET_UPDATE_CONTACT,
		DELETE_CONTACT,
		FILTER_CONTACTS,
		CLEAR_FILTER
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
		contactToUpdate: null,
		filterdContacts: null
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
		dispatch({
			type: DELETE_CONTACT,
			payload: id
		});
	};

	const filterContacts = (text) => {
		dispatch({
			type: FILTER_CONTACTS,
			payload: text
		});
	};
	const clearFilter = (text) => {
		dispatch({
			type: CLEAR_FILTER
		});
	};

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				contactToUpdate: state.contactToUpdate,
				filterdContacts: state.filterdContacts,
				addContact,
				updateContact,
				setUpdateContact,
				deleteContact,
				filterContacts,
				clearFilter
			}}>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
