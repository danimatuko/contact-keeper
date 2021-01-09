import { Header, Menu, MenuHeader, MenuItem } from "semantic-ui-react";
import { Link } from "react-router-dom";

import React from "react";

const Navbar = () => {
	return (
		<Menu as="nav" color="blue" inverted> 
			<MenuItem>
				<i
					className="fas fa-id-card-alt fa-2x"
					style={{ marginRight: "1rem" }}
				/>
				<MenuHeader>
					<Header
						size="large"
						content="Contact-Keeper"
						style={{ color: "white" }}
					/>
				</MenuHeader>
			</MenuItem>

			<MenuItem as={Link} to="/" content="Home" />
			<MenuItem as={Link} to="/about" content="About" />
			<MenuItem as={Link} to="/register" content="Register" />
		</Menu>
	);
};
export default Navbar;
