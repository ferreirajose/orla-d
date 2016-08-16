var express = require("express");
var bodyParser = require('body-parser');
var consign = require("consign");
var methodOverride = require('method-override');

var app = express();

module.exports = function () {
	app.set('port', 3500);
	app.use(express.static('./public'));
    
    app.use(bodyParser.urlencoded({extend: true}));
    app.use(bodyParser.json());
    app.use(methodOverride());
	
	consign({cwd: 'app'})
		.include('models')
		.then('controllers')
		.then('routes')
		.into(app);

	return app;
};