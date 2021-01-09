import React, { useContext, useReducer } from "react";
import actions from "./actions";
import AuthContext from "./authContext";
import authReducer from "./authReducer";

const AuthState = (props) => {
	useContext(AuthContext);

	const { REGISTER_SUCCESS, REGISTER_FAIL } = actions;

	const initialState = {
		isAuthenticated: false,
		user: null,
		error: null
	};

	const [state, dispatch] = useReducer(authReducer, initialState);

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated: state.isAuthenticated,
				user: state.user,
				error: state.error
			}}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
