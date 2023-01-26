import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

function ProductItem({ items, cantFind }) {
	const { id } = useParams();

	let product = items.find((product) => product.id === id);
	if (!product) return <Redirect to={cantFind} />;

	return (
		<section>
			<Card>
				{product.imageUrl && <CardImg alt={product.id} src={product.imageUrl} top width="100%" />}
				<CardBody>
					<CardTitle className="font-weight-bold text-center">{product.name}</CardTitle>
					<CardText className="font-italic">{product.description}</CardText>
					<p>
						<b>Recipe:</b> {product.recipe}
					</p>
					<p>
						<b>Serve:</b> {product.serve}
					</p>
				</CardBody>
			</Card>
		</section>
	);
}

export default ProductItem;
