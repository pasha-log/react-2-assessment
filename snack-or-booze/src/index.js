import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

let defaultData = {
	drinks: [
		{
			id: 'martini',
			name: 'Martini',
			description: 'An ice-cold, refreshing classic.',
			recipe: 'Mix 3 parts vodka & 1 part dry vermouth.',
			serve: 'Serve very cold, straight up.',
			imageUrl: 'https://toastmag.co.nz/assets/Uploads/martini.jpg'
		},
		{
			id: 'negroni',
			name: 'Negroni',
			description: 'A nice drink for a late night conversation.',
			recipe: 'Mix equal parts of gin, Campari, and sweet vermouth.',
			serve: 'Serve cold, either on the rocks or straight up.',
			imageUrl:
				'https://static4.depositphotos.com/1006799/270/i/600/depositphotos_2701510-stock-photo-negroni.jpg'
		},
		{
			id: 'gin-and-tonic',
			name: 'Gin and Tonic',
			description: 'Like regular tonic, but with gin.',
			recipe: 'Mix 2 parts gin & 1 part tonic water.',
			serve: 'Serve in a tall glass over ice, garnished with a lime wedge.',
			imageUrl:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZO7bni9y7uh7cScT_H6pHqSlxLSi_0m0eTw&usqp=CAU'
		},
		{
			id: 'diet-coke',
			name: 'Diet Coke',
			description: 'Crisp!',
			recipe: 'Open can.',
			serve: 'Immediately.',
			imageUrl:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgBj3EfbaYkUca2URlCRhaNUUPLU_KlmWHhQ&usqp=CAU'
		}
	],
	snacks: [
		{
			id: 'nachos',
			name: 'Nachos',
			description: 'An American classic!',
			recipe: 'Cover expensive, organic tortilla chips with Cheez Whiz.',
			serve: 'Serve in a hand-thrown ceramic bowl, garnished with canned black olives',
			imageUrl: 'https://metro.co.uk/wp-content/uploads/2015/11/insane-cake-that-looks-like-nachos-3.png'
		},
		{
			id: 'hummus',
			name: 'Hummus',
			description: 'Sure to impress your vegan friends!',
			recipe: 'Purchase one container of hummus.',
			serve: 'Place unceremoniously on the table, along with pita bread.',
			imageUrl:
				'https://i2-prod.edinburghlive.co.uk/incoming/article15442779.ece/ALTERNATES/s615/0_syrian-supper-club-edinburgh.png'
		},
		{
			id: 'arugula-and-walnut-salad',
			name: 'Arugula and Walnut Salad',
			description: 'Tart and delicious.',
			recipe: 'Mix arugula, toasted walnuts, and thinly-sliced Parmesan cheese. Dress with lemon and olive oil.',
			serve: 'Place on tiny, precious little plates.',
			imageUrl:
				'https://marvel-b1-cdn.bc0a.com/f00000000264724/www.residentialhealthcaregroup.com/wp-content/uploads/2018/03/Recipe-BLOG-MangoChicken-600x460-150115.png'
		},
		{
			id: 'spicy-garlic-edamame',
			name: 'Spicy Garlic Edamame',
			description: 'Another vegan friendly addition!',
			recipe: 'Deep fried edamame tossed in shichimi and diced garlic',
			serve: 'Two small plates',
			imageUrl:
				'https://st3.depositphotos.com/9050074/32298/i/600/depositphotos_322984980-stock-photo-spicy-sambal-edamame-with-chopsticks.jpg'
		}
	]
};

localStorage.setItem('data', JSON.stringify(defaultData));
