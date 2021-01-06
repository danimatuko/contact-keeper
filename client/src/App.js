import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import ContactState from "./context/contacts/ContactState";
import { Container } from "semantic-ui-react";

const App = () => {
	return (
		<>
			<ContactState>
				<Navbar />
				<Container>
					<Route path="/" exact component={HomePage} />
					<Route path="/about" component={About} />
				</Container>
			</ContactState>
		</>
	);
};

export default App;
