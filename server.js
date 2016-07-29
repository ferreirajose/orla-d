var http = require("http");
var app = require("./config/express")();  
	require("./config/database")("mongodb://localhost/beachOrla");

http.createServer(app).listen(app.get('port'), function() {
	console.log("Server Running in Port: " + app.get('port'));	
});                                                                                     