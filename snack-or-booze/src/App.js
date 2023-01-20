import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Home';
import SnackOrBoozeApi from './Api';
import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom';
import Menu from './ProductMenu';
import Snack from './FoodItem';

function App() {
	const [ isLoading, setIsLoading ] = useState(true);
	const [ snacks, setSnacks ] = useState([]);
	const [ drinks, setDrinks ] = useState([]);

	useEffect(() => {
		async function getProducts() {
			let snacks = await SnackOrBoozeApi.getProducts('snacks');
			let drinks = await SnackOrBoozeApi.getProducts('drinks');
			setSnacks(snacks);
			setDrinks(drinks);
			setIsLoading(false);
		}
		getProducts();
	}, []);

	if (isLoading) {
		return <p>Loading &hellip;</p>;
	}

	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<main>
					<Switch>
						<Route exact path="/">
							<Home snacks={snacks} drinks={drinks} />
						</Route>
						<Route exact path="/Snacks">
							<Menu products={snacks} title="Snacks" />
						</Route>
						<Route path="/Snacks/:id">
							<Snack items={snacks} cantFind="/snacks" />
						</Route>
						<Route exact path="/Drinks">
							<Menu products={drinks} title="Drinks" />
						</Route>
						<Route path="/Drinks/:id">
							<Snack items={drinks} cantFind="/drinks" />
						</Route>
						<Route>
							<p>Hmmm. I can't seem to find what you want.</p>
						</Route>
					</Switch>
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
