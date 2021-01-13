import React, { useContext } from "react";
import { Message } from "semantic-ui-react";
import AlertContext from "../context/alert/alertContext";

const Alert = () => {
	const alertContext = useContext(AlertContext);
	const { alerts } = alertContext;
	return (
		alerts.length > 0 && (
			<Message color="red">
				<Message.Header>Please correct the following errors</Message.Header>
				<Message.List>
					{alerts.map((alert) => (
						<Message.Item>{alert}</Message.Item>
					))}
				</Message.List>
			</Message>
		)
	);
};

export default Alert;
