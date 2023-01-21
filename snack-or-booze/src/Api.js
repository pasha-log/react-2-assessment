import axios from 'axios';

const BASE_API_URL = 'http://localhost:5000';

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {
	static async getProducts(productType) {
		const result = await axios.get(`${BASE_API_URL}/${productType}`);
		return result.data;
	}

	static async createProduct(data) {
		await axios.post(`${BASE_API_URL}/${data.productType}`, {
			id: `${data.name.replace(/\s+/g, '-').toLowerCase()}`,
			name: `${data.name}`,
			description: `${data.description}`,
			recipe: `${data.recipe}`,
			serve: `${data.serve}`
		});
	}
}

export default SnackOrBoozeApi;
