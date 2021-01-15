import actions from "./actions";
const {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	SET_AUTH_USER,
	REMOVE_AUTH_USER,
	LOGIN_SUCCESS,
	LOGIN_FAIL
} = actions;

const authReducer = (state, action) => {
	switch (action.type) {
		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:
			localStorage.setItem("token", action.payload.token);
			return {
				...state,
				isAuthenticated: true,
				user: action.payload.user,
				error: null
			};
		case REGISTER_FAIL:
		case LOGIN_FAIL:
			localStorage.removeItem("token");
			return {
				...state,
				isAuthenticated: false,
				user: null,
				error: action.payload
			};

		case SET_AUTH_USER:
			return {
				...state,
				isAuthenticated: true,
				user: action.payload
			};

		case REMOVE_AUTH_USER:
			return {
				...state,
				isAuthenticated: false,
				user: null
			};

		default:
			return state;
	}
};

export default authReducer;
