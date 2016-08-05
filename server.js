// Requirements
// =================================================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var models = require('./models');
var methodOverride = require('method-override');

app.use(express.static(process.cwd() + '/public'));

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

// Routes
// =================================================
var routes = require('./controllers/burger_controller.js');
app.use('/', routes);

// Start the server listening
// =================================================
var PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
	console.log("Listening on port " + PORT);
});