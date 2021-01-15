import React, { useState, useContext, Fragment, useEffect } from "react";
import { Button, Form, Header } from "semantic-ui-react";
import authContext from "../context/auth/authContext";
import alertContext from "../context/alert/alertContext";
import * as Yup from "yup";

const LoginForm = (props) => {
	const { login, error, isAuthenticated } = useContext(authContext);

	const { setAlert, removeAlert } = useContext(alertContext);
	const initialState = {
		email: "",
		password: ""
	};

	useEffect(() => {
		if (isAuthenticated) props.history.push("/");
	}, [isAuthenticated, props.history]);

	const [user, setUser] = useState(initialState);

	const loginSchema = Yup.object().shape({
		email: Yup.string().required("Email is required"),
		password: Yup.string().required("Password is required")
	});

	const validateLogin = (user) => {
		return loginSchema.validate(user, { abortEarly: false });
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	const handleSubmit = async (e) => {
		const user = {
			email,
			password
		};

		try {
			removeAlert();
			await validateLogin(user);
			if (error) setAlert(error);
			await login(user);
		} catch (e) {
			console.log(e);
			removeAlert();
			setAlert(e.errors);
		}
		clearAll();
	};

	const clearAll = () => {
		setUser(initialState);
	};

	const { email, password } = user;

	return (
		<Fragment>
			<Header as="h1" size="huge" color="grey" textAlign="center">
				Login
			</Header>

			<Form
				size="tiny"
				onSubmit={(e) => handleSubmit(e)}
				style={{ width: "30%", margin: "auto" }}>
				<Form.Field>
					<label>Email</label>
					<input
						placeholder="Email"
						name="email"
						value={email}
						onChange={(e) => handleChange(e)}
					/>
				</Form.Field>
				<Form.Field>
					<label>Password</label>
					<input
						placeholder="Password"
						name="password"
						value={password}
						onChange={(e) => handleChange(e)}
					/>
				</Form.Field>

				<Button
					type="submit"
					color="linkedin"
					style={{ display: "block", margin: "auto" }}>
					Login
				</Button>
			</Form>
		</Fragment>
	);
};

export default LoginForm;
