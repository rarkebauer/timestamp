var express = require('express');
var app = express();

//require the dates.js file
var date = require('./dates.js');

//give directions on the home page
app.get('/', function(req, res) {
	res.send('Welcome to the date converter. Type a valid unix date in the url to return the natural date or type a natural date in the form /Month Day, Year to return the corresponding unix date');
});

function dateRoute(req, res) { //req.params[0] is what you typed into the address bar
	//if the input is a standard date, send an object with the inputted natural date and corresponding unix date
	if(date.checkStd(req.params[0]) != null){ 
		var num = date.checkStd(req.params[0]);
		var stringy = num.toString(); //checkStd returns a number so it must be converted to a string
		var result = {
			"unix": stringy,
			"natural": req.params[0]
		} 
		res.send(result);
	//if the input is a unix date, send an object with the inputted unix date and corresponding natural date
	} else if(date.checkUnix(req.params[0]) != null) {
		var convertToStd = date.checkUnix(req.params[0]);
		var answer = {
			"unix": req.params[0],
			"natural": convertToStd
		}
		res.send(answer);
	} 
	//if the input isn't a valid unix or natural date, send an error message
	else {
		res.send('Not a valid natural or unix date');
	}
    
	
} 
//callback 
app.get("/*", dateRoute);


app.listen(3000, function() {
	console.log('Example app listening on port 3000!')
});