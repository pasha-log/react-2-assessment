import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';

function NavBar() {
	return (
		<div>
			<Navbar expand="md">
				<NavLink exact to="/react-2-assessment" className="navbar-brand">
					🍴Snack or Booze🍸
				</NavLink>

				<Nav className="ml-auto" navbar>
					<NavItem>
						<NavLink to="/snacks">🍔Snacks</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/drinks">🍹Drinks</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/new-product">🆕New Item</NavLink>
					</NavItem>
				</Nav>
			</Navbar>
		</div>
	);
}

export default NavBar;
