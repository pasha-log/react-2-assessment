import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewProductForm from './NewProductForm';

it('renders without crashing', function() {
	render(<NewProductForm />);
});

it('matches snapshot', function() {
	const { asFragment } = render(<NewProductForm />);
	expect(asFragment()).toMatchSnapshot();
});
