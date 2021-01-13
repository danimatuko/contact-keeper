import React, { useState, useContext } from "react";
import { Button, Form, Header } from "semantic-ui-react";
import authContext from "../context/auth/authContext";
import alertContext from "../context/alert/alertContext";
import * as Yup from "yup";
const RegisterForm = () => {
	const { register, error } = useContext(authContext);
	const { setAlert, removeAlert } = useContext(alertContext);

	const initialState = {
		name: "",
		email: "",
		password: "",
		password2: ""
	};
	const [newUser, setNewUser] = useState(initialState);

	const { name, email, password, password2 } = newUser;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewUser({ ...newUser, [name]: value });
	};

	const registerSchema = Yup.object().shape({
		name: Yup.string(),
		email: Yup.string()
			.email("Please enter a correct email address")
			.required("Email is required"),
		password: Yup.string()
			.min(6, "Password must contain at leats 6 characters")
			.required("Password is required"),
		password2: Yup.string().oneOf(
			[Yup.ref("password"), null],
			"Passwords must match"
		)
	});

	const validateRegister = (newUser) => {
		return registerSchema.validate(newUser, { abortEarly: false });
	};

	const handleSubmit = async (e) => {
		const newUser = {
			name,
			email,
			password,
			password2
		};

		try {
			await validateRegister(newUser);
			removeAlert();
			if (error) setAlert(error);
			await register(newUser);
		} catch (e) {
			console.log(e);
			removeAlert();
			setAlert(e.errors);
		}
	};

	return (
		<div style={{ width: "50%", margin: "auto" }}>
			<Header as="h1" size="huge" color="grey">
				Register
			</Header>

			<Form size="large" onSubmit={(e) => handleSubmit(e)}>
				<Form.Field>
					<label>Name</label>
					<input
						placeholder="Name"
						name="name"
						value={name}
						onChange={(e) => handleChange(e)}
					/>
				</Form.Field>
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
				<Form.Field>
					<label>Confirm Password</label>
					<input
						placeholder="Confirm Password"
						name="password2"
						value={password2}
						onChange={(e) => handleChange(e)}
					/>
				</Form.Field>
				<Button type="submit" color="linkedin">
					Register
				</Button>
			</Form>
		</div>
	);
};

export default RegisterForm;
