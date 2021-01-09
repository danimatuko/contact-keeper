import { Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import { Container } from "semantic-ui-react";
import RegisterForm from "./components/RegisterForm";
import ContactState from "./context/contacts/ContactState";
import AuthState from "./context/auth/AuthState";

const App = () => {
	return (
		<AuthState>
			<ContactState>
				<BrowserRouter>
					<Navbar />
					<Container>
						<Route path="/" exact component={HomePage} />
						<Route path="/about" component={About} />
						<Route path="/register" component={RegisterForm} />
					</Container>
				</BrowserRouter>
			</ContactState>
		</AuthState>
	);
};

export default App;
