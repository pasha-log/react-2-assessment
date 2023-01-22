import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Menu from './ProductMenu';
import Product from './ProductItem';
import NewProductForm from './NewProductForm';
import SnackOrBoozeApi from './Api';

const Routes = () => {
	const [ isLoading, setIsLoading ] = useState(true);
	const [ snacks, setSnacks ] = useState([]);
	const [ drinks, setDrinks ] = useState([]);

	useEffect(
		() => {
			async function getProducts() {
				let snacks = await SnackOrBoozeApi.getProducts('snacks');
				let drinks = await SnackOrBoozeApi.getProducts('drinks');
				setSnacks(snacks);
				setDrinks(drinks);
				setIsLoading(false);
			}
			getProducts();
		},
		[ snacks, drinks ]
	);

	const addProduct = (json) => {
		async function createProduct() {
			await SnackOrBoozeApi.createProduct(json);
		}
		createProduct();
	};

	if (isLoading) {
		return <p>Loading &hellip;</p>;
	}

	return (
		<Switch>
			<Route exact path="/">
				<Home snacks={snacks} drinks={drinks} />
			</Route>
			<Route exact path="/Snacks">
				<Menu products={snacks} title="Snacks" />
			</Route>
			<Route path="/Snacks/:id">
				<Product items={snacks} cantFind="/snacks" />
			</Route>
			<Route exact path="/Drinks">
				<Menu products={drinks} title="Drinks" />
			</Route>
			<Route path="/Drinks/:id">
				<Product items={drinks} cantFind="/drinks" />
			</Route>
			<Route path="/new-product">
				<NewProductForm addProduct={addProduct} />
			</Route>
			<Route>
				<p className="Error">Hmmm. I can't seem to find what you want.</p>
			</Route>
		</Switch>
	);
};

export default Routes;
