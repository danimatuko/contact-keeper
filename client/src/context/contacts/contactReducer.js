import actions from "../actions";

const { ADD_CONTACT } = actions;

const contactReducer = (state, action) => {
	switch (action.type) {
		case ADD_CONTACT:
			return {
				...state,
				contacts: [...state.contacts, action.payload]
			};

		default:
			return;
	}
};

export default contactReducer;
