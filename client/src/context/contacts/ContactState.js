import React, { useReducer } from "react";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import types from "../types";

const ContactState = (props) => {
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
		]
	};

	const [state, dispatch] = useReducer(contactReducer, initialState);

	return (
		<ContactContext.Provider value={{ contacts: state.contacts }}>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
