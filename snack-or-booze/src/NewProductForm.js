import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Card, CardBody, CardTitle } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import './NewProductForm.css';

const NewProductForm = ({ addProduct }) => {
	let history = useHistory();
	const INITIAL_STATE = {
		productType: '',
		name: '',
		description: '',
		recipe: '',
		serve: ''
	};
	const [ formData, setFormData ] = useState(INITIAL_STATE);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({
			...formData,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addProduct({ ...formData });
		setFormData(INITIAL_STATE);
		history.push('/react-2-assessment');
	};
	return (
		<section className="col-md-4">
			<Card>
				<CardBody>
					<CardTitle className="font-weight-bold text-center">New Menu Item Form</CardTitle>
					<Form onSubmit={handleSubmit}>
						<Label>Product Type</Label>
						<FormGroup check>
							<Input name="productType" type="radio" value="snacks" onChange={handleChange} />{' '}
							<Label check>Snack</Label>
						</FormGroup>
						<FormGroup check>
							<Input name="productType" type="radio" value="drinks" onChange={handleChange} />{' '}
							<Label check>Drink</Label>
						</FormGroup>
						<FormGroup>
							<Label for="name">Product name</Label>
							<Input
								id="name"
								name="name"
								value={formData.name}
								placeholder="What is the name of the product?"
								onChange={handleChange}
							/>
						</FormGroup>
						<FormGroup>
							<Label for="description">Product description</Label>
							<Input
								id="description"
								name="description"
								type="textarea"
								value={formData.description}
								placeholder="What is the description of the product?"
								onChange={handleChange}
							/>
						</FormGroup>
						<FormGroup>
							<Label for="recipe">Product recipe</Label>
							<Input
								id="recipe"
								name="recipe"
								type="textarea"
								value={formData.recipe}
								placeholder="What is the recipe of the product?"
								onChange={handleChange}
							/>
						</FormGroup>
						<FormGroup>
							<Label for="serve">Product serve</Label>
							<Input
								id="serve"
								name="serve"
								type="textarea"
								value={formData.serve}
								placeholder="How is the product served?"
								onChange={handleChange}
							/>
						</FormGroup>
						<Button onClick={handleSubmit}>Submit</Button>
					</Form>
				</CardBody>
			</Card>
		</section>
	);
};

export default NewProductForm;
