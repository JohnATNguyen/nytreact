import axios from 'axios';

const API = {
	getQuotes: () => {
		return axios.get('/api/saved');
	},
	saveQuote: (title, url) => {
		return axios.post('/api/saved', {title: title, url: url});
	},
	deleteQuote: (id) => {
		return axios.delete(`/api/saved/${id}`);
	},
	favoriteQuote: (article) => {
		article.favorited = !quote.favorited;
		const { _id, favorited } = quote;
		return axios.patch(`/api/saved/${_id}`, { favorited });
	}
};

export default API;