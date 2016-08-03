// Requirements
// =================================================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
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

var models = require('./models');

app.get('/', function(req,res){
	res.redirect('/burgers');
});

app.get('/burgers', function(req, res){
	res.render('partials/allburgers');
});

app.post('/user/create', function(req, res){
	console.log(req.body);
	// models.Users.findOne({where: { email: req.body.newemail}})
	// .then(function(users){
	// 	console.log(JSON.stringify(users));
	// })
	models.Users.create({
		name: req.body.newname,
		email: req.body.newemail,
		password: sha1(req.body.newpassword)
	});
	res.send('Thank you for signing up!');
});

// ============== end of Models ============== //

// Start the server listening
// =================================================
var PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
	console.log("Listening on port " + PORT);
});