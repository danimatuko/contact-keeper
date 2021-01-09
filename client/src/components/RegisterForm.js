import React, { useState } from "react";
import { Button, Form, Header } from "semantic-ui-react";
import axios from "axios";

const RegisterForm = () => {
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

	const registerUser = async (newUser) => {
		try {
			const response = await axios.post("api/users", newUser);
			console.log(response);
		} catch (e) {
			console.log(e.message);
		}
	};

	const handleSubmit = (e) => {
		const newUser = {
			name,
			email,
			password
		};
		registerUser(newUser);
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
