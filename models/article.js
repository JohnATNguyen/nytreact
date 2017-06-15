var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var articleSchema = new Schema({
	title: String,
	date: Date,
	url: String,
	saveDate: {
		type: Date,
		default: Date.now
	}
	// favorited: {
	// 	type: Boolean,
	// 	default: false
	// }
});

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;