import axios from 'axios';

const API = {
	getArticles: (topic, startYear, endYear) => {
		var authKey = "72703b36264e4b7888a6e85eb34910a5";
		var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";
		var queryURL = queryURLBase + topic;
		if (parseInt(startYear)) {
			queryURL = queryURL + "&begin_date=" + startYear + "0101";
		}
		if (parseInt(endYear)) {
			queryURL = queryURL + "&end_date=" + endYear + "0101";
		}
		return axios.get(queryURL);
	},
	saveArticle: (title, url) => {
		return axios.post('/api/saved', {title: title, url: url});
	},
	deleteArticle: (id) => {
		return axios.delete(`/api/saved/${id}`);
	},
	favoriteArticle: (article) => {
		article.favorited = !article.favorited;
		const { _id, favorited } = article;
		return axios.patch(`/api/saved/${_id}`, { favorited });
	}
};

export default API;