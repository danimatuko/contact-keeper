import actions from "./actions";
const { SET_ALERT, REMOVE_ALERT } = actions;

const alertReducer = (state, action) => {
	switch (action.type) {
		case SET_ALERT:
			return [...state, ...action.payload];
		case REMOVE_ALERT:
			return [];

		default:
			return state;
	}
};

export default alertReducer;
