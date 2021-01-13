import React, { useContext, useReducer } from "react";
import actions from "./actions";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";

const AlertState = (props) => {
	useContext(AlertContext);

	const { SET_ALERT, REMOVE_ALERT } = actions;

	const initialState = [];

	const [state, dispatch] = useReducer(alertReducer, initialState);

	const setAlert = (alert) => {
		dispatch({
			type: SET_ALERT,
			payload: alert
		});
	};
	const removeAlert = (alert) => {
		dispatch({
			type: REMOVE_ALERT
		});
	};

	return (
		<AlertContext.Provider
			value={{
				alerts: state,
				setAlert,
				removeAlert
			}}>
			{props.children}
		</AlertContext.Provider>
	);
};

export default AlertState;
