import actions from "./actions";

const {
	ADD_CONTACT,
	UPDATE_CONTACT,
	SET_UPDATE_CONTACT,
	DELETE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER
} = actions;

const contactReducer = (state, action) => {
	switch (action.type) {
		case ADD_CONTACT:
			return {
				...state,
				contacts: [...state.contacts, action.payload]
			};
		case UPDATE_CONTACT:
			return {
				...state,
				contacts: state.contacts.map((contact) =>
					contact.id === action.payload.id ? action.payload : contact
				)
			};
		case SET_UPDATE_CONTACT:
			return {
				...state,
				contactToUpdate: action.payload
			};

		case DELETE_CONTACT:
			return {
				...state,
				contacts: state.contacts.filter(
					(contact) => contact.id !== action.payload && contact
				)
			};

		case FILTER_CONTACTS:
			return {
				...state,
				filterdContacts: state.contacts.filter((contact) => {
					const regex = new RegExp(`${action.payload}`, "gi");
					return contact.name.match(regex);
				})
			};
		case CLEAR_FILTER:
			return {
				...state,
				filterdContacts: null
			};

		default:
			return;
	}
};

export default contactReducer;
