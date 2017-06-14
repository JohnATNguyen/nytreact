var Article = require('../models/article');

module.exports = {
	index: function(req, res) {
		console.log(req.query);
		Article.find({}, function(err, doc) {
			if (err) {
				return err;
			} else {
				res.json(doc);
			}
		});
	},
	create: function(req, res) {
		console.log(req.body);
		Article.create(req.body, function(err, doc) {
			if (err) {
				return err;
			} else {
				res.json(doc);
			}
		});
	},
	update: function(req, res) {
		Article.update({
			_id: req.params.id
		}, req.body, function(err, doc) {
			if (err) {
				return err;
			} else {
				res.json(err);
			}
		});
	},
	destroy: function(req, res) {
		Article.remove({
			_id: req.params.id
		}, function(err, doc) {
			if (err) {
				return err;
			} else {
				res.json(doc);
			}
		});
	}
}