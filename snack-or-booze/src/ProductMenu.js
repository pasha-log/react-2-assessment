import React from 'react';
import { Link } from 'react-router-dom';
import './ProductMenu.css';
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from 'reactstrap';

function ProductMenu({ products, title }) {
	return (
		<section className="col-md-4">
			<Card>
				<CardBody>
					<CardTitle className="font-weight-bold text-center">{title} Menu</CardTitle>
					<CardText>
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</CardText>
					<ListGroup>
						{products.map((product) => (
							<Link to={`/${title}/${product.id}`} key={product.id}>
								<ListGroupItem>{product.name}</ListGroupItem>
							</Link>
						))}
					</ListGroup>
				</CardBody>
			</Card>
		</section>
	);
}

export default ProductMenu;
