import React, { useContext, useReducer } from "react";
import actions from "./actions";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";

const AuthState = (props) => {
	useContext(AuthContext);

	const {
		REGISTER_SUCCESS,
		REGISTER_FAIL,
		SET_AUTH_USER,
		REMOVE_AUTH_USER,
		LOGIN_SUCCESS,
		LOGIN_FAIL
	} = actions;

	const initialState = {
		isAuthenticated: false,
		user: null,
		error: null,
		token: localStorage.getItem("token")
	};

	const [state, dispatch] = useReducer(authReducer, initialState);

	const register = async (newUser) => {
		try {
			const response = await axios.post("api/users", newUser);
			dispatch({
				type: REGISTER_SUCCESS,
				payload: {
					token: response.data.token,
					user: {
						name: newUser.name,
						email: newUser.email
					}
				}
			});
		} catch (e) {
			dispatch({
				type: REGISTER_FAIL,
				payload: e.response.data.msg
			});
		}
	};
	const login = async (newUser) => {
		try {
			const response = await axios.post("api/auth", newUser);
			dispatch({
				type: LOGIN_SUCCESS,
				payload: {
					token: response.data.token,
					user: {
						name: newUser.name,
						email: newUser.email
					}
				}
			});
		} catch (e) {
			dispatch({
				type: LOGIN_FAIL,
				payload: e.response.data.msg
			});
		}
	};

	const getLoggedInUser = async (token) => {
		if (localStorage.token) setAuthToken(localStorage.token);
		try {
			const response = await axios.get("api/auth");
			dispatch({
				type: "SET_AUTH_USER",
				payload: response.data
			});
		} catch (err) {
			dispatch({
				type: "REMOVE_AUTH_USER"
			});
		}
	};

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated: state.isAuthenticated,
				user: state.user,
				error: state.error,
				register,
				getLoggedInUser,
				login
			}}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
