// Requirements
// =================================================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var models = require('./models');
var methodOverride = require('method-override');

// Use Body Parser with Express middleware
// =================================================
app.use(bodyParser.urlencoded({ extended: false }));

// Method Override allows for deletion of info from the db
// =================================================
app.use(methodOverride('_method'));

// Set up handlebars
// =================================================
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// ============== Models (Routing??) ============== //

app.get('/', function(req,res){
	res.redirect('/burgers');
});

app.get('/burgers', function(req, res){
	res.render('partials/allburgers');
});

app.post('/burgers/create', function(req, res){
	console.log(req.body);
	
	models.Burgers.create({
		name: req.body.name
	});
	res.redirect('/burgers');
});

// ============== end of Models ============== //

// Start the server listening
// =================================================
var PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
	console.log("Listening on port " + PORT);
});