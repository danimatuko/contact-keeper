import actions from "./actions";
const { REGISTER_SUCCESS, REGISTER_FAIL } = actions;

const authReducer = (state, action) => {
	switch (action.type) {
		case REGISTER_SUCCESS:
			localStorage.setItem("token", action.payload.token);
			return {
				...state,
				isAuthenticated: true,
				user: action.payload.user,
				error: null
			};
		case REGISTER_FAIL:
			localStorage.removeItem("token");
			return {
				...state,
				isAuthenticated: false,
				user: null,
				error: action.payload
			};
		default:
			return state;
	}
};

export default authReducer;
