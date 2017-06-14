var express = require('express');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');
var bluebird = require('bluebird');
var bodyParser = require('body-parser');
var routes = require('./routes/routes');

var PORT = process.env.PORT || 3000;
var app = express();
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
mongoose.Promise = bluebird;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static('./public'));
app.use('/', routes);

var db = process.env.MONGODB_URI || 'mongodb://localhost/nytreact';

mongoose.connect(db, function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log('mongoose connection is successful');
	}
});

app.listen(PORT, function() {
	console.log('Now listening on port %s!', PORT);
});