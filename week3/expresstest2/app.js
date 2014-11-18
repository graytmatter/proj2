var express = require("express");
	app = express();

require("locus");

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.get('/add/:n1/:n2', function(req, res) { //get route route then call function. get data from req(uest), then deliver a res(ponse)
	var n1 = parseFloat(req.params.n1);
	var n2 = parseFloat(req.params.n2);
	var calc = n1+n2;
	res.render('index', {result:calc});
});

app.get('/mult/:n1/:n2', function(req, res) { //get route route then call function. get data from req(uest), then deliver a res(ponse)
	var n1 = Number(req.params.n1);
	var n2 = Number(req.params.n2);
	var calc = n1*n2;
	res.render('index', {result:calc});
});

app.get('/user', function(req, res) { //get route route then call function. get data from req(uest), then deliver a res(ponse)
	res.render('index', {name:name, food:food});
});

app.get('*', function(req, res) { //always put this below getting '/'
	res.render('404'); //tells that if it can't get a route --> 404 page
});

app.listen(3000, function() { //do when server gets started
	console.log("Server starting on port 3000"); //will be logged in the terminal
});