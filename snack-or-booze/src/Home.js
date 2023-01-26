import React from 'react';
import { Card, CardBody, CardTitle, CardGroup, CardImg, CardSubtitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

function Home({ snacks, drinks }) {
	let edamame = snacks.find((s) => s.name === 'Spicy Garlic Edamame');
	let martini = drinks.find((d) => d.name === 'Martini');
	let nachos = snacks.find((s) => s.name === 'Nachos');
	return (
		<section className="col-md-8">
			<Card>
				<CardBody className="text-center">
					<CardTitle>
						<h3 className="font-weight-bold">Welcome to Silicon Valley's premier dive cafe!</h3>
						<p>
							We have {snacks.length} different <Link to="/snacks">snacks</Link> & {drinks.length}{' '}
							different <Link to="/drinks">drinks</Link> for all the hard working techies.
						</p>
					</CardTitle>
				</CardBody>
			</Card>
			<CardTitle className="text-center">
				<h2>~A few of our most popular items~</h2>
			</CardTitle>
			<CardGroup>
				<Card>
					<Link to={`/snacks/${edamame.id}`}>
						<CardImg alt="edamame" src={edamame.imageUrl} top width="100%" />
					</Link>
					<CardBody>
						<CardTitle tag="h5">{edamame.name}</CardTitle>
						<CardSubtitle className="mb-2 text-muted" tag="h6">
							⭐⭐⭐⭐
						</CardSubtitle>
						<CardText>{edamame.description}</CardText>
					</CardBody>
				</Card>
				<Card>
					<Link to={`/drinks/${martini.id}`}>
						<CardImg alt="martini" src={martini.imageUrl} top width="100%" />
					</Link>
					<CardBody>
						<CardTitle tag="h5">Martini</CardTitle>
						<CardSubtitle className="mb-2 text-muted" tag="h6">
							⭐⭐⭐⭐
						</CardSubtitle>
						<CardText>{martini.description}</CardText>
					</CardBody>
				</Card>
				<Card>
					<Link to={`/snacks/${nachos.id}`}>
						<CardImg alt="nachos" src={nachos.imageUrl} top width="100%" />
					</Link>
					<CardBody>
						<CardTitle tag="h5">Nachos</CardTitle>
						<CardSubtitle className="mb-2 text-muted" tag="h6">
							⭐⭐⭐⭐⭐
						</CardSubtitle>
						<CardText>{nachos.description}</CardText>
					</CardBody>
				</Card>
			</CardGroup>
		</section>
	);
}

export default Home;
