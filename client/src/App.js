import { Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import { Container } from "semantic-ui-react";
import RegisterForm from "./components/RegisterForm";
import ContactState from "./context/contacts/ContactState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import Alert from "./components/Alert";
import React, { useContext } from "react";
import alertContext from "./context/alert/alertContext";

const App = () => {
	return (
		<AuthState>
			<ContactState>
				<BrowserRouter>
					<AlertState>
						<Navbar />
						<Container>
							<Alert />
							<Route path="/" exact component={HomePage} />
							<Route path="/about" component={About} />
							<Route path="/register" component={RegisterForm} />
						</Container>
					</AlertState>
				</BrowserRouter>
			</ContactState>
		</AuthState>
	);
};

export default App;
